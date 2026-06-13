# Design Spec: Hero Section Self-Description Update
Date: 2026-06-12

## 1. Goal
Update the hero section's self-description (subtitle) to better reflect the user's actual role and seniority, optimizing for recruiters at top-tier labs, startups, and big tech.

## 2. Changes

### 2.1 Hero Subtitle
- **File:** `src/components/CyberpunkGlitch.astro`
- **Component:** `CyberpunkGlitch`
- **Change:** Replace the existing subtitle "Machine Learning Engineer | Agentic AI" with the new hybrid branding.
- **New Value:** `Tech Lead, Agentic AI | Senior AI Modeling Engineer`

### 2.2 Profile Image Alt Text
- **File:** `src/components/IntroCard.astro`
- **Component:** `IntroCard`
- **Change:** Update the `alt` attribute of the profile image (`me.webp`) to align with the senior title.
- **New Value:** `Richard Luo, Senior AI Modeling Engineer`

## 3. Success Criteria
- The hero section accurately displays "Tech Lead, Agentic AI | Senior AI Modeling Engineer".
- The `IntroCard` profile image has the updated `alt` text.
- No visual regressions in the cyberpunk glitch effect or overall layout.
