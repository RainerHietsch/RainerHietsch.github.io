import React, { useState } from 'react';
import { useStore } from '../store/Store';
import Header from './Header';

const Questions = () => {
    const [questionChanceButtonText, setQuestionChanceButtonText] = useState('Set Chance')
    const [question, setQuestion] = useState('')
    const [chance, setChance] = useState(0)
    const [state, actions] = useStore();
    const [hideResults, setHideResults] = useState(false);

    const chanceTexts = {
        '-4' : 'Impossible',
        '-3' : 'Nearly Impossible',
        '-2' : 'Very Unlikely',
        '-1' : 'Unlikely',
        '0' : '50/50',
        '1' : 'Likely',
        '2' : 'Very Likely',
        '3' : 'Nearly Certain',
        '4' : 'Certain'
    }

    const setQuestionChance = (chance) => {
        setQuestionChanceButtonText(chanceTexts[chance]);
        setChance(chance);
        document.querySelector('details').removeAttribute('open');
    }

    const askQuestion = () => {
        const roll = Math.floor(Math.random() * 100) + 1;

        let result = 'No';

        const mythicMatrix = {
            "4": [18, 90, 99],
            "3": [17, 85, 98],
            "2": [15, 75, 96],
            "1": [13, 65, 94],
            "0": [10, 50, 91],
            "-1": [7, 35, 88],
            "-2": [5, 25, 86],
            "-3": [3, 15, 84],
            "-4": [2, 10, 83]
        }

        if (roll <= mythicMatrix[chance][0]) result = 'Exceptional Yes';
        else if (roll <= mythicMatrix[chance][1]) result = 'Yes';
        else if (roll >= mythicMatrix[chance][2]) result = 'Exceptional No';
        else if (roll > mythicMatrix[chance][1]) result = 'No';

        const hidden = hideResults;
        
        actions.addQuestion({
            question,
            chance,
            result,
            roll,
            hidden,
        });

        setQuestion('');
    }

    const currentQuestions = state.currentQuestions.map((question, index) => {
        return (
            <div className='text-sm flex justify-between text-slate-300 mt-2'>
                <div>{question.question}</div>
                <div className={`rounded px-2 py-1 ${question.hidden ? 'bg-cyan-900' : 
                question.result === 'Yes' ? 'bg-green-950' :  
                question.result === 'Exceptional Yes' ? 'bg-green-700' : 
                question.result === 'No' ? 'bg-red-950' : 'bg-red-800'}`}>{question.hidden ? 'Hidden' : question.result}</div>
            </div>
        );
    });
        
    return <div className='w-full -ml-10 mt-5'>
        <Header text='Questions' />
        <div>
            {currentQuestions}
        </div>
        <div>
            <input value={question} type="text" className="block w-full text-sm bg-transparent resize-none focus:border-none focus:outline-none" placeholder="Ask your question here" onChange={(e) => setQuestion(e.target.value)}/>
            <div className='flex justify-between mt-5'>
                <div className="form-control">
                        <label className="label cursor-pointer flex justify-start">
                            <div className="label-text text-xs">Hide Results</div>
                            <input type="checkbox" className="ml-1 toggle toggle-sm toggle-success" onChange={(e) => setHideResults(e.target.checked)}/>
                        </label>
                </div>
                <div className="flex justify-end">
                    <details className="dropdown dropdown-left">
                        <summary className="btn btn-sm">{questionChanceButtonText}</summary>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => {setQuestionChance(4)}}><a>{chanceTexts['4']}</a></li>
                            <li onClick={() => {setQuestionChance(3)}}><a>{chanceTexts['3']}</a></li>
                            <li onClick={() => {setQuestionChance(2)}}><a>{chanceTexts['2']}</a></li>
                            <li onClick={() => {setQuestionChance(1)}}><a>{chanceTexts['1']}</a></li>
                            <li onClick={() => {setQuestionChance(0)}}><a>{chanceTexts['0']}</a></li>
                            <li onClick={() => {setQuestionChance(-1)}}><a>{chanceTexts['-1']}</a></li>
                            <li onClick={() => {setQuestionChance(-2)}}><a>{chanceTexts['-2']}</a></li>
                            <li onClick={() => {setQuestionChance(-3)}}><a>{chanceTexts['-3']}</a></li>
                            <li onClick={() => {setQuestionChance(-4)}}><a>{chanceTexts['-4']}</a></li>
                        </ul>
                    </details>
                    <button className="btn btn-sm btn-secondary" onClick={()=>{askQuestion()}}>Ask</button>
                </div>
            </div>
        </div>
    </div>
}
export default Questions;