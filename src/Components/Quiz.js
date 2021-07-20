import React, { useEffect, useState } from 'react';
import '../Styles/Quiz.css'
import Question from './Question';

const Quiz = ({name, ques, setQues, score, setScore}) => {

    const [thisQues, setThisQues] = useState(0);
    const [options, setOptions] = useState();

    useEffect(()=>{
        setOptions(ques && shuffleOptions([
            ques[thisQues]?.correct_answer,
            ...ques[thisQues]?.incorrect_answers
        ]));
    },[ques,thisQues]);

    const shuffleOptions = opts =>{
        return opts.sort(()=>Math.random()-0.5);
    }

    return (
        <div className="Quiz">
            <h2 className="Quiz-greet">
                {`HI ${name},`}
            </h2>
            <h2 className="Quiz-score">{`Your Score: ${score}`}</h2>
            <div className="Quiz-ques">
                {ques ? <Question 
                    thisQues={thisQues} 
                    setThisQues={setThisQues} 
                    ques={ques}
                    setQues={setQues}
                    options={options}
                    correct={ques[thisQues]?.correct_answer} 
                    score={score}
                    setScore={setScore}

                /> : <> </> }
            </div>
        </div>
    )
}

export default Quiz;
