import "./TextBlock.css"

function TextBlock(props) {
    return (<div className="textblock" id={props.id}>
        {props.typewriter}
        <div className="textblock-container">
            {props.imageSrc ? <img className="textblock-image" src={props.imageSrc} alt={props.alt}/> : null}
            <div className="textblock-content">
                <h2>{props.title}</h2>
                <hr/>
                {props.content}
            </div>
        </div>
    </div>);
}

export default TextBlock;
