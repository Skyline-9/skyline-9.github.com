import tmobile from "../assets/images/tmobile.svg";
import tiktok from "../assets/images/tiktok.webp";
import aws from "../assets/images/aws.webp";
import type { ImageMetadata } from "astro";

export interface ExperienceItem {
  date: string;
  company: string;
  role: string;
  image: ImageMetadata;
  altText: string;
  team: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    date: "October 2025 - Present",
    company: "T-Mobile",
    role: "Machine Learning Engineer",
    image: tmobile,
    altText: "T-Mobile logo",
    team: "IntentCX – Innovation pod",
    description: "",
  },
  {
    date: "June 2024 - October 2025",
    company: "TikTok",
    role: "Software Engineer",
    image: tiktok,
    altText: "TikTok logo",
    team: "Data Trust and Safety - Video Safety",
    description: "",
  },
  {
    date: "May 2023 - August 2023",
    company: "Amazon Web Services (AWS)",
    role: "Software Engineer Intern",
    image: aws,
    altText: "Amazon Web Services logo",
    team: "CloudFront Platforms Team",
    description:
      "Redesigned CloudFront's worldwide host/server inventory system to be more resilient, performant, and scalable across tens of thousand worldwide locations. Improved critical endpoint speed by 47% using concurrency to eliminate timeout issues and increase service availability and host recovery abilities. Eliminated throttling issues by reducing AWS API calls by 50%. Improved service visibility for operators by creating a dashboard that monitors error rates, CloudWatch alarms, and other key metrics",
  },
];
