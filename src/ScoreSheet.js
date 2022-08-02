import logo from './images/logo.svg';

const ScoreSheet = ({score}) => {
    return ( 
        <div className="score-sheet">
            <div className="logo">
                <img src={ logo } alt="logo" />
            </div>
            <div className="score">
                <p>SCORE</p>
                <h2>{ score }</h2>
            </div>
        </div>
     );
}
 
export default ScoreSheet;