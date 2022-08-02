import Choice from "./Choice";
import triangle from './images/bg-triangle.svg';

const ChoiceList = ({handleSelect, choices}) => {

    return ( 
        <div className="choice-list">
            <img src={triangle} alt="triangle"/>
            {choices.map((choice) => <span key={choice.key} onClick={() => handleSelect(choice)}><Choice choice={choice}/></span>)}
        </div>
     );
}
 
export default ChoiceList;