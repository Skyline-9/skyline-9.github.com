//Components
import Header from "./components/Header";
import HighlightCard from "./components/HighlightCard";
import CustomParticles from "./components/CustomParticles";
import Navbar from "@acto/react-navbar";
import ReactTypingEffect from "react-typing-effect";

//Resources
import Logo from "./images/logo.png";
import AboutMe from "./images/AboutMe.jpeg";
import resume from "./resume.pdf";
import CSImage from "./images/CSImage.webp";
import bg from "./images/bg.webp";
import Education from "./images/education.webp";
import GT from "./images/GT.jpg";
import Projects from "./images/projects.webp";
import Github from "./images/github.jpg";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import LinkIcon from "@material-ui/icons/Link";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";

//Styling
import "./App.css";

//React hooks
import { useState, useEffect } from "react";

/* ==== Navigation Bar ==== */
//Navigation bar icon
const navBrand = <img src={Logo} alt="Logo" height="40px"></img>;

//Navigation bar links
const leftLinks = (
	<>
		<a href="#header">
			<HomeIcon className="icon" /> Home
		</a>
		<a href="#CS">
			<DesktopWindowsIcon className="icon" /> Computer Science
		</a>
		<a href="#Education">
			<SchoolIcon className="icon" /> Education
		</a>
		<a href="#Projects">
			<BuildIcon className="icon" /> Projects
		</a>
	</>
);

//Resume
const onResumeClick = () => {
	window.open(resume);
};

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
	/>
);

const educationTypewriter = (
	<ReactTypingEffect className="typewriter" text={["Go Jackets!"]} speed="90" eraseSpeed="20" />
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
			<Navbar brand={navBrand} leftLinks={leftLinks} shouldAnimate={true} shouldHideOnScroll={false} />
			<Header
				caption="Richard Luo's Website"
				subtitle="Making Dreams Come True Since 2002"
				backgroundImage={bg}
				id="header"
			/>
			<HighlightCard
				typewriter={headerTypewriter}
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
				imageSrc={AboutMe}
			/>
			<button className="scifi-button" onClick={onResumeClick}>
				Check Out My Resume
			</button>
			<div id="social-media-container">
				<a href="https://www.linkedin.com/in/richardluorl" target="_blank" rel="noopener noreferrer nofollow">
					<LinkIcon className="icon" /> LinkedIn
				</a>
				<a href="mailto:luo.richard@gmail.com" target="_blank" rel="noopener noreferrer nofollow">
					<EmailIcon className="icon" /> Email
				</a>
				<a href="https://github.com/Skyline-9" target="_blank" rel="noopener noreferrer nofollow">
					<CodeIcon className="icon" /> GitHub
				</a>
			</div>
			<br />
			<CustomParticles id="CS" params={params} title="Computer Science" />
			<HighlightCard
				title="Experience"
				content={
					<div id="CS-Card">
						<b>Security Analyst</b>
						<br />
						<p>
							<i>Georgia Institute of Technology</i>
						</p>
						<p>
							<i>June 2021 - Present</i>
						</p>
						<br />
						<p>
							Researching privacy-preserving biometric under the supervision of Dr. Wenke Lee and Erkam
							Uzun. Built applications with React.js/Tensorflow.js for remote biometric authentication
							using deep learning recognition schemes to bridge deep learning inferences with standard
							privacy-preserving primitives like fuzzy extractors.
						</p>
					</div>
				}
				alt="Picture of Me"
				imageSrc={CSImage}
			/>

			<h2>🥼 Undergraduate Research</h2>
			<p>
				<i>Georgia Institute of Technology College of Computing</i>
				<br />
				<i>January 2021 - Present</i>
				<br />
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
				<br /> CUCTF 2nd Place <br />
				BSidesBosCTF Top 1% Worldwide <br />
				Stanford Programming Contest (ProCo) 1st Place <br />
				CMU picoCTF - Top 3.5% International <br />
				United States of America Computing Olympiad (USACO) - Gold <br />
				Harker Programming Invitational 3rd Place
			</p>
			<br />

			<Header caption="Education" backgroundImage={Education} id="Education" />
			<HighlightCard
				title="Education"
				typewriter={educationTypewriter}
				content={
					<div id="CS-Card">
						<b>🐝 Georgia Institute of Technology</b>
						<br />
						<p>
							<i>Computer Science Major | GPA: 4.0</i>
						</p>
						<p>
							<i>August 2020 - Present</i>
						</p>
						<br />
						<b>Relevant Courses</b>
						<p>
							Linear Algebra
							<br />
							Introduction to Discrete Mathematics
							<br />
							Multivaraible Calculus
							<br />
							Intro to OOP
							<br />
							Intro to Data Structures and Algorithms
							<br />
						</p>
					</div>
				}
				alt="Picture of Me"
				imageSrc={GT}
			/>

			<Header caption="Projects" backgroundImage={Projects} id="Projects" />
			<HighlightCard
				title="Projects"
				content={
					<div id="CS-Card">
						<b>
							GoodbAI <a href="https://github.com/Skyline-9/GoodbAI">[Link to GitHub]</a>
						</b>
						<p>
							Using deep learning and OpenAI's GPT-2, GoodbAI aims to clone the natural language of a
							user/person. Thefirst model was trained on Kobe Bryant's tweets, web-scraped using TWINT.
							For dataset based on tweets,GoodbAI is able to recognize handles (@user), emojis, and
							hashtags.
						</p>
					</div>
				}
				alt="Check out my GitHub!"
				imageSrc={Github}
			/>
		</div>
	);
}

export default App;
