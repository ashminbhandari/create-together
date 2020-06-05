import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const QuestionAndAnswer = ({text}) => {
    return (
        <div>
            <ReactTypingEffect
                text={text}
                typingDelay={1000}
                speed={100}
            />
            <br/>
        </div>
    );
};

export default QuestionAndAnswer;

