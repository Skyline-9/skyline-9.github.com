// Components
import Button from "../Button";

// Styling
import './style.css';

// Assets
import resume from '../../assets/resume_richard_luo.pdf';

const CyberpunkGlitch = () => {
    return (
        <div className="hero-container">
            <div className="environment"></div>
            <h2 className="hero glitch layers" data-text="Richard Luo"><span>Richard Luo</span></h2>
            <h1 className="hero-subtitle">Making Dreams Come True Since 2002</h1>
            <Button onClick={() => window.open(resume)} label='Check out my resume' id='resume-button' />
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#30344C" fillOpacity="1" d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,229.3C840,213,960,139,1080,133.3C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default CyberpunkGlitch;