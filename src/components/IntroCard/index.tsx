// Components
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

// Styling
import './style.css';

// Assets
import Me from "../../assets/images/me.jpg";

const IntroCard = () => {

    return (
        <div className="intro-card">
            <b></b>
            <div className="intro-card-content">
                <img className="textblock-image" src={Me} alt="Picture Of Me"/>
                <div className="textblock-content">
                    <h2>About Me</h2>
                    <hr/>
                    <div>
                        <p>
                            👋 Hii! I’m Richard, a MS grad student at Georgia Tech with a concentration in Machine
                            Learning. At Georgia Tech, I'm part of The Agency (ML Club), GreyHat (Cybersecurity Club),
                            and Figure Skating Club, but I'm into music, basketball, and photography outside of uni! If
                            you're interested in working with me, feel free to shoot me a message!
                        </p>
                        <p>
                            For fun, check out my <a id='highlight'
                                                         href="https://app.thestorygraph.com/profile/thedarkfox"
                                                         target='_target'>reading list here</a> and my
                            <a id='highlight' href="https://letterboxd.com/TheDarkFox/" target='_target'> movie
                                list here</a>!
                        </p>
                        <div id="social-media-container">
                            <a href="https://www.linkedin.com/in/richardluorl" target="_blank"
                               rel="noopener noreferrer nofollow">
                                <LinkIcon className="icon"/> LinkedIn
                            </a>
                            <a href="mailto:luo.richard@gmail.com" target="_blank" rel="noopener noreferrer nofollow">
                                <EmailIcon className="icon"/> Email
                            </a>
                            <a href="https://github.com/Skyline-9" target="_blank" rel="noopener noreferrer nofollow">
                                <CodeIcon className="icon"/> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroCard;
