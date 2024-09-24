import React, { useEffect, useState } from 'react';
import { useStore } from '../store/Store';
import Icon from '@mdi/react';
import { mdiCached } from '@mdi/js';

const MainEditor = (sideBarRef) => {
    const [state, actions] = useStore();

    const renderTextWithLineBreaks = (text) => {
        const formattedText = text.replace(/\\n/g, '<br />').replace(/\\/g, '');
        return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
    };

    const redo = () => {
        if (sideBarRef.sideBarRef.current) {
          sideBarRef.sideBarRef.current.askGM(true);
        }
      };

    return <div className="w-full relative h-screen max-h-screen p-5 font-kreon overflow-scroll text-lg">
        <div>
           <div>{renderTextWithLineBreaks(state.currentResponse)}</div>
           {state.currentResponse ?
           <div className='cursor-pointer flex justify-end' onClick={redo}>
                <Icon path={mdiCached} size={1} color="#475569" className='hover:scale-125 hover:rotate-180 transition-transform duration-500' />
           </div> : null}
        </div>
    </div>
}
export default MainEditor;