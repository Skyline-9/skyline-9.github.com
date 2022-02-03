//Components
import Header from "./components/Header";
import HighlightCard from "./components/HighlightCard";
import CustomParticles from "./components/CustomParticles";
import Navbar from "@acto/react-navbar";
import ReactTypingEffect from "react-typing-effect";

//Resources
import Logo from "./images/logo.png";
import AboutMe from "./images/AboutMe.jpeg";
import Me2 from "./images/me2.jpeg"
import bg from "./images/bg.webp";
import Education from "./images/education.webp";
import GT from "./images/GT.jpg";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SchoolIcon from "@material-ui/icons/School";

//Styling
import "./App.css";

//React hooks
import {useState, useEffect} from "react";

/* ==== Navigation Bar ==== */
//Navigation bar icon
const navBrand = <img src={Logo} alt="Logo" height="40px"/>;

//Navigation bar links
const leftLinks = (
    <>
        <a href="#header">
            <HomeIcon className="icon"/> Home
        </a>
        <a href="#CS">
            <DesktopWindowsIcon className="icon"/> Computer Science
        </a>
        <a href="#Education">
            <SchoolIcon className="icon"/> Education
        </a>
    </>
);

//Typewriter
const headerTypewriter = (
    <ReactTypingEffect
        className="typewriter"
        text={[
            "Salutations, I am Richard, an undergraduate student researcher at Georgia Tech College of Computing.",
            "Welcome to my personal website.",
            "I hope you find something interesting here!",
        ]}
        speed="90"
        eraseSpeed="20"
        id="header-typewriter"
    />
);

const educationTypewriter = (
    <ReactTypingEffect className="typewriter" text={["Go Jackets!"]} speed="90" eraseSpeed="20"/>
);

/* ==== useWindowSize hook for finding viewport dimensions */
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

/* ==== Function App ==== */
function App() {
    const viewportSize = useWindowSize();

    const params = {
        particles: {
            number: {
                value: viewportSize.width / 20,
            },
            size: {
                value: 3,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
    };

    return (
        <div>
            <Navbar brand={navBrand} leftLinks={leftLinks} shouldAnimate={true} shouldHideOnScroll={false}/>
            <Header
                caption="Hello, I'm Richard Luo"
                subtitle="Making Dreams Come True Since 2002"
                backgroundImage={bg}
                id="header"
                params={params}
            />

            <br />
            {headerTypewriter}

            <HighlightCard
                title="About Me"
                content={
                    <p>
                        👋 Hi there! I’m Richard, an undergraduate student researcher at Georgia Tech's College of
                        Computing with a broad range of interests. Currently, I'm pursuing a B.S. in Computer Science
                        from Georgia Tech, and at GT, I'm part of The Agency (ML Club), GreyHat (Cybersecurity Club),
                        and CSA. If you're interested in working with me, feel free to shoot me a message!
                    </p>
                }
                alt="Picture of Me"
                imageSrc={Me2}
            />

            <br/>
            {/*<CustomParticles id="CS" params={params} title="Computer Science"/>*/}
            {/*<HighlightCard*/}
            {/*    title="Experience"*/}
            {/*    content={*/}
            {/*        <div id="CS-Card">*/}
            {/*            <b>Cybersecurity Analyst</b>*/}
            {/*            <br/>*/}
            {/*            <p>*/}
            {/*                <i>Georgia Institute of Technology</i>*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <i>June 2021 - August 2021</i>*/}
            {/*            </p>*/}
            {/*            <br/>*/}
            {/*            <p>*/}
            {/*                Identified and mitigated security incidents with FireEye and Palo Alto Networks Cortex*/}
            {/*                XSOAR, triaged incoming threats, and managed network traffic. Reviewed compromised systems*/}
            {/*                and worked alongside system administrators to appropriately mitigate any active threats*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    }*/}
            {/*    alt="Picture of Me"*/}
            {/*    imageSrc={CSImage}*/}
            {/*/>*/}

            {/*https://codyhouse.co/gem/vertical-timeline/*/}

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
                Working with Dr. Chernova in Robot Autonomy & Interactive Learning (RAIL) Lab @ GT on smart home active
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
                Researching privacy-preserving biometric under the supervision of Dr. Wenke Lee and Erkam Uzun. Built
                applications with React.js/Tensorflow.js for remote biometric authentication using deep learning
                recognition schemes to bridge deep learning inferences with standard privacy-preserving primitives like
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

            <br/>
            <button
                className="scifi-button"
                onClick={() => {
                    window.location.href = "https://github.com/Skyline-9";
                }}
            >
                Check Out My Projects
            </button>

            <br/>

            {/*<Header caption="Education" backgroundImage={Education} id="Education"/>*/}
            <HighlightCard
                title="Education"
                typewriter={educationTypewriter}
                content={
                    <div id="CS-Card">
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
                        <b>Relevant Courses</b>
                        <p>
                            Linear Algebra
                            <br/>
                            Introduction to Discrete Mathematics
                            <br/>
                            Multivaraible Calculus
                            <br/>
                            Intro to OOP
                            <br/>
                            Intro to Data Structures and Algorithms
                            <br/>
                            Combinatorics
                            <br/>
                            Computer Organization and Programming
                            <br/>
                            Objects and Design
                            <br/>
                            Intro to AI
                            <br/>
                        </p>
                    </div>
                }
                alt="Picture of Me"
                imageSrc={GT}
            />
        </div>
    );
}

export default App;
