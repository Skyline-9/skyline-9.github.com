# AGENTS.md

Welcome! This file provides guidelines, architecture overviews, and instructions for AI coding assistants working on this repository.

---

## 1. Project Overview

This repository is the personal portfolio and research showcase of **Richard Luo** (Senior AI Modeling Engineer & Tech Lead, Agentic AI at T-Mobile).

- **Framework:** [Astro v5](https://astro.build/) (Static Site Generation mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS with Catppuccin Mocha theme
- **Language:** TypeScript
- **Icons:** `@phosphor-icons/react`
- **Deployment:** GitHub Pages (automated via GitHub Actions on `main` branch)

---

## 2. Key Commands

```bash
# Start local dev server (default: http://localhost:4321)
npm run dev

# Run Astro type check and static build
npm run build

# Preview static build locally
npm run preview

# Lint codebase
npm run lint
npm run lint:fix

# Format code with Prettier
npm run format
```

> **Note:** Always run `npm run lint` and `npm run build` after making changes to verify diagnostics and builds pass with 0 errors.

---

## 3. Architecture & Single Source of Truth

To prevent content and SEO drift, the codebase uses a centralized data model:

```
src/
├── data/
│   ├── site.ts          # Core profile metadata, bio, roles, social links, skills
│   ├── experience.ts    # Career history and work timeline items
│   └── projects.ts      # Research papers, publications, and project builds
├── layouts/
│   └── BaseLayout.astro # Head meta, Open Graph, Twitter cards, Schema.org JSON-LD
├── pages/
│   ├── index.astro      # Main single-page application
│   └── llms.txt.ts      # Dynamic Astro endpoint generating /llms.txt at build time
└── components/          # Reusable Astro and React components
```

### Content Update Guidelines:

- **Profile / Bio / Socials:** Edit [`src/data/site.ts`](src/data/site.ts).
- **Work Experience:** Edit [`src/data/experience.ts`](src/data/experience.ts).
- **Publications / Projects:** Edit [`src/data/projects.ts`](src/data/projects.ts).
- **Never hardcode personal links or metadata in UI components.** They are automatically fed into [`BaseLayout.astro`](src/layouts/BaseLayout.astro) and [`src/pages/llms.txt.ts`](src/pages/llms.txt.ts).

---

## 4. SEO, AI Indexing & Metadata Rules

- **Structured Data:** The site generates Schema.org JSON-LD (`Person`, `ProfilePage`, `WebSite`) inside `BaseLayout.astro`.
- **AI Search (GEO):** `src/pages/llms.txt.ts` builds `/llms.txt` automatically for LLM search engines (Perplexity, ChatGPT, Claude).
- **Link Attributes:**
  - Self-referencing identity profiles (LinkedIn, GitHub) must use `rel="noopener noreferrer me"`.
  - **Do not use `nofollow`** on Richard's own profiles or publications.

---

## 5. Styling & Design Conventions

- **Theme:** Catppuccin Mocha color tokens (e.g. `var(--ctp-mocha-peach)`, `var(--ctp-mocha-base)`, `var(--ctp-mocha-surface2)`).
- **Typography:**
  - Headings & Tech HUD: `Chakra Petch` (Google Fonts / `@fontsource/chakra-petch`)
  - Body text: `Nunito Sans` (`@fontsource/nunito-sans`)
- **Motion:** Animations should respect `prefers-reduced-motion`.
