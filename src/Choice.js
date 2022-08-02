const Choice = ({choice}) => {

    const {image, color, secondColor, left, top, right, bottom, position} = choice;
    return ( 
        <div className="choice-frame" style={{backgroundColor: color, borderBottomColor: secondColor, position: position, left: left, top: top, right: right, bottom: bottom}}>
            <div className="choice">
                <img src={ image } alt="choice" />
            </div>
        </div>
     );
}
 
export default Choice;