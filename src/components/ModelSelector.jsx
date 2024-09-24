import React from 'react';
import Header from '../components/Header';
import Model from '../components/Model';
import { useStore } from '../store/Store';

const ModelSecelector = () => {
    const [state, actions] = useStore();

    const setCustomModel = (e) => {
        actions.setCustomModel(e.target.value);
        actions.removeModel();
    };

    return (
        <div>
            <Model slug={'gryphe/mythomax-l2-13b'} name={'MythoMax L2 13B'} price={'$'} nsfw={true}/>
            <Model slug={'meta-llama/llama-3.1-405b-instruct'} name={'Llama 3.1 405B'} price={'$$'} nsfw={false}/>
            <Model slug={'openai/gpt-4o'} name={'ChatGPT-4o'} price={'$$$'} nsfw={false}/>
            <Model slug={'mistralai/mistral-7b-instruct:free'} name={'MistralAI 7B Free'} price={false} nsfw={true}/>
            <br />
            <Header text='Custom Model' />
            <input onChange={setCustomModel} value={state.customModel} type="text" className="block w-full text-sm bg-transparent resize-none focus:border-none focus:outline-none" placeholder="Enter a custom model here"/>
        </div>
    );
};

export default ModelSecelector;

