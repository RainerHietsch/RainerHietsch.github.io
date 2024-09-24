import React, { useState } from 'react';
import { useStore } from '../store/Store';
import Header from './Header';

const Descriptions = () => {
    const [description, setDescription] = useState('')
    const [state, actions] = useStore();
    const [hideResults, setHideResults] = useState(false);

    const currentDescriptions = state.currentDescriptions.map((desc, index) => {
        return (
            <div className='text-sm flex justify-between text-slate-300 mt-2'>
                <div>{desc.question}</div>
                <div className={`rounded px-2 py-1 bg-cyan-800`}>{desc.hidden ? 'Hidden' : desc.result}</div>
            </div>
        )
    });
    
    const getAttributes = () => {
        actions.addDescription({
            question: description,
            result: getDescription(DESC_VALUES_1, DESC_VALUES_2),
            hidden: hideResults,
        });
        setDescription('');
    }

    const getDescription = ($array1, $array2) => {
        const desc1 = $array1[Math.floor(Math.random() * $array1.length)];
        const desc2 = $array2[Math.floor(Math.random() * $array2.length)];
        return desc1 + " " + desc2;
    }

    const DESC_VALUES_1 = [
        "Adventurously",
        "Aggressively",
        "Anxiously",
        "Awkwardly",
        "Beautifully",
        "Bleakly",
        "Boldly",
        "Bravely",
        "Busily",
        "Calmly",
        "Carefully",
        "Carelessly",
        "Cautiously",
        "Ceaselessly",
        "Cheerfully",
        "Combatively",
        "Coolly",
        "Crazily",
        "Curiously",
        "Dangerously",
        "Defiantly",
        "Deliberately",
        "Delicately",
        "Delightfully",
        "Dimly",
        "Efficiently",
        "Emotionally",
        "Energetically",
        "Enormously",
        "Enthusiastically",
        "Excitedly",
        "Fearfully",
        "Ferociously",
        "Fiercely",
        "Foolishly",
        "Fortunately",
        "Frantically",
        "Freely",
        "Frighteningly",
        "Fully",
        "Generously",
        "Gently",
        "Gladly",
        "Gracefully",
        "Gratefully",
        "Happily",
        "Hastily",
        "Healthily",
        "Helpfully",
        "Helplessly",
        "Hopelessly",
        "Innocently",
        "Intensely",
        "Interestingly",
        "Irritatingly",
        "Joyfully",
        "Kindly",
        "Lazily",
        "Lightly",
        "Loosely",
        "Loudly",
        "Lovingly",
        "Loyally",
        "Majestically",
        "Meaningfully",
        "Mechanically",
        "Mildly",
        "Miserably",
        "Mockingly",
        "Mysteriously",
        "Naturally",
        "Neatly",
        "Nicely",
        "Oddly",
        "Offensively",
        "Officially",
        "Partially",
        "Passively",
        "Peacefully",
        "Perfectly",
        "Playfully",
        "Politely",
        "Positively",
        "Powerfully",
        "Quaintly",
        "Quarrelsomely",
        "Quietly",
        "Roughly",
        "Rudely",
        "Ruthlessly",
        "Slowly",
        "Softly",
        "Strangely",
        "Swiftly",
        "Threateningly",
        "Timidly",
        "Very",
        "Violently",
        "Wildly",
        "Yieldingly"
    ];

    const DESC_VALUES_2 = [
        "Abnormal",
        "Amusing",
        "Artificial",
        "Average",
        "Beautiful",
        "Bizarre",
        "Boring",
        "Bright",
        "Broken",
        "Clean",
        "Cold",
        "Colorful",
        "Colorless",
        "Comforting",
        "Creepy",
        "Cute",
        "Damaged",
        "Dark",
        "Defeated",
        "Dirty",
        "Disagreeable",
        "Dry",
        "Dull",
        "Empty",
        "Enormous",
        "Extraordinary",
        "Extravagant",
        "Faded",
        "Familiar",
        "Fancy",
        "Feeble",
        "Festive",
        "Flawless",
        "Forlorn",
        "Fragile",
        "Fragrant",
        "Fresh",
        "Full",
        "Glorious",
        "Graceful",
        "Hard",
        "Harsh",
        "Healthy",
        "Heavy",
        "Historical",
        "Horrible",
        "Important",
        "Interesting",
        "Juvenile",
        "Lacking",
        "Large",
        "Lavish",
        "Lean",
        "Less",
        "Lethal",
        "Lively",
        "Lonely",
        "Lovely",
        "Magnificent",
        "Mature",
        "Messy",
        "Mighty",
        "Military",
        "Modern",
        "Mundane",
        "Mysterious",
        "Natural",
        "Normal",
        "Odd",
        "Old",
        "Pale",
        "Peaceful",
        "Petite",
        "Plain",
        "Poor",
        "Powerful",
        "Protective",
        "Quaint",
        "Rare",
        "Reassuring",
        "Remarkable",
        "Rotten",
        "Rough",
        "Ruined",
        "Rustic",
        "Scary",
        "Shocking",
        "Simple",
        "Small",
        "Smooth",
        "Soft",
        "Strong",
        "Stylish",
        "Unpleasant",
        "Valuable",
        "Vibrant",
        "Warm",
        "Watery",
        "Weak",
        "Young"
    ];
        
    return <div className='w-full -ml-10 mt-10'>
        <Header text='Descriptions' />
        <div>
            {currentDescriptions}
        </div>
        <div>
            <input value={description} type="text" className="block w-full text-sm bg-transparent resize-none focus:border-none focus:outline-none" placeholder="What do you want to describe?" onChange={(e) => setDescription(e.target.value)}/>
            <div className='flex justify-between mt-5'>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text text-xs">Hide Results</span>
                        <input type="checkbox" className="toggle ml-2 toggle-success toggle-sm" onChange={(e) => setHideResults(e.target.checked)}/>
                    </label>
                </div>
                <button className="btn btn-sm btn-secondary" onClick={()=>{getAttributes()}}>Ask</button>
            </div>
        </div>
    </div>
}
export default Descriptions;