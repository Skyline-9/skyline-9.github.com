// Components
import Button from "../Button";

// Styling
import './style.css';

// Assets
// import resume from '../../../../Downloads/skyline-9.github.com-main/src/assets/richard_luo_resume.pdf';

import resume from '../../assets/richard_luo_resume.pdf';

const CyberpunkGlitch = () => {

    const waveColor = getComputedStyle(document.documentElement).getPropertyValue('--ctp-mocha-base').trim();
    const transparencyGenerator = (color: String, opacity: number) => {
        return `${color}${Math.round(opacity * 255).toString(16)}`;
    }

    return (
        <div className="hero-container">
            <div className="environment"></div>
            <h2 className="hero glitch layers" data-text="Richard Luo"><span>Richard Luo</span></h2>
            <h1 className="hero-subtitle">Making Dreams Come True Since 2002</h1>
            <Button onClick={() => window.open(resume)} label='Check out my resume' id='resume-button'/>
            <div>
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g className="parallax">
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="0"
                            fill={transparencyGenerator(waveColor, 0.7)}
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="3"
                            fill={transparencyGenerator(waveColor, 0.5)}
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="5"
                            fill={transparencyGenerator(waveColor, 0.3)}
                        />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill={waveColor}/>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default CyberpunkGlitch;
