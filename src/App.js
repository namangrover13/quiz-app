import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import axios from 'axios';
import { useState } from 'react';

// https://opentdb.com/api.php?amount=10&type=multiple

function App() {

  const [name, setName] = useState("");
  const [ques, setQues] = useState();
  const [score, setScore] = useState(0);

  const getQues = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQues(data.results);
  };


  return (
    <div className="App" style={{backgroundImage:"url('./backimg.jpg')"}}>

      <div className="App-head">
        <Link to='/'>
          Quiz App
        </Link>
      </div>

      <Switch>
        <Route path='/' exact >
          <Home name={name} setName={setName} getQues={getQues} />
        </Route>
        <Route path='/quiz' exact >
          <Quiz name={name} ques={ques} setQues={setQues} score={score} setScore={setScore} />
        </Route>
        <Route path='/result' exact >
          <Result score={score} name={name} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
