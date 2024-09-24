import React from 'react';
import { useStore } from '../store/Store';

function Model(props) {

    const [state, actions] = useStore();

    const selectModel = () => {
        actions.setModel(props.slug);
    }

    return (
        <div onClick={() => {selectModel()}} className={`font-kreon rounded-md p-2 -ml-2 ${state.model === props.slug ? 'border border-gray-500' : 'border border-transparent'} hover:border-gray-300 cursor-pointer`}>
            <div className='flex'>
                <div className='min-w-48'>{props.name}</div> 
                <div className='min-w-12'>{props.price}</div> 
                <div>{props.nsfw ? 'NSFW' : ''}</div> 
            </div>
        </div>
    );
}

export default Model;