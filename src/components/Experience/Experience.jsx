import './Experience.css'
import '../../Data.jsx'
import gatech from '../../resources/images/experiences/gatech.png'

export default function Experience() {
    return (
        <div className="experience" id='experience'>
            <h1>Experience</h1>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={gatech} alt="experience-1"/>
                </div>
                <div className="experience-text">
                    <b>Research Assistant</b><br/>
                    <b>Georgia Tech RAIL</b><br/>
                    <i>August 2021 - Present</i><br/>
                    <p>
                        Working with Dr. Chernova in Robot Autonomy & Interactive Learning (RAIL) Lab on smart-home
                        active assistance based on deep-learning sensor prediction
                    </p>
                </div>
            </div>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={gatech} alt="experience-2"/>
                </div>
                <div className="experience-text">
                    <b>Cybersecurity Analyst</b><br/>
                    <b>Georgia Tech Security Operations Center</b><br/>
                    <i>June 2021 - August 2021</i><br/>
                    <p>
                        Identified and mitigated security incidents with FireEye and Palo Alto Networks Cortex XSOAR,
                        triaged incoming threats, and managed network traffic. Reviewed compromised systems and worked
                        alongside system administrators to appropriately mitigate any active threats
                    </p>
                </div>
            </div>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={gatech} alt="experience-3"/>
                </div>
                <div className="experience-text">
                    <b>Undergraduate Researcher</b><br/>
                    <b>Georgia Tech Research Institute</b><br/>
                    <i>January 2021 - August 2021</i><br/>
                    <p>
                        Researched privacy-preserving biometric under the supervision of Dr. Wenke Lee. Built
                        applications using React.js/Tensorflow.js with remote biometric authentication using deep
                        learning recognition schemes to bridge deep learning inferences with standard privacy-preserving
                        primitives like fuzzy extractors. Implemented OAuth 2.0 Authorization/Identity Server for Single
                        Sign On (SSO) using Java/SQL backend

                    </p>
                    <p>
                        🛠 Tech Stack: HTML, CSS, Typescript, Node.js, React, Tensorflow.js, MySQL, Apache Tomcat
                    </p>
                </div>
            </div>
        </div>
    );
}
