// Styling
import './style.css';

const ExperienceTimeline = () => {
    return (
        <section id="timeline">

            <div className="tl-item">
                <div className="tl-bg" style={{backgroundImage: 'url(https://placeimg.com/801/801/nature)'}}></div>
                <div className="tl-year">
                    <p>Ultimate Kronos Group</p>
                </div>
                <div className="tl-content">
                    <h1>Software Engineering Intern</h1>
                    <p>Developed new features as part of Workforce TeleStaff New Product Development Team in Agile
                        lifecycle. Created Angular proof-of-concept for TeleStaff, which improves UI/UX, increases
                        responsiveness, and meets WCAG 2.1 Accessability guidelines. Established reverse proxy to make
                        calls with existing backend and support legacy code. Implemented REST APIs using Java Spring
                        Services to support CRUD operations for MSSQL database.</p>
                </div>

            </div>

            <div className="tl-item">

                <div className="tl-bg" style={{backgroundImage: "url(https://placeimg.com/802/802/nature)"}}></div>

                <div className="tl-year">
                    <p className="f2">Georgia Tech RAIL Lab</p>
                </div>

                <div className="tl-content">
                    <h1 className="f3 text--accent ttu">Research Assistant</h1>
                    <p>Worked with Dr. Chernova in Georgia Tech's Robot Autonomy & Interactive Learning (RAIL) Lab on
                        smart-home active assistance based on deep-learning sensor prediction.</p>
                </div>

            </div>

            <div className="tl-item">
                <div className="tl-bg" style={{backgroundImage: "url(https://placeimg.com/803/803/nature)"}}></div>
                <div className="tl-year">
                    <p className="f2">Georgia Tech Security Operations Center</p>
                </div>

                <div className="tl-content">
                    <h1 className="f3 text--accent ttu">Cybersecurity Analyst</h1>
                    <p>Identified and mitigated security incidents with FireEye and Palo Alto Networks Cortex XSOAR,
                        triaged incoming threats, and managed network traffic. Reviewed compromised systems and worked
                        alongside system administrators to appropriately mitigate any active threats.</p>
                </div>

            </div>

            <div className="tl-item">
                <div className="tl-bg" style={{backgroundImage: "url(https://placeimg.com/800/800/nature)"}}></div>
                <div className="tl-year">
                    <p className="f2">Georgia Tech Research Institute</p>
                </div>

                <div className="tl-content">
                    <h1 className="f3 text--accent ttu">Undergraduate Researcher</h1>
                    <p>Researched privacy-preserving biometric under the supervision of Dr. Wenke Lee. Built
                        applications using React.js/Tensorflow.js with remote biometric authentication using deep
                        learning recognition schemes to bridge deep learning inferences with standard privacy-preserving
                        primitives like fuzzy extractors. Implemented OAuth 2.0 Authorization/Identity Server for Single
                        Sign On (SSO) using Java/SQL backend</p>

                    <p>🛠 Tech Stack: HTML, CSS, Typescript, Node.js, React, Tensorflow.js, MySQL, Apache Tomcat</p>
                </div>

            </div>
        </section>

    );
}

export default ExperienceTimeline;