import React, {useRef, useState} from "react";
import ReactTypingEffect from 'react-typing-effect';
import './QuestionAndAnswer.css'

const QuestionAndAnswer = ({text}) => {
    const [tab, currentTab] = useState('name');
    const [name, setName] = useState('');

    let entryBox = useRef();

    function nextPrompt() {

    }

    return (
        <div className="row-center-flex">
            <div>

            </div>
            <div>
                <ul>
                    <li className="qNa-list-item">
                        <ReactTypingEffect
                            text={text}
                            typingDelay={1000}
                            speed={100}
                        />
                    </li>
                    <li className="qNa-list-item">
                        <input ref={entryBox} id="answer-entry-box" type='text'/>
                    </li>
                </ul>
            </div>
            <div>
                <p id="arrow" onClick={nextPrompt}>--></p>
            </div>
        </div>

    );
};

export default QuestionAndAnswer;

