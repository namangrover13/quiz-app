import React, { useState } from 'react'
import '../Styles/Home.css'
import Categories from '../Data/CategoriesData'
import { useHistory } from 'react-router-dom';
const Home = ({name, setName, getQues}) => {
    const [cat, setCat] = useState("");
    const [diff, setDiff] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleCat = (e) =>{
        setCat(e.target.value);
    }
    const handleDiff = (e) =>{
        setDiff(e.target.value);
    }
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit = () =>{
        if(!name || !cat || !diff){
            setError(true);
            return;
        } else{
            setError(false);
            getQues(cat,diff);
            history.push('/quiz');
        }
    }

    return (
        <div className="Home">
            <div className="Home-name">
                <input className="Home-input" placeholder="Enter Full Name" onChange={handleName} />
            </div>
            <div className="Home-cats">
                <select className="Home-select" onChange={handleCat} value={cat}>
                    <option>Select Category</option>
                    {Categories.map((cat)=>(
                        <option key={cat.category} value={cat.value}>{cat.category}</option>
                    ))}
                </select>
            </div>
            <div className="Home-diff">
                <select className="Home-select" onChange={handleDiff} value={diff}>
                    <option>Select Difficulty Level</option>
                    <option value={'easy'}>Easy</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'hard'}>Hard</option>
                </select>
            </div>
            <div>
                <button  className="Home-btn" onClick={handleSubmit}>Start</button>
            </div>
                {error && <h2 className="Home-error">Please fill up all the fields...</h2>}
        </div>
    )
}

export default Home;
