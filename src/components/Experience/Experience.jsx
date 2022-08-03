import './Experience.css';
import '../../Data.jsx';
import gatech from '../../resources/images/experiences/gatech.png';
import rail from '../../resources/images/experiences/rail.png';
import ukg from '../../resources/images/experiences/ukg.jpeg';

export default function Experience() {
    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={ukg} alt="experience-1" />
                </div>
                <div className="experience-text">
                    <b>Software Engineering Intern</b><br />
                    <b>Ultimate Kronos Group</b><br />
                    <i>May 2022 - August 2022</i><br />
                    <p>
                        Developed new features as part of Workforce TeleStaff New Product Development Team in Agile lifecycle.
                        Created Angular proof-of-concept for TeleStaff, which improves UI/UX, increases responsiveness, and meets WCAG 2.1 Accessability guidelines.
                        Established reverse proxy to make calls with existing backend and support legacy code.
                        Presented proof-of-concept to multiple VPs and directors to discuss future company outlooks and product roadmaps Implemented REST APIs using Java Spring Services to support CRUD operations for MSSQL database.
                    </p>
                </div>
            </div>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={rail} alt="experience-1" />
                </div>
                <div className="experience-text">
                    <b>Research Assistant</b><br />
                    <b>Georgia Tech RAIL</b><br />
                    <i>August 2021 - Present</i><br />
                    <p>
                        Working with Dr. Chernova in Robot Autonomy & Interactive Learning (RAIL) Lab on smart-home
                        active assistance based on deep-learning sensor prediction
                    </p>
                </div>
            </div>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={gatech} alt="experience-2" />
                </div>
                <div className="experience-text">
                    <b>Cybersecurity Analyst</b><br />
                    <b>Georgia Tech Security Operations Center</b><br />
                    <i>June 2021 - August 2021</i><br />
                    <p>
                        Identified and mitigated security incidents with FireEye and Palo Alto Networks Cortex XSOAR,
                        triaged incoming threats, and managed network traffic. Reviewed compromised systems and worked
                        alongside system administrators to appropriately mitigate any active threats
                    </p>
                </div>
            </div>
            <div className="experience-card">
                <div className="experience-image">
                    <img src={gatech} alt="experience-3" />
                </div>
                <div className="experience-text">
                    <b>Undergraduate Researcher</b><br />
                    <b>Georgia Tech Research Institute</b><br />
                    <i>January 2021 - August 2021</i><br />
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
