import React from 'react';
import { useState } from 'react';
import { useStore } from '../store/Store';
import Header from './Header';

function NPCs() {
    const [state, actions] = useStore();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const npcs = state.npcs.map((npc, index) => {
        return (
            <div key={index}>{npc.name} - {npc.description}</div>
        )
    });

    const addNpc = () => {
        console.log(name, description);
        actions.addNpc({name, description});
    }

    return (
        <div className={'w-full'}>
            <Header text='NPCs' />
            {npcs}
            <div><input type="text" className="input input-bordered w-full" placeholder="Name" onChange={(e) => setName(e.target.value)}/></div>
            <div><textarea className="textarea textarea-primary w-full mt-3" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea></div>
            <button className="btn btn-accent mt-2" onClick={()=>{addNpc()}}>Add NPC</button>
        </div>
    );
}

export default NPCs;