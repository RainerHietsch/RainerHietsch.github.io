import { clear } from '@testing-library/user-event/dist/clear';
import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    count: 0,
    npcs: [],
    settlements: [],
    currentResponse: '',
    currentQuestions: [],
    currentDescriptions: [],
    currentScene: '',
    responses: [],
    lastPrompt: '',
    prompts: [],
    model: "mistralai/mistral-7b-instruct:free",
    isLoading: false,
    storySoFar: "",
    region: {name: '', areas: null},
    customModel: null,
    saveKeys: [],
    worldSetting: "",
    gameSystem: "We are using the Genesys RPG system. It is a narrative dice system that uses custom dice to determine the outcome of actions.",
},

  actions: {
    addQuestion:
        (question) =>
        ({ setState, getState }) => {
            setState({
            currentQuestions: [...getState().currentQuestions, question],
            });
        },
    addDescription:
        (description) =>
        ({ setState, getState }) => {
            setState({
            currentDescriptions: [...getState().currentDescriptions, description],
            });
        },
    addNpc:
        (npc) =>
        ({ setState, getState }) => {
            setState({
            npcs: [...getState().npcs, npc],
            });
        },
    addToResponses:
        (response) =>
        ({ setState, getState }) => {
            setState({
            responses: [...getState().responses, response],
            });
        },
    addToPrompts:
        (prompt) =>
        ({ setState, getState }) => {
            setState({
            prompts: [...getState().prompts, prompt],
            });
        },
    saveSceneDescription:
        (sceneDescription) =>
        ({ setState }) => {
            setState({
            currentScene: sceneDescription,
            });
        },
    resetInputs:
        () =>
        ({ setState }) => {
            setState({
            currentQuestions: [],
            currentDescriptions: [],
            currentScene: '',
            });
        },
    setModel:
        (model) =>
        ({ setState }) => {
            setState({
            model,
            });
        },
    removeModel:
        () =>
        ({ setState }) => {
            setState({
            model: null,
            });
        },
    setLoading:
        (isLoading) =>
        ({ setState }) => {
            setState({
            isLoading,
            });
        },
    setStorySoFar:
        (storySoFar) =>
        ({ setState }) => {
            setState({
            storySoFar,
            });
        },
    saveStateToLocalStorage:
        (slot) =>
        ({ getState }) => {
            localStorage.setItem(`saveSlot${slot}`, JSON.stringify(getState()));
        },
    loadStateFromLocalStorage:
        (slot) =>
        ({ setState }) => {
            const savedState = JSON.parse(localStorage.getItem(`saveSlot${slot}`));
            if (savedState) {
                setState(savedState);
            }
        },
    appendToCurrentResponse:
        (response) =>
        ({ setState, getState }) => {
            setState({
            currentResponse: getState().currentResponse + response,
            });
        },
    clearCurrentResponse:
        () =>
        ({ setState }) => {
            setState({
            currentResponse: '',
            });
        },
    setRegion:
        (region) =>
        ({ setState }) => {
            setState({
            region,
            });
        },
    addSettlement:
        (settlement) =>
        ({ setState, getState }) => {
            setState({
            settlements: [...getState().settlements, settlement],
            });
        },
    setLastPrompt:
        (lastPrompt) =>
        ({ setState }) => {
            setState({lastPrompt});
        },
    removeLastResponse:
        () =>
        ({ setState, getState }) => {
            const responses = getState().responses;
            responses.pop();
            setState({responses});
        },
    setCustomModel:
        (customModel) =>
        ({ setState }) => {
            setState({customModel});
        },
    removeCustomModel:
        () =>
        ({ setState }) => {
            setState({customModel: null});
        },
        setWorldSetting:
        (worldSetting) =>
        ({ setState, getState }) => {
            const currentState = getState();
            const newState = JSON.parse(JSON.stringify(currentState));
            newState.worldSetting = worldSetting;
            setState(newState);
        },
    saveSaveSlotInformation:
        (slot, title) =>
        ({ setState, getState }) => {
            const newSave = {slot, title};
            setState({saveKeys: [...getState().saveKeys, newSave]});
            localStorage.setItem('saveKeys', JSON.stringify(getState().saveKeys));
        },
    setSaveKeys:
        (saveKeys) =>
        ({ setState }) => {
            setState({saveKeys});
        },
    deleteSaveSlotInformation:
        (slot) =>
        ({ setState, getState }) => {
            const saveKeys = getState().saveKeys.filter((save) => save.slot !== slot);
            setState({saveKeys});
            localStorage.setItem('saveKeys', JSON.stringify(saveKeys));
        },
    overwriteSaveSlotInformation:
        (slot) =>
        ({ setState, getState }) => {
            console.log('Overwriting save 2');
            localStorage.setItem(`saveSlot${slot}`, JSON.stringify(getState()));
        },
  },
});

export const useStore = createHook(Store);