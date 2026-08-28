export interface SiteConfig {
  name: string;
  jobTitle: string;
  company: string;
  team: string;
  headline: string;
  description: string;
  bio: string;
  keywords: string[];
  siteUrl: string;
  social: {
    github: string;
    linkedin: string;
    scholar: string;
    instagram: string;
    email: string;
  };
  education: {
    school: string;
    degree: string;
    concentration: string;
  };
  skills: string[];
}

export const siteConfig: SiteConfig = {
  name: "Richard Luo",
  jobTitle: "Senior AI Modeling Engineer",
  company: "T-Mobile",
  team: "IntentCX – Innovation Pod",
  headline: "Tech Lead, Agentic AI | Senior AI Modeling Engineer",
  description:
    "Senior AI Modeling Engineer & Tech Lead at T-Mobile building agentic AI systems. Georgia Tech MS, Machine Learning.",
  bio: "Senior AI Modeling Engineer at T-Mobile serving as Tech Lead for the Innovation Pod under the IntentCX program, translating research into production ML systems and collaborating with OpenAI engineers to build large-scale agentic AI. MS in Computer Science (Machine Learning) from Georgia Tech.",
  keywords: [
    "Richard Luo",
    "Senior AI Modeling Engineer",
    "Tech Lead",
    "Agentic AI",
    "Machine Learning",
    "T-Mobile",
    "Georgia Tech",
    "Deep Learning",
    "Computer Vision",
    "Multimodal LLMs",
  ],
  siteUrl: "https://skyline-9.github.io",
  social: {
    github: "https://github.com/Skyline-9",
    linkedin: "https://www.linkedin.com/in/richardluorl",
    scholar: "https://scholar.google.com/citations?user=Z-u5rZQAAAAJ&hl=en",
    instagram: "https://www.instagram.com/shotsbyrichardluo/",
    email: "luo.richard@gmail.com",
  },
  education: {
    school: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science",
    concentration: "Machine Learning",
  },
  skills: [
    "Agentic AI",
    "Large Language Models",
    "Multimodal Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Software Engineering",
  ],
};
