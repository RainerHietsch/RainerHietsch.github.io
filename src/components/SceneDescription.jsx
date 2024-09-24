import React from 'react';
import { useStore } from '../store/Store';
import Header from './Header';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

const SceneDescription = () => {
    const [state, actions] = useStore();

    const saveSceneDescription = (e) => {
        actions.saveSceneDescription(e.target.value);
    }

    return (
        <div className="-ml-10 -mt-10">
            <Header text='Scene Description' />
            {state.isLoading ? <Icon className="flex justify-center items-center h-screen" path={mdiLoading} size={2} spin/> :
            <textarea rows="6" className="block w-full text-sm bg-transparent resize-none focus:border-none focus:outline-none" placeholder="What is happening? What are you doing?" onChange={saveSceneDescription}>{state.currentScene}</textarea>}
        </div>
    );
};

export default SceneDescription;