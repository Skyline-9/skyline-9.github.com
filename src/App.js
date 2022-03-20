import './App.css';
import Header from './components/Header/Header';
import Wave from './components/Wave/Wave';
import Intro from './components/Intro/Intro';
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Navbar from "@acto/react-navbar";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SchoolIcon from "@material-ui/icons/School";

//Images
import Logo from "./resources/images/logo.png";
import AboutMe from './resources/images/AboutMe.jpeg'

import "@fontsource/nunito";

/* ==== Navigation Bar ==== */
//Navigation bar icon
const navBrand = <img src={Logo} alt="Logo" height="40px"/>;

//Navigation bar links
const leftLinks = (
    <>
        <a href="#header">
            <HomeIcon className="icon"/> Home
        </a>
        <a href="#top-textblock">
            <DesktopWindowsIcon className="icon"/> About Me
        </a>
        <a href="#portfolio">
            <SchoolIcon className="icon"/> Portfolio
        </a>
    </>
);

function App() {
    return (
        <div className="App">
            <Navbar brand={navBrand} leftLinks={leftLinks} shouldAnimate={true} shouldHideOnScroll={false}/>
            <Header id="header"/>
            <Wave/>
            <Intro imageSrc={AboutMe}/>
            <Portfolio/>
            <Footer/>
        </div>
    );
}

export default App;
