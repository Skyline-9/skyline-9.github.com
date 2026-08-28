![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&labelColor=blue)](https://www.linkedin.com/in/richardluorl)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Skyline-9/skyline-9.github.com">
    <img src="src/assets/social_preview.png" alt="Social Preview" width="800">
  </a>

<h3 align="center">Richard Luo — Personal Portfolio & Research</h3>

  <p align="center">
    Personal portfolio and research showcase for Richard Luo (Senior AI Modeling Engineer & Tech Lead, Agentic AI). Built with Astro v5, Tailwind CSS, TypeScript, and Catppuccin Mocha theme.
    <br />
    <br />
    <a href="https://skyline-9.github.io/"><strong>Live Site »</strong></a>
    ·
    <a href="https://skyline-9.github.io/llms.txt"><strong>llms.txt »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- FEATURES -->

## Features

- **Cyberpunk Aesthetic:** Translucent glassmorphism cards, interactive HUD-style SVG frames, and glitch effects.
- **Single Source of Truth:** Centralized data architecture in `src/data/` powering the UI, SEO meta tags, Schema.org structured data, and `llms.txt`.
- **AI-Native (`llms.txt`):** Dynamic Astro endpoint automatically generates `/llms.txt` for AI search engines (Perplexity, ChatGPT, Claude) at build time.
- **Rich Semantic SEO:** Complete Open Graph, Twitter cards, and Schema.org JSON-LD (`Person`, `ProfilePage`, `WebSite`) entity graph.
- **Interactive UI:** Mouse-follow glow effects on cards, Intersection Observer scroll reveals, and sticky scroll-spy navigation.
- **Accessibility:** Catppuccin Mocha high-contrast palette, semantic HTML, and full `prefers-reduced-motion` compliance.

<!-- ARCHITECTURE -->

## Project Structure

```
src/
├── data/
│   ├── site.ts          # Core profile metadata, bio, roles, social links, skills
│   ├── experience.ts    # Work history and timeline items
│   └── projects.ts      # Research papers, publications, and project builds
├── layouts/
│   └── BaseLayout.astro # Head meta, Open Graph, Twitter cards, Schema.org JSON-LD
├── pages/
│   ├── index.astro      # Main single-page portfolio
│   └── llms.txt.ts      # Dynamic endpoint generating static /llms.txt
└── components/          # Modular Astro & React components
```

<!-- SETUP -->

## Setup & Development

**Requirements**

- Node.js (v18+)
- npm

**Commands**

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Run type check and static build
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
npm run lint:fix

# Format code with Prettier
npm run format
```

**Deployment**

The site is configured for static hosting on GitHub Pages. Pushing to the `main` branch automatically triggers GitHub Actions to run diagnostics, build the static output, and deploy.

<!-- TECH STACK -->

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Phosphor Icons](https://phosphoricons.com/) - Icon library with duotone support
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) - Code quality & formatting
