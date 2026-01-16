import shotluckholmes from "../assets/images/shotluckholmes.webp";
import jointmoment from "../assets/images/jointmoment.webp";
import hokusai from "../assets/images/hokusai.webp";
import sketch2drawings from "../assets/images/sketch2drawings.webp";
import type { ImageMetadata } from "astro";

export interface ProjectLink {
  label: string;
  url: string;
  icon: "link" | "code";
}

export type ProjectType = "Paper" | "Hackathon" | "Project";

export interface Project {
  title: string;
  type: ProjectType;
  venue?: string;
  year: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image: ImageMetadata;
  altText: string;
  links: ProjectLink[];
  details?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Shotluck Holmes",
    type: "Paper",
    venue: "ACM Multimedia",
    year: "2025",
    summary:
      "Outperformed prior Shot2Story captioning/summarization baselines with a smaller, compute-efficient shot-aware LLVM. ACM Multimedia 2025.",
    highlights: [
      "Shot-level modeling improves narrative coherence across long videos.",
      "Improved pretraining + data collection to extend small LLVMs from images to frame sequences.",
      "Strong Shot2Story results without scaling to massive models.",
    ],
    tech: [
      "Multimodal LLMs",
      "Video Captioning",
      "Video Summarization",
      "Pretraining",
      "Data Curation",
    ],
    image: shotluckholmes,
    altText: "Shotluck Holmes video captioning model architecture diagram",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.1145/3689091.3690086",
        icon: "link",
      },
      {
        label: "Code",
        url: "https://github.com/Skyline-9/Shotluck-Holmes",
        icon: "code",
      },
    ],
    details: [
      "Focuses on shot-by-shot semantics that many video approaches overlook.",
      "Benchmarked on Shot2Story to test linking events across shots into a coherent story.",
    ],
    featured: true,
  },
  {
    title: "Joint Moment Retrieval & Highlight Detection",
    type: "Paper",
    venue: "arXiv",
    year: "2023",
    summary:
      "One multimodal transformer that retrieves the exact moments and detects the best highlights from a natural-language query—search and summarization in one pass. arXiv 2023.",
    highlights: [
      "Joint formulation for query-based moment retrieval + highlight detection.",
      "Uses both visual and audio cues to align relevance and “interestingness” with user intent.",
      "Transformer-style encoder–decoder design inspired by ViT techniques.",
    ],
    tech: ["Multimodal Transformers", "Video Retrieval", "Highlight Detection", "Audio-Visual", "NLP"],
    image: jointmoment,
    altText: "Joint Moment Retrieval transformer architecture diagram",
    links: [
      {
        label: "Paper",
        url: "https://arxiv.org/abs/2305.04961",
        icon: "link",
      },
      {
        label: "Code",
        url: "https://github.com/Skyline-9/Visionary-Vids",
        icon: "code",
      },
    ],
    details: [
      "Targets long-form videos where both precision (timestamps) and highlights matter.",
      "Outputs both retrieved moments and a compact highlight set for quick viewing.",
    ],
  },
  {
    title: "HokusAI",
    type: "Hackathon",
    venue: "Horizons Hackathon (1st Place)",
    year: "2021",
    summary:
      "1st-place hackathon winner: a WebXR text-to-art experience that turns prompts into generated artwork using CLIP + VQGAN. Deployed end-to-end with Firebase and a Colab GPU backend.",
    highlights: [
      "React + WebXR frontend for VR, hosted on Heroku.",
      "Firebase Auth + Firestore for accounts and a request queue.",
      "Colab GPU workers poll requests, run generation, and upload results.",
    ],
    tech: ["React", "WebXR", "Firebase", "CLIP", "VQGAN", "Google Colab", "Heroku"],
    image: hokusai,
    altText: "HokusAI AI-generated artwork example",
    links: [
      {
        label: "Devpost",
        url: "https://devpost.com/software/hokusai",
        icon: "link",
      },
      {
        label: "Web repo",
        url: "https://github.com/HokusAI-Art/HokusAI-WebApp",
        icon: "code",
      },
      {
        label: "Server repo",
        url: "https://github.com/HokusAI-Art/HokusAI-Server",
        icon: "code",
      },
    ],
    details: [
      "Built under hackathon constraints (no cloud GPU credits) with a scrappy but reliable pipeline.",
      "Split into separate web and server repos to move fast and ship.",
    ],
    featured: true,
  },
  {
    title: "Sketch2Drawings",
    type: "Project",
    year: "2021",
    summary:
      "Transforms black-and-white sketches into colorized drawings with paired image-to-image translation using cGANs. Canny-edge preprocessing creates clean training pairs for consistent outputs.",
    highlights: [
      "Paired cGAN translation from sketch edges to colorized drawings.",
      "Canny edge detection to generate aligned sketch/color training pairs.",
      "Plausible, consistent colorization from rough inputs.",
    ],
    tech: ["cGAN", "Image-to-Image", "Canny Edge", "Computer Vision"],
    image: sketch2drawings,
    altText: "Sketch2Drawings before and after colorization comparison",
    links: [
      {
        label: "Code",
        url: "https://github.com/Skyline-9/sketch2drawings",
        icon: "code",
      },
    ],
    details: [
      "Conditional generation preserves structure while hallucinating textures/colors.",
      "Compact pipeline: preprocess → train cGAN → infer colorized outputs.",
    ],
  },
];
