import "./Intro.css"
import LinkIcon from "@material-ui/icons/Link";
import EmailIcon from "@material-ui/icons/Email";
import CodeIcon from "@material-ui/icons/Code";
import ReactTypingEffect from "react-typing-effect";

function Intro(props) {
    return (
        <div className="textblock" id="top-textblock">
            <ReactTypingEffect
                className="typewriter"
                text={["Salutations, I am Richard, an undergraduate student researcher at Georgia Tech College of Computing.", "Welcome to my personal website.", "I hope you find something interesting here!",]}
                speed="90"
                eraseSpeed="20"
                id="header-typewriter"
            />
            <div className="textblock-container">
                {props.imageSrc ? <img className="textblock-image" src={props.imageSrc} alt="Picture Of Me"/> : null}
                <div className="textblock-content">
                    <h2>About Me</h2>
                    <hr/>
                    <div>
                        <p>
                            👋 Hi there! I’m Richard, an undergraduate student researcher at Georgia Tech's
                            College of Computing with a broad range of interests. Currently, I'm pursuing a B.S. in
                            Computer Science from Georgia Tech, and at GT, I'm part of The Agency (ML Club), GreyHat
                            (Cybersecurity Club), CSA, AASA, and VSA. I'm really big into music (fun fact: I play 3
                            instruments), basketball, and recently also photography. If you're interested in working
                            with me, feel free to shoot me a message!
                        </p>
                        <p>
                            For funsies, check out my <a id='highlight'
                                                         href="https://app.thestorygraph.com/profile/thedarkfox"
                                                         target='_target'>reading list here</a> and my
                            <a id='highlight' href="https://letterboxd.com/TheDarkFox/" target='_target'> movie
                                list here</a>!
                        </p>
                        <p><b>Current: </b>Research Assistant @ GT RAIL and Incoming SWE Intern @ UKG</p>
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

export default Intro;
