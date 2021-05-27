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

//Icons
import HomeIcon from "@material-ui/icons/Home";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import LinkIcon from "@material-ui/icons/Link";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";
import CodeIcon from "@material-ui/icons/Code";

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
		<a href="#null">
			<SchoolIcon className="icon" /> Education
		</a>
		<a href="#null">Other</a>
	</>
);

//Resume
const onResumeClick = () => {
	window.open(resume);
};

//Typewriter
const typewriter = (
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
			<Header caption="Richard Luo's Website" subtitle="Making Dreams Come True Since 2002" />
			<HighlightCard
				typewriter={typewriter}
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
						<b>🥼 Undergraduate Student Researcher</b>
						<br />
						<p>
							<i>Georgia Institute of Technology College of Computing</i>
						</p>
						<p>
							<i>January 2021 - Present</i>
						</p>
						<br />
						<p>
							I'm currently researching privacy-preserving biometrics under the supervision of Dr. Wenke
							Lee and Erkam Uzun and building applications for remote privacy-preserving biometric
							authentication and recognition schemes.
						</p>
					</div>
				}
				alt="Picture of Me"
				imageSrc={AboutMe}
			/>
		</div>
	);
}

export default App;
