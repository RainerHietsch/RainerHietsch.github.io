import React from 'react';
import { useStore } from '../store/Store';
import Header from '../components/Header';
import Subheader from '../components/Subheader';

const World = () => {
    const [state, actions] = useStore();

    const settings = [
        "The setting is a classic fantasy world. It is a world of magic and monsters, where heroes go on epic quests to save the world from evil. The world is filled with ancient ruins, dark forests, and treacherous mountains. The world is a place of wonder and danger, where anything is possible. Take inspiration from The Lord of the Rings, Dungeons & Dragons, and The Witcher.",
        "The setting is a cyberpunk dystopia. It is a world of high technology and low morals, where megacorporations rule the streets and the poor struggle to survive. The world is a place of neon lights and dark alleys, where hackers and robots fight for control of the city. The world is a place of corruption and greed. Take inspiration from Blade Runner, Neuromancer, and Ghost in the Shell.",
        "The setting is a post-apocalyptic wasteland. It is a world of ruins and radiation, where survivors scavenge for food and water in the ruins of the old world. The world is a place of mutants and monsters, where the strong prey on the weak. The world is a place of survival and sacrifice. Take inspiration from Mad Max, Fallout, and The Road.",
        "The setting is a dark, low-magic fantasy world. It is a world of grimdark and horror, where the forces of evil are always at the gates. The world is a place of shadows and secrets, where the heroes must fight against impossible odds to save the world. The world is a place of despair and darkness. Take inspiration from Game of Thrones, The Witcher, and Warhammer Fantasy.",
        "The setting is a realistic medieval world with no magic. It is a world of knights and peasants, where the king rules with an iron fist. The world is a place of war and politics, where the players must navigate the dangerous waters of court intrigue. The world is a place of honor and betrayal. Take inspiration from A Song of Ice and Fire, The Pillars of the Earth, and The Witcher.",
        "The setting is a classic space-opera. It is a world of starships and aliens, where heroes explore the galaxy in search of adventure. The world is a place of danger and wonder, where the players must fight against evil empires and ancient gods. The world is a place of heroism and sacrifice. Take inspiration from Star Wars, Mass Effect, and Dune."
    ]

    const saveWorldSetting = (e) => {
        actions.setWorldSetting(e.target.value);
    }

    const handleSettingClick = (index) => {
        actions.setWorldSetting(settings[index]);
        document.querySelector('details').removeAttribute('open');
    };

    return (
        <div className='mt-5'>
            <Header text='World Setting' />
            <Subheader text='Select a predefined option or manually enter your own setting.' />
            <details className="dropdown dropdown-left my-3">
                        <summary className="btn btn-sm">{'Select Setting'}</summary>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSettingClick(0)}><a>Classic Fantasy</a></li>
                <li onClick={() => handleSettingClick(1)}><a>Cyberpunk Dystopia</a></li>
                <li onClick={() => handleSettingClick(2)}><a>Post-Apocalyptic Wasteland</a></li>
                <li onClick={() => handleSettingClick(3)}><a>Dark Low-Magic Fantasy</a></li>
                <li onClick={() => handleSettingClick(4)}><a>Realistic Medieval</a></li>
                <li onClick={() => handleSettingClick(5)}><a>Classic Space-Opera</a></li>
                        </ul>
                    </details>
            <textarea rows="6" className="block w-full text-sm bg-transparent resize-none focus:border-none focus:outline-none" placeholder="Describe the Worlds Setting here" onChange={saveWorldSetting} defaultValue={state.worldSetting}></textarea>
        </div>
    );
};

export default World;