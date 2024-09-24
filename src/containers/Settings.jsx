import React from 'react';
import Header from '../components/Header';
import ModelSecelector from '../components/ModelSelector';
import SaveLoad from '../components/SaveLoad';
import GameSettings from '../containers/GameSettings';

const Settings = () => {
    return (
        <div>
            <Header text='Game' />
            <GameSettings />
            <Header text='Model' />
            <ModelSecelector />
        </div>
    );
};

export default Settings;

