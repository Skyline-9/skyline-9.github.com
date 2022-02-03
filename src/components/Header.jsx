import "./Header.css";
import PropTypes from "prop-types";
import ReactTypingEffect from "react-typing-effect";
import resume from "../resume.pdf";
import LinkIcon from "@material-ui/icons/Link";
import EmailIcon from "@material-ui/icons/Email";
import CodeIcon from "@material-ui/icons/Code";
import Particles from "react-particles-js";

/**
 * Parallax header with specified background image and title
 *
 * @param {*} props    The caption of the header
 * @author Richard Luo
 * @returns Parallax header with specified caption
 */
function Header(props) {
    return (
        <div id={props.id} className="header" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <div className="profile-container">
                <div className="profile-details">
                    <div className="caption">
                        <p id="title">Hello, I'm <span className="caption-name">Richard Luo</span></p>
                        <p id="subtitle">{props.subtitle}</p>
                    </div>
                    <div id="social-media-container">
                        <a href="https://www.linkedin.com/in/richardluorl" target="_blank" rel="noopener noreferrer nofollow">
                            <LinkIcon className="icon"/> LinkedIn
                        </a>
                        <a href="mailto:luo.richard@gmail.com" target="_blank" rel="noopener noreferrer nofollow">
                            <EmailIcon className="icon"/> Email
                        </a>
                        <a href="https://github.com/Skyline-9" target="_blank" rel="noopener noreferrer nofollow">
                            <CodeIcon className="icon"/> GitHub
                        </a>
                    </div>
                    <div className="caption-buttons">
                        <button
                            className="scifi-button"
                            onClick={() => {
                                window.open(resume);
                            }}
                        >
                            Check Out My Resume!
                        </button>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"/>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fefefe" fillOpacity="1"
                      d="M0,320L60,304C120,288,240,256,360,256C480,256,600,288,720,272C840,256,960,192,1080,181.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/>
            </svg>
        </div>
    );
}

Header.propTypes = {
    caption: PropTypes.string,
    subtitle: PropTypes.string,
    typewriter: PropTypes.element,
};

export default Header;
