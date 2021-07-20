import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'

const Result = ({score, name}) => {

    return (
        <div className="Result">
            <div>
                <h1 className="Result-msg">{`Thanks, ${name}`}</h1>
                <h1 className="Result-score">{`Final Score: ${score}`}</h1>
            </div>
            <Link className="Result-btn" to='/'>Back to Homepage</Link>
        </div>
    )
}

export default Result;
