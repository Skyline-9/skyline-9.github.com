// Components
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";

// Assets
import hokusai from '../../assets/images/hokusai.webp';
import jointmoment from '../../assets/images/jointmoment.webp';
import sketch2drawings from '../../assets/images/sketch2drawings.webp';
import shotluckholmes from '../../assets/images/shotluckholmes.webp';


export interface Project {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    altText: string;
    links: {
        label: string;
        url: string;
        icon: React.ComponentType<{ className?: string }>;
    }[];
}

export const projects: Project[] = [
        {
            title: "📄 Shotluck Holmes",
            subtitle: "ACM International Conference on Multimedia 2025",
            description: "Video is an increasingly prominent and information-dense medium, yet it poses substantial challenges for language models. A typical video consists of a sequence of shorter segments, or shots, that collectively form a coherent narrative. Each shot is analogous to a word in a sentence where multiple data streams of information (such as visual and auditory data) must be processed simultaneously. Comprehension of the entire video requires not only understanding the visual-audio information of each shot but also requires that the model links the ideas between each shot to generate a larger, all-encompassing story. Despite significant progress in the field, current works often overlook videos' more granular shot-by-shot semantic information. In this project, we propose a family of efficient large language vision models (LLVMs) to boost video summarization and captioning called Shotluck Holmes. By leveraging better pretraining and data collection strategies, we extend the abilities of existing small LLVMs from being able to understand a picture to being able to understand a sequence of frames. Specifically, we show that Shotluck Holmes achieves better performance than state-of-the-art results on the Shot2Story video captioning and summary task with significantly smaller and more computationally efficient models.",
            image: shotluckholmes,
            altText: "Shotluck Holmes project screenshot",
            links: [
                {
                    label: "ACM Multimedia",
                    url: "https://doi.org/10.1145/3689091.3690086",
                    icon: LinkIcon
                },
                {
                    label: "GitHub",
                    url: "https://github.com/Skyline-9/Shotluck-Holmes",
                    icon: CodeIcon
                }
            ]
        },
        {
            title: "📄 Joint Moment Retrieval and Highlight Detection Via Natural Language Queries",
            subtitle: "2023 arXiv",
            description: `In this project, we propose a new method for natural language query based joint video
            summarization and highlight detection using multi-modal transformers. This approach will use
            both visual and audio cues to match a user's natural language query to retrieve the most
            relevant and interesting moments from a video. Our approach employs multiple recent
            techniques used in Vision Transformers (ViTs) to create a transformer-like encoder-decoder
            model.`,
            image: jointmoment,
            altText: "Shotluck Holmes project screenshot",
            links: [
                {
                    label: "arXiv",
                    url: "https://arxiv.org/abs/2305.04961",
                    icon: LinkIcon
                },
                {
                    label: "GitHub",
                    url: "https://github.com/Skyline-9/Visionary-Vids",
                    icon: CodeIcon
                }
            ]
        },
        {
            title: "🏆 HokusAI [Horizons Hackathon 1st Place]",
            subtitle: "2021",
            description: `HokusAI leverages OpenAI's Contrastive Learning-Image Pretraining (CLIP) and a Vector
            Quantized Generative Adversial Network (VQGAN) to turn natural language prompts into real
            art! The frontend was built in React.js and WebXR for Virtual Reality and hosted on
            Heroku. Because we weren't able to
            secure any Cloud credits for GPUs, we decided to get creative and turned Google Colab into a
            backend server. HokusAI uses Firebase authentication and Firestore as a NoSQL database,
            which is then polled by workers created in Google Colab. Colab queues up incoming requests
            and then executes them in the Colab GPU instance, which will then reupload to our Firebase
            upon completion.
        `,
            image: hokusai,
            altText: "Shotluck Holmes project screenshot",
            links: [
                {
                    label: "arXiv",
                    url: "https://devpost.com/software/hokusai",
                    icon: LinkIcon
                },
                {
                    label: "GitHub",
                    url: "https://github.com/HokusAI-Art/HokusAI-WebApp",
                    icon: CodeIcon
                },
                {
                    label: "GitHub",
                    url: "https://github.com/HokusAI-Art/HokusAI-Server",
                    icon: CodeIcon
                }
            ]
        },
        {
            title: "Sketch2Drawings",
            subtitle: "2021",
            description: `Using Conditional Generative Adversial Networks (cGANs), Sketch2drawings performs paired
            image-to-image translation on sketches and drawings. Data was first preprocessed using Canny
            edge detection to generate the sketch-colorization pair. This deep learning mapping allows the
            project to turn a black and white sketch into a colorized drawing.
        `,
            image: sketch2drawings,
            altText: "Shotluck Holmes project screenshot",
            links: [
                {
                    label: "GitHub",
                    url: "https://github.com/Skyline-9/sketch2drawings",
                    icon: CodeIcon
                }
            ]
        }
    ];