// Components
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

// Styling
import './style.css';

// Assets
import Me from '../../assets/images/me.webp';

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
                            👋 Hii! I’m Richard, a Software Engineer at TikTok, where I work on protecting users from
                            dangerous videos using a combination of ML and human moderation. I hold a MS in Computer
                            Science from Georgia Tech with a concentration in Machine
                            Learning. Outside of work, I'm really into music, basketball, and figure skating! If
                            you're interested in working with me, feel free to shoot me a message!
                        </p>
                        <p>
                            For fun, check out my <a id='highlight'
                                                     href="https://www.instagram.com/shotsbyrichardluo/"
                                                     target='_target'>photography insta here</a>!
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
                            <a href="https://scholar.google.com/citations?user=Z-u5rZQAAAAJ&hl=en" target="_blank"
                               rel="noopener noreferrer nofollow">
                                <CodeIcon className="icon"/> Google Scholar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroCard;
