import React from 'react';
import { useStore } from '../store/Store';
import axios from 'axios';
import generateSettlement from '../generators/RegionGenerator';
import Header from './Header';

function Settlements(props) {
    const [state, actions] = useStore();

    const generateSingleSettlement = () => {
        const settlement = generateSettlement();
        actions.addSettlement(settlement);
    }

    const settlements = state.settlements.map(settlement => {
        const randomString = Math.random().toString(36).substring(7);

        const sites = settlement.sites.map(site => {
            return (
                <div className='flex gap-2'>
                    <div key={randomString + site.name}>{site.name}</div>
                    <div className='text-sm leading-[24px] text-slate-500' key={randomString + site.type}>({site.type})</div>
                </div>
            );
        });

        return (
            <div className='rounded p-3 font-kreon bg-slate-800 mt-5'>
                <div className='flex justify-between border-b-slate-700 border-b'>
                    <div className='text-xl'>{settlement.name}</div>
                    <div className='text-sm leading-[33px] text-slate-500'>({settlement.type})</div>
                </div>
                <div className='mt-1 flex justify-between'>
                    <div>
                        <div className='border-b border-b-slate-700'>{settlement.economicFocus}</div>
                        <div className='text-slate-500'>Economic Focus</div>
                    </div>
                    <div>
                        <div className='border-b border-b-slate-700'>{settlement.cultureFocus}</div>
                        <div className='text-slate-500'>Culture Focus</div>
                    </div>
                </div>
                <br />
                <div className='border-b border-b-slate-700'>Tags</div>
                <div className='flex gap-2'>{settlement.tags.join(', ')}</div>
                <br />
                <div className='border-b border-b-slate-700'>Sites</div>
                <div>{sites}</div>
            </div>
        );
    });

    return (
        <div className='mt-5'>
            <Header text='Settlements' />
            {settlements}
            <button onClick={() => {generateSingleSettlement()}}>Generate Settlement</button>
        </div>
    );
}

export default Settlements;