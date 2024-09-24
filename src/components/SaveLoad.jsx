import React from 'react';
import { useStore } from '../store/Store';
import Header from './Header';
import axios from 'axios';
import SaveSlot from './SaveSlot';

const SaveLoad = () => {
    const [state, actions] = useStore();
    const apiKey = "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";  

    const getStoryTitle = async () => {
        let storySoFar = "";
        const previousResponses = state.responses;

        for (let i = previousResponses.length - 5; i < previousResponses.length; i++) {
            storySoFar += previousResponses[i];
        }
        const summerisePrompt = "Please generate a short title for this story. Don't add anything else to your response, just the title of the story. Keep the title short and on point. There is no need for a tagline. Here is the story: " + storySoFar;
        let messages = [];
        messages.push({"role": "user", "content": summerisePrompt});
        
        try {
            const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
                "model": "mistralai/mistral-7b-instruct:free",
                "messages": messages,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                }
            });
            const aiResponse = response.data.choices[0].message.content;
            console.log(aiResponse);
            return aiResponse;
        } catch (error) {
            console.error(error);
            return null; // or handle the error as needed
        }
    };

    const handleSave = async () => {
        const slot = Math.random().toString(36).substring(2, 14);
        const title = await getStoryTitle();
        actions.saveSaveSlotInformation(slot, title);
        actions.saveStateToLocalStorage(slot);
    };

    const handleLoad = (slot) => {
        const currentKeys = state.saveKeys;
        actions.loadStateFromLocalStorage(slot);
        actions.setSaveKeys(currentKeys);
    };

    const deleteSave = (slot) => {
        actions.deleteSaveSlotInformation(slot);
    }
    
    const overwriteSave = (slot) => 
    {
        console.log('Overwriting save');
        actions.overwriteSaveSlotInformation(slot);
    }

    const saveStates = state.saveKeys.map((save) => {
        return (
            <SaveSlot key={save.slot} save={save} load={handleLoad} delete={deleteSave} overwrite={overwriteSave}/>
        );
    });

    return (
        <div className='mt-10'>
            {saveStates}
            <button className="btn btn-accent btn-sm btn-block mt-10" onClick={() => {handleSave()}}>Create New Save</button>
        </div>
    );
};

export default SaveLoad;