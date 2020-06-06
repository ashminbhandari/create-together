import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import './QuestionAndAnswer.css'

const QuestionAndAnswer = ({text, answerRef, choices, answerIsTyped}) => {
    return (
        <div>
            <div id={'question'}>
                <ReactTypingEffect
                    text={text}
                    typingDelay={1000}
                    speed={100}
                />
            </div>
            {
                answerIsTyped ?  <input ref={answerRef} id="typed-answer" type='text'/> : <></>
            }
            {
                choices ? choices.map((button) => <button className="answer">{button}</button>) : <></>
            }
        </div>
    );
};

export default QuestionAndAnswer;

