import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../Styles/Question.css'

const Question = ({ thisQues, setThisQues, ques, setQues, options, correct, score, setScore}) => {

    const [selected, setSelected] = useState();
    const history = useHistory();


    const handleSelect = (opt) =>{
        if(selected === opt && selected === correct) return 'select';
        else if(selected === opt && selected !== correct) return 'wrong';
        else if(opt === correct) return 'select';
    };

    const check = (opt) =>{
        setSelected(opt);
        if(opt===correct)
        setScore(score + 1);
    }

    const handleNext = () =>{
        if(thisQues > 8){
            history.push('/result');
        }
        else if(selected){
            setThisQues(thisQues + 1);
            setSelected();
            
        }
    }
    const handlePrevious = () =>{
            setThisQues(thisQues - 1);
            setSelected();
    }

    return (
        <div className="Question">
            <h1 className="Question-num">{`Question ${thisQues + 1}`}</h1>
            <div>
                <h1 className="Question-ques">{ques[thisQues].question}</h1>
                <div className="Question-opts">
                    {options && options.map((option)=>(
                        <button className={`option ${selected && handleSelect(option)}`} onClick={()=>{check(option)}} key={option} disabled={selected}>{option}</button>
                    ))}
                </div>
            </div>
            <div className="Question-btns">
                    <button onClick={handlePrevious} disabled={thisQues<1} className="btn">{`< Previous`}</button>
                    <button onClick={handleNext} className="btn">{thisQues>8 ?`Submit` : `Next >`}</button>
                </div>
        </div>
    )
}

export default Question
