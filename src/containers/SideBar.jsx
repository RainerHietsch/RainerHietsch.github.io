import React, { act, useState, forwardRef, useImperativeHandle} from 'react';
import { useStore } from '../store/Store';
import Questions from '../components/Questions';
import SceneDescription from '../components/SceneDescription';
import NPCs from '../components/NPCs';
import axios from 'axios';
import MenuItem from '../components/MenuItem';
import Settings from './Settings';
import Descriptions from '../components/Descriptions';
import Settlements from '../components/Settlements';
import World from '../containers/World';
import { mdiWizardHat, mdiContentSave, mdiBookOpenVariantOutline, mdiCogOutline } from '@mdi/js';
import SaveLoad from '../components/SaveLoad';

const SideBar = forwardRef((props, ref) => {

    const [state, actions] = useStore();
    const apiKey = "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";  

    const [menu, setMenu] = useState('gamemaster');

   const askGM = async (redo = false) => {
        let prompt = "";
        if(redo) {
            prompt = state.lastPrompt;
            actions.removeLastResponse();

        } else {
            prompt = buildPrompt();
            actions.setLastPrompt(prompt);
            actions.addToPrompts(state.currentScene);
        }

        console.log(prompt);
        sendToAI(prompt);
        actions.resetInputs();
    }

    useImperativeHandle(ref, () => ({
        askGM,
      }));

    const summeriseStory = async (previousResponses) => {
        let storySoFar = state.storySoFar;
        for (let i = previousResponses.length - 5; i < previousResponses.length; i++) {
            storySoFar += previousResponses[i];
        }
        const summerisePrompt = "Can you summerise this story. Don't add anything else to your response, just the summary of the story. Preserve some details in your summary. Here is the story: " + storySoFar;
        let messages = [];
        messages.push({"role": "user", "content": summerisePrompt});
        await axios.post("https://openrouter.ai/api/v1/chat/completions", {
            "model": "mistralai/mistral-7b-instruct:free",
            "messages": messages,
        }, {
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            }
        }).then(response => {
            const aiResponse = response.data.choices[0].message.content;
            actions.setStorySoFar(aiResponse);
            console.log(aiResponse);
        }).catch(error => {
            console.error(error);
        });
    }

    async function streamData(url, config) {
        console.log(config.messages);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${config.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: config.state.model,
            messages: config.messages,
            stream: true,
          }),
        });
      
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
      
        return new ReadableStream({
          async start(controller) {
            let currentText = '';
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                actions.addToResponses(currentText);
                actions.setLoading(false);
                if (state.responses.length > 0 && state.responses.length % 5 === 0) {
                    summeriseStory(state.responses);
                }
                break;
              }
                const chunk = decoder.decode(value, { stream: true });

                // console.log(chunk); // Process each chunk

                const regex = /"content":"((?:[^"\\]|\\.)*)"/g; // Notice the 'g' flag for global search
                const matches = [...chunk.matchAll(regex)]; // Use matchAll and spread into an array

                matches.forEach(match => {
                    const contentValue = match[1]; // Extract content value from each match
                    actions.appendToCurrentResponse(contentValue);
                    currentText += contentValue;
                });

              controller.enqueue(chunk);
            }
            controller.close();
            reader.releaseLock();
          }
        });
      }

    const sendToAI = async (prompt) => {

        const previousPrompts = state.prompts;
        const previousResponses = state.responses;

        let messages = [];
        if (previousPrompts.length > 0){
            const start = Math.max(0, previousPrompts.length - 5);
            for (let i = start; i < previousPrompts.length; i++) {
                messages.push({"role": "user", "content": previousPrompts[i]});
                messages.push({"role": "assistant", "content": previousResponses[i]});
            }
        }
        messages.push({"role": "user", "content": prompt});

        actions.setLoading(true);

        const config = {
            apiKey,
            state: { model: state.customModel === null || state.customModel === '' ? state.model : state.customModel },
            messages: messages,
            presence_penalty: Math.random() * 0.1,
            repetition_penalty: Math.random() * 0.1 + 1
          };

        actions.clearCurrentResponse();

        streamData('https://openrouter.ai/api/v1/chat/completions', config)
          .finally(() => {
          })
          .catch(error => console.error(error)); 
    }

    const buildPrompt = () => {
        let prompt = "I am playing a Solo Roleplaying game. You act as the Game Master, interpreting results and answering my questions. You are experienced in Dungeons & Dragons and Pathfinder and may other Roleplaying Games. You are an expert in describing an active and living world. Take into account the story so far. \n\n";
        if (state.storySoFar !== "") prompt += "[Story So Far] " + state.storySoFar + "\n\n";
        prompt += addGameSystem()
        prompt += addWorldBuilding()
        prompt += addNPCs()
        //prompt += addThreads()
        prompt += addScene()
        prompt += addPrompt()
        return prompt;
    }

    const addGameSystem = () => {
        return state.gameSystem;
    }

    const addWorldBuilding = () => {
        const world = " [Setting] " + state.worldSetting;
        const settlements = " There are several settlements in this world: " + JSON.stringify(state.settlements) + ".";
        return state.settlements.length === 0 ? world : world + settlements;
    }

    const addNPCs = () => {
        return ` [NPCs] ${state.npcs.map((npc, index) => npc.name + " - " + npc.description).join(', ')} \n\n`;
    }

    const addThreads = () => {
        return " [Threads] \n\n";
    }

    const addScene = () => {
        let string = ` [Scene] ${state.currentScene}`;
        if (state.currentQuestions.length > 0){
            string += ` I ask you, the gamemaster, a few questions: ${state.currentQuestions.map((question, index) => question.question + " Result: " + question.result).join(', ')}`;
        }
        if (state.currentDescriptions.length > 0){
            string += ` I have a few descriptions of things. I have two random words that I want you to interpret creatively. Do not repeat the these two words in your response: ${state.currentDescriptions.map((desc, index) => desc.question + " Result: " + desc.result).join(', ')}`;
        }
        string += "\n\n";

        return string;
    }

    const addPrompt = () => {
        return " [Instructions] Interpret the scene. Write a paragraph or two. Structure your response into paragraphs, dont respont with a single wall of text. Don't offer any choices and do not end on an open question. Just use the second person to describe the situation. Do not repeat anything from your last answers or from my message. If I interact with other NPCs, use direct speech for both me and the NPC. The writing should be crisp and easy to read. Do not mention anything outside the games' world, for example Mythic GME, as it would break the immersion. Don't repead anything from the scene description.";
    }

    return <div className='flex'>
                <div className='w-11/12'>
                    <div className='rounded-xl bg-slate-700 p-5 mt-5 h-[calc(100vh-40px)] mr-2'>
                        {menu === 'gamemaster' &&
                            <div className="p-10">
                                <SceneDescription />
                                <Questions />
                                <Descriptions />
                                <button className="btn btn-accent btn-sm btn-block -ml-5 mt-10" onClick={() => {askGM()}}>Ask GM</button>
                            </div>
                        }

                        {menu === 'codex' &&
                            <div>
                                <NPCs />
                                <Settlements />
                                <World />
                            </div>
                        }

                        {menu === 'saveload' &&
                            <div className="">
                                <SaveLoad />
                            </div>
                        }

                        {menu === 'settings' &&
                            <div className="">
                                <Settings />
                            </div>
                        }
                    </div>
                </div>
                <div className='w-1/12 h-screen max-h-screen pr-2'>
                    <br />
                    <MenuItem menu='gamemaster' icon={mdiWizardHat} setMenu={setMenu} />
                    <MenuItem menu='codex' icon={mdiBookOpenVariantOutline} setMenu={setMenu} />
                    <MenuItem menu='saveload' icon={mdiContentSave} setMenu={setMenu} />
                    <MenuItem menu='settings' icon={mdiCogOutline} setMenu={setMenu} />
                </div>
        </div>
});

export default SideBar;