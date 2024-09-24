import React, { useEffect, useRef } from 'react';
import './output.css';
import MainEditor from './components/MainEditor';
import SideBar from './containers/SideBar';
import { useStore } from './store/Store';

function App() {
  const sideBarRef = useRef();
  const [state, actions] = useStore();

  useEffect(() => {
    const saveKeys = JSON.parse(localStorage.getItem('saveKeys'));
    if (saveKeys) {
      actions.setSaveKeys(saveKeys);
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-7/12">
        <MainEditor sideBarRef={sideBarRef} />
      </div>
      <div className="w-5/12">
        <SideBar ref={sideBarRef} />
      </div>
    </div>
  );
}

export default App;