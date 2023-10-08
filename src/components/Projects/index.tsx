// Styling
import './style.css';

// Assets
import hokusai from "../../assets/images/hokusai.webp";
import jointmoment from "../../assets/images/jointmoment.webp";

// Components
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";

const Projects = () => {

    return (<div>
        <h1>📽️ Projects</h1>
        <div id="cards">
            <div className="card">
                <div className="card-content">
                    <div className="card-info">
                        <h3>📄 Joint Moment Retrieval and Highlight Detection Via Natural Language Queries</h3>
                        <h4>2023 arXiv</h4>
                        <h4>In this project, we propose a new method for natural language query based joint video
                            summarization and highlight detection using multi-modal transformers. This approach will use
                            both visual and audio cues to match a user's natural language query to retrieve the most
                            relevant and interesting moments from a video. Our approach employs multiple recent
                            techniques used in Vision Transformers (ViTs) to create a transformer-like encoder-decoder
                            model.
                        </h4>
                        <div id="social-media-container">
                            <a href="https://arxiv.org/abs/2305.04961" target="_blank"
                               rel="noopener noreferrer nofollow">
                                <CodeIcon className="icon"/> arXiv
                            </a>
                            <a href="https://github.com/Skyline-9/Visionary-Vids" target="_blank"
                               rel="noopener noreferrer nofollow">
                                <CodeIcon className="icon"/> GitHub
                            </a>
                        </div>
                    </div>
                    <div className="card-image">
                        <img src={jointmoment} alt={'hokusai screenshot'} width={800} height={400}/>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="card-info">
                        <h3>🏆 HokusAI [Horizons Hackathon 1st Place]</h3>
                        <h4>2021</h4>
                        <h4>HokusAI leverages OpenAI's Contrastive Learning-Image Pretraining (CLIP) and a Vector
                            Quantized Generative Adversial Network (VQGAN) to turn natural language prompts into real
                            art! The frontend was built in React.js and WebXR for Virtual Reality and hosted on
                            Heroku. Because we weren't able to
                            secure any Cloud credits for GPUs, we decided to get creative and turned Google Colab into a
                            backend server. HokusAI uses Firebase authentication and Firestore as a NoSQL database,
                            which is then polled by workers created in Google Colab. Colab queues up incoming requests
                            and then executes them in the Colab GPU instance, which will then reupload to our Firebase
                            upon completion.
                        </h4>
                        <div id="social-media-container">
                            <a href="https://devpost.com/software/hokusai" target="_blank"
                               rel="noopener noreferrer nofollow">
                                <LinkIcon className="icon"/> DevPost
                            </a>
                            <a href="https://github.com/HokusAI-Art/HokusAI-WebApp" target="_blank"
                               rel="noopener noreferrer nofollow">
                                <CodeIcon className="icon"/> GitHub WebApp
                            </a>
                            <a href="https://github.com/HokusAI-Art/HokusAI-Server" target="_blank"
                               rel="noopener noreferrer nofollow">
                                <CodeIcon className="icon"/> GitHub Backend
                            </a>
                        </div>
                    </div>
                    <div className="card-image">
                        <img src={hokusai} alt={'hokusai screenshot'} width={800} height={400}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Projects;
