import Particles from "react-particles-js";
import "./CustomParticles.css";

function CustomParticles(props) {
	return (
		<div id={props.id}>
			<h1 id="particle-title">{props.title}</h1>
			<Particles className="particles" params={props.params}></Particles>
		</div>
	);
}

export default CustomParticles;
