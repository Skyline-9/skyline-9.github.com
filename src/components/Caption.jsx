import "./Caption.css";

function Caption(props) {
    return (
        <div className="caption">
            <h2>{props.text}</h2>
        </div>
    );
}

export default Caption;
