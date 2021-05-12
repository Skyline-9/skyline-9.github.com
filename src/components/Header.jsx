import "./Header.css";
import "@fontsource/nunito";

/**
 * Parallax header with specified background image and title
 *
 * @param {*} props	The caption of the header
 * @author Richard Luo
 * @returns Parallax header with specified caption
 */
function Header(props) {
	return (
		<div id="header">
			<div className="caption">
				<p id="title">{props.caption}</p>
				<p id="subtitle">{props.subtitle}</p>
			</div>
		</div>
	);
}

export default Header;
