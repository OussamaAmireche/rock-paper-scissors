import Choice from "./Choice";

const Game = ({selected, cpuSelected, handleClick}) => {
    let result = '';
    if( (selected.type === 'rock' && cpuSelected.type === 'scissors') ||
        (selected.type === 'scissors' && cpuSelected.type === 'paper') ||
        (selected.type === 'paper' && cpuSelected.type === 'rock') ){
        result = 'YOU WIN';
    }
    else if((selected.type === 'rock' && cpuSelected.type === 'paper') ||
            (selected.type === 'scissors' && cpuSelected.type === 'rock') ||
            (selected.type === 'paper' && cpuSelected.type === 'scissors') ){
            result = 'YOU LOSE';
    }
    else{
        result = 'DRAW';
    }
    return ( 
        <div className="game">
            <div className="row">
                <div className="your-choice">
                    <h5>YOU PICKED</h5>
                    <Choice choice={selected}/>
                </div>
                <div className="cpu-choice">
                    <h5>THE HOUSE PICKED</h5>
                    <Choice choice={cpuSelected}/>
                </div>
            </div>
            <p>{ result }</p>
            <button onClick={handleClick}>PLAY AGAIN</button>
        </div>
     );
}
 
export default Game;