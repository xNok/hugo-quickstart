# AGENTS.md

Instructions and guidelines for Jules and AI agents working on this Hugo Quickstart repository.

---

## 1. Overview & Purpose

This repository provides a template for creating a Hugo-based static site with automated testing and deployment workflows. As an AI agent working in this repository, you should adhere to the rules, coding conventions, and verification steps outlined in this document.

---

## 2. Project Architecture & Key Directories

- **`website/`**: Contains the Hugo site source code, configuration (`hugo.toml`), content (`content/`), and custom theme (`themes/custom-theme/`).
  - **`website/themes/custom-theme/assets/css/style.css`**: CSS stylesheet for site-wide styling and color design tokens.
  - **`website/themes/custom-theme/layouts/`**: Hugo layout templates (`baseof.html`, partials, list/single layouts).
- **`tests/`**: Playwright end-to-end test suite (`homepage.spec.js`).
- **`.github/actions/setup-hugo-environment/`**: Composite GitHub Action encapsulating Hugo, Node.js, and Playwright setup.
- **`.github/workflows/`**: Workflows for site deployment (`website.yaml`) and Jules AI verification (`jules.yaml`).
- **`.github/agents/`**: Reusable agent persona definitions (e.g., `palette-agent.md`).

---

## 3. Environment & Commands

Before making modifications or running tests, ensure the environment dependencies are installed:

```bash
# Install Node.js dependencies
npm ci

# Install Playwright browser dependencies
npx playwright install chromium
```

### Essential Commands

- **Run Playwright Tests**: `npm test`
- **Build Static Site**: `cd website && npx hugo --gc --minify`
- **Run Local Server**: `cd website && npx hugo server`

---

## 4. Agent Rules & Pre-Commit Verification

Whenever you make changes to this repository:

1. **Verify Code Changes**: Always run `npm test` to ensure Playwright end-to-end tests pass.
2. **Verify Hugo Build**: Run `cd website && npx hugo --gc --minify` to confirm the static site builds without compilation errors or broken template pipes.
3. **Edit Source, Not Artifacts**: Never edit files in `website/public/` or temporary build output. Modify source files in `website/` or `tests/`.
4. **Theme Conventions**:
   - Process CSS using Hugo Pipes (`resources.Get` with `minify` and `fingerprint`).
   - Partial templates in layouts should respect context caching conventions (use `partialCached` for site-wide static elements like `header.html` and `footer.html`).

---

## 5. Specialized Agent Pattern Example: Palette Agent

This repository demonstrates the **Specialized Agent Pattern**, allowing developers to define dedicated agent personas tailored for specific tasks.

### The Palette Agent Example

The **Palette Agent** is a specialized agent persona responsible for visual styling, theme design tokens, typography, and color palette management.

- **Definition File**: `.github/agents/palette-agent.md`
- **Scope**: Modifying `website/themes/custom-theme/assets/css/style.css` and visual elements in `website/hugo.toml`.
- **Primary Objective**: Safely update colors, theme palettes, dark mode styling, and layout aesthetics while verifying accessibility and ensuring Playwright tests pass.

### How to Use Agent Patterns with Jules

1. Define specialized agent instructions under `.github/agents/<agent-name>.md`.
2. When triggering Jules or initiating a subtask (e.g., updating site colors or theme styles), reference the appropriate agent profile.
3. Jules will follow the domain-specific guidelines defined in the corresponding agent spec file.
