import "./HighlightCard.css";
import PropTypes from "prop-types";

function HighlightCard(props) {
	return (
		<div className="card">
			{props.typewriter}
			<br />
			<br />
			<div className="card-container">
				<img className="card-image" src={props.imageSrc} alt={props.alt}></img>
				<div className="card-content">
					<h2>{props.title}</h2>
					<hr />
					{props.content}
				</div>
			</div>
		</div>
	);
}

HighlightCard.propTypes = {
	typewriter: PropTypes.element,
	imageSrc: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
};

export default HighlightCard;

//background: `linear-gradient(to top, ${color}, ${Color(color).rotate(24).lighten(0.12)})`,
