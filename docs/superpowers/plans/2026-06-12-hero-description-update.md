# Hero Section Self-Description Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the hero section subtitle and profile image alt text to reflect the user's "Tech Lead" and "Senior AI Modeling Engineer" status.

**Architecture:** Surgical text replacements in Astro components.

**Tech Stack:** Astro, HTML/CSS.

---

### Task 1: Update Hero Subtitle

**Files:**
- Modify: `src/components/CyberpunkGlitch.astro`

- [ ] **Step 1: Replace existing subtitle text**

```astro
<<<<
  <p class="hero-subtitle animate-fade-in-up delay-300">Machine Learning Engineer | Agentic AI</p>
====
  <p class="hero-subtitle animate-fade-in-up delay-300">Tech Lead, Agentic AI | Senior AI Modeling Engineer</p>
>>>>
```

- [ ] **Step 2: Verify the change with grep**

Run: `grep "Tech Lead, Agentic AI | Senior AI Modeling Engineer" src/components/CyberpunkGlitch.astro`
Expected: One line matching the new subtitle.

- [ ] **Step 3: Commit**

```bash
git add src/components/CyberpunkGlitch.astro
git commit -m "feat: update hero subtitle to reflect senior tech lead role"
```

---

### Task 2: Update Profile Image Alt Text

**Files:**
- Modify: `src/components/IntroCard.astro`

- [ ] **Step 1: Update the alt attribute of the profile image**

```astro
<<<<
      <Image
        class="w-4/5 md:w-[30%] h-auto object-cover rounded-sm transition-all duration-300 mx-auto md:m-4"
        src={me}
        alt="Richard Luo, Machine Learning Engineer"
        widths={[400, 800, 1200]}
====
      <Image
        class="w-4/5 md:w-[30%] h-auto object-cover rounded-sm transition-all duration-300 mx-auto md:m-4"
        src={me}
        alt="Richard Luo, Senior AI Modeling Engineer"
        widths={[400, 800, 1200]}
>>>>
```

- [ ] **Step 2: Verify the change with grep**

Run: `grep "Richard Luo, Senior AI Modeling Engineer" src/components/IntroCard.astro`
Expected: One line matching the new alt text.

- [ ] **Step 3: Commit**

```bash
git add src/components/IntroCard.astro
git commit -m "feat: update intro card profile alt text to reflect senior title"
```
