//Components
import Header from "./components/Header";
import HighlightCard from "./components/HighlightCard";
import ReactTypingEffect from "react-typing-effect";

//Resources
import Logo from "./images/logo.png";
import AboutMe from "./images/AboutMe.jpeg";
import Me2 from "./images/me2.jpeg"
import bg from "./images/bg.webp";
import Education from "./images/education.webp";
import GT from "./images/GT.jpg";
import resume from "./resume.pdf";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import LinkIcon from "@material-ui/icons/Link";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";
import CodeIcon from "@material-ui/icons/Code";

//Styling
import "./App.css";
import Caption from "./components/Caption";
import Title from "./components/Title";
import Wave from "./components/Wave";
import TextBlock from "./components/TextBlock";
import Navbar from "@acto/react-navbar";

//Typewriter
const headerTypewriter = (<ReactTypingEffect
    className="typewriter"
    text={["Salutations, I am Richard, an undergraduate student researcher at Georgia Tech College of Computing.", "Welcome to my personal website.", "I hope you find something interesting here!",]}
    speed="90"
    eraseSpeed="20"
    id="header-typewriter"
/>);

/* ==== Navigation Bar ==== */
//Navigation bar icon
const navBrand = <img src={Logo} alt="Logo" height="40px"/>;

//Navigation bar links
const leftLinks = (<>
    <a href="#header">
        <HomeIcon className="icon"/> Home
    </a>
    <a href="#CS">
        <DesktopWindowsIcon className="icon"/> Computer Science
    </a>
    <a href="#Education">
        <SchoolIcon className="icon"/> Education
    </a>
</>);

/* ==== Function App ==== */
function App() {
    return (<div>
        <Navbar id="header" brand={navBrand} leftLinks={leftLinks} shouldAnimate={true} shouldHideOnScroll={false}/>
        <Header/>
        <Title text="Richard Luo"/>
        <Caption text="Making Dreams Come True Since 2002"/>
        <button
            className="scifi-button"
            id="resume-button"
            onClick={() => {
                window.open(resume);
            }}
        >
            Check Out My Resume
        </button>
        <br/>
        <br/>
        <Wave/>
        <TextBlock
            id="top-textblock"
            title="About Me"
            imageSrc={AboutMe}
            alt="Picture Of Me"
            typewriter={headerTypewriter}
            content={<div><p>
                👋 Hi there! I’m Richard, an undergraduate student researcher at Georgia Tech's
                College of Computing with a broad range of interests. Currently, I'm pursuing a B.S. in
                Computer
                Science from Georgia Tech, and at GT, I'm part of The Agency (ML Club), GreyHat
                (Cybersecurity Club), and CSA. If you're interested in working with me, feel free to shoot me
                a
                message!
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
            </div>}/>
        <TextBlock title="Education"
                   imageSrc={GT}
                   alt="Go Jackets!"
                   content={<div>
                       <b>🐝 Georgia Institute of Technology</b>
                       <br/>
                       <p>
                           <i>Computer Science Major | GPA: 4.0</i>
                       </p>
                       <p>
                           <i>Threads: Intelligence/Info & Internetworks</i>
                       </p>
                       <p>
                           <i>August 2020 - Present</i>
                       </p>
                       <br/>
                       <p><b>Relevant Courses: </b>
                           Linear Algebra, Introduction to Discrete Mathematics, Multivaraible Calculus, Intro to OOP,
                           Intro to Data Structures and Algorithms, Combinatorics, Computer Organization and
                           Programming,
                           Objects and Design, Intro to AI</p>
                   </div>}/>

        <TextBlock content={
            <div>
                <h2>🥼 Undergraduate Research</h2>
                <p>
                    <b>
                        <i>Robot Autonomy and Interactive Learning (RAIL) Lab @ GT</i>
                    </b>
                    <br/>
                    <i>August 2021 - Current</i>
                    <br/>
                </p>
                <p className="extra-text">
                    Working with Dr. Chernova in Robot Autonomy & Interactive Learning (RAIL) Lab @ GT on smart home
                    active
                    assistance
                </p>
                <p>
                    <b>
                        <i>Georgia Institute of Technology College of Computing</i>
                    </b>
                    <br/>
                    <i>January 2021 - August 2021</i>
                    <br/>
                </p>
                <p className="extra-text">
                    Researching privacy-preserving biometric under the supervision of Dr. Wenke Lee and Erkam Uzun.
                    Built
                    applications with React.js/Tensorflow.js for remote biometric authentication using deep learning
                    recognition schemes to bridge deep learning inferences with standard privacy-preserving primitives
                    like
                    fuzzy extractors.
                </p>

                <h2>Achievements</h2>
                <p className="extra-text">
                    CSAW CTF Finalist Qualifier
                    <br/> CUCTF 2nd Place <br/>
                    BSidesBosCTF Top 1% Worldwide <br/>
                    Stanford Programming Contest (ProCo) 1st Place <br/>
                    CMU picoCTF - Top 3.5% International <br/>
                    United States of America Computing Olympiad (USACO) - Gold <br/>
                    Harker Programming Invitational 3rd Place
                </p>

            </div>
        }/>
    </div>);
}

export default App;
