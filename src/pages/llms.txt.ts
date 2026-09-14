import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";

export const GET: APIRoute = async () => {
  const publications = projects.filter((p) => p.type === "Paper");
  const builds = projects.filter((p) => p.type !== "Paper");

  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.headline}`,
    "",
    `## Summary`,
    siteConfig.bio,
    "",
    `## Education`,
    `- **${siteConfig.education.degree}** (${siteConfig.education.concentration}) — ${siteConfig.education.school}`,
    "",
    `## Experience`,
  ];

  experiences.forEach((exp) => {
    lines.push(`### ${exp.role} — ${exp.company} (${exp.team})`);
    lines.push(`*${exp.date}*`);
    if (exp.description) {
      lines.push(exp.description);
    }
    if (exp.highlights && exp.highlights.length > 0) {
      exp.highlights.forEach((bullet) => {
        lines.push(`- ${bullet}`);
      });
    }
    lines.push("");
  });

  lines.push("## Publications & Research");
  publications.forEach((pub) => {
    const venueText = pub.venue ? ` (${pub.venue}, ${pub.year})` : ` (${pub.year})`;
    const primaryLink = pub.links.find((l) => l.label.toLowerCase() === "paper") ?? pub.links[0];
    const codeLink = pub.links.find((l) => l.label.toLowerCase() === "code");

    let line = `- [${pub.title}${venueText}](${primaryLink.url}): ${pub.summary}`;
    if (codeLink) {
      line += ` [Code](${codeLink.url})`;
    }
    lines.push(line);
  });
  lines.push("");

  lines.push("## Selected Projects & Builds");
  builds.forEach((proj) => {
    const primaryLink = proj.links[0];
    const otherLinks = proj.links
      .slice(1)
      .map((l) => `[${l.label}](${l.url})`)
      .join(", ");
    let line = `- [${proj.title}](${primaryLink.url}): ${proj.summary}`;
    if (otherLinks) {
      line += ` (${otherLinks})`;
    }
    lines.push(line);
  });
  lines.push("");

  lines.push("## Core Skills & Domains");
  lines.push(siteConfig.skills.map((s) => `- ${s}`).join("\n"));
  lines.push("");

  lines.push("## Links & Contact");
  lines.push(`- Website: ${siteConfig.siteUrl}`);
  lines.push(`- GitHub: ${siteConfig.social.github}`);
  lines.push(`- LinkedIn: ${siteConfig.social.linkedin}`);
  lines.push(`- Google Scholar: ${siteConfig.social.scholar}`);
  lines.push(`- Instagram: ${siteConfig.social.instagram}`);
  lines.push(`- Email: ${siteConfig.social.email}`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
