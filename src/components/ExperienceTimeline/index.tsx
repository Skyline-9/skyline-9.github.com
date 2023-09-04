// Components
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

// Styling
import './style.css';

// Assets
import AWS from "../../assets/images/aws.jpg";
import UKG from "../../assets/images/ukg.png";
import RAIL from "../../assets/images/rail.png";
import GT from "../../assets/images/gt.jpg";

const ExperienceTimeline = () => {

    const ctpGreen = getComputedStyle(document.documentElement).getPropertyValue('--ctp-mocha-green').trim();
    const ctpText = getComputedStyle(document.documentElement).getPropertyValue('--ctp-mocha-text').trim();
    const ctpPeach = getComputedStyle(document.documentElement).getPropertyValue('--ctp-mocha-peach').trim();

    return (
        <div className="experience-timeline">
            <h1>💼 Work Experience</h1>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color={`${ctpText}`}
                    >
                        May 2023 - August 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot sx={{
                            backgroundColor: `${ctpPeach}`
                        }}/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <h2>Amazon Web Services (AWS)</h2>
                        <h3>Software Engineer Intern</h3>
                        <img width={200} src={AWS} alt={'aws'}/>
                        <p>CloudFront Platforms Team</p>
                        <p>Redesigned CloudFront's worldwide host/server inventory system to be more resilient,
                            performant, and scalable across tens of thousand worldwide locations. Improved critical
                            endpoint speed by 47% using concurrency to eliminate timeout issues and increase service
                            availability and host recovery abilities. Eliminated throttling issues by reducing AWS API
                            calls by 50%. Improved service visibility for operators by creating a dashboard that
                            monitors error rates, CloudWatch alarms, and other key metrics
                        </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color={`${ctpText}`}
                    >
                        May 2022 - August 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot sx={{
                            backgroundColor: `${ctpGreen}`
                        }}/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <h2>Ultimate Kronos Group (UKG)</h2>
                        <h3>Software Engineer Intern</h3>
                        <img width={200} src={UKG} alt={'aws'}/>
                        <p>Workforce TeleStaff New Product Development Team</p>
                        <p>Developed new features as part of Workforce TeleStaff New Product Development Team in Agile
                            lifecycle. Created Angular proof-of-concept for TeleStaff, which improves UI/UX, increases
                            responsiveness, and meets WCAG 2.1 Accessability guidelines. Established reverse proxy to
                            make calls with existing backend and support legacy code. Implemented REST APIs using Java
                            Spring Services to support CRUD operations for MSSQL database.</p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color={`${ctpText}`}
                    >
                        August 2021 - August 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot sx={{
                            backgroundColor: `${ctpPeach}`
                        }}/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <h2>Georgia Tech Robotic Autonomy and Interactive Learning (RAIL) Lab</h2>
                        <h3>Research Assistant</h3>
                        <img width={200} src={RAIL} alt={'rail'}/>
                        <p>Under Dr. Chernova</p>
                        <p>Designed IRB approved study to gather temporal sensor data from a smarthome using human
                            volunteers. Used a variety of temporal ML techniques (e.g. bi-directional LSTM, RNNs) to
                            facilitate smart-home active assistance based on deep-learning
                            sensor prediction.</p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color={`${ctpText}`}
                    >
                        January 2021 - August 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot sx={{
                            backgroundColor: `${ctpGreen}`
                        }}/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <h2>Georgia Tech Research Institute</h2>
                        <h3>Undergraduate Researcher</h3>
                        <img width={200} src={GT} alt={'gtcoc'}/>
                        <p>Under Dr. Wenke Lee</p>
                        <p>Researched privacy-preserving biometric under the supervision of Dr. Wenke Lee. Built
                            applications using React.js/Tensorflow.js with remote biometric authentication using deep
                            learning recognition schemes to bridge deep learning inferences with standard
                            privacy-preserving primitives like fuzzy extractors. Implemented OAuth 2.0
                            Authorization/Identity Server for Single Sign On (SSO) using Java/SQL backend.</p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

export default ExperienceTimeline;
