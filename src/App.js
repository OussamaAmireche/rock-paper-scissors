import { useState } from "react";
import ChoiceList from "./ChoiceList";
import Game from "./Game";
import Rules from "./Rules";
import ScoreSheet from "./ScoreSheet";
import rock from './images/icon-rock.svg';
import paper from './images/icon-paper.svg';
import scissors from './images/icon-scissors.svg';


function App() {
  const choices = [
    {key: 1, type: 'paper', image: paper, color: "hsl(230, 89%, 62%)", secondColor: "hsl(229, 65%, 46%)", left: "-60px", top:"-60px", position: "absolute"},
    {key: 2, type: 'scissors', image: scissors, color: "hsl(39, 89%, 49%)", secondColor: "hsl(28, 78%, 44%)", right: "-60px", top:"-60px", position: "absolute"},
    {key: 3, type: 'rock', image: rock, color: "hsl(349, 71%, 52%)", secondColor: "hsl(346, 77%, 35%)", left: "calc(50% - 80px)", bottom:"-20px", position: "absolute"}
  ]

  const [score, setScore] = useState(0);
  const [rulesClicked, setRulesClicked] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selected, setSelected] = useState(null);
  const [cpuSelected, setCpuSelected] = useState(null);

  const handleClose = () => {
    setRulesClicked(false);
  }

  const handleSelect = (choice) => {
    const {image, color, secondColor, type} = choice;
    setSelected({image, color, secondColor, type});
    setGameStarted(true);
    const {image: cpuImage, color: cpuColor, secondColor: cpuSecondColor, type: cpuType} = choices[Math.floor(Math.random() * 3)];
    setCpuSelected({image: cpuImage, color: cpuColor, secondColor: cpuSecondColor, type: cpuType});
    if( (selected.type === 'rock' && cpuSelected.type === 'scissors') ||
    (selected.type === 'scissors' && cpuSelected.type === 'paper') ||
    (selected.type === 'paper' && cpuSelected.type === 'rock') ){
    setScore(score + 1);
    }
  }

  const handleClick = () => {
    setGameStarted(false);
  }
  return (
    <div className="App">
      <div className="container">
        <ScoreSheet score={score}/>
        {!gameStarted && <ChoiceList choices={choices} handleSelect={handleSelect}/>}
        {gameStarted && <Game selected={selected} cpuSelected={cpuSelected} handleClick={handleClick}/>}
        <button onClick={() => setRulesClicked(true)}>RULES</button>
        {rulesClicked && <Rules handleClose={handleClose}/>}
      </div>
    </div>
  );
}

export default App;
