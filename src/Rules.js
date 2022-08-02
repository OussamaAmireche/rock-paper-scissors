import close from './images/icon-close.svg';
import rules from './images/image-rules.svg';

const Rules = ({handleClose}) => {
    return ( 
        <div className="rules-overlay">
            <div className="rules">
                <div className="row">
                    <h2>RULES</h2>
                    <img src={ close } alt="Close button" onClick={handleClose}/>
                </div>
                <img src={ rules } alt="Rules" />
            </div>
        </div>
     );
}
 
export default Rules;