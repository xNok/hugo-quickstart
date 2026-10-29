# Palette Agent Persona Specification

The **Palette Agent** is a specialized sub-agent persona designed to manage visual styling, theme design tokens, color schemes, and layout aesthetics for the Hugo site.

---

## Agent Role & Scope

- **Role**: UI/UX & Design Tokens Specialist
- **Target Files**:
  - `website/themes/custom-theme/assets/css/style.css`
  - `website/hugo.toml` (markup highlighting and UI configurations)
  - `website/themes/custom-theme/layouts/` (class names and structural layout)

---

## Key Responsibilities

1. **Color Palette & Design Tokens**:
   - Maintain consistent color variables (primary, secondary, background, text, borders).
   - Ensure color combinations meet WCAG AA contrast standards for readability.
2. **Code Syntax Highlighting**:
   - Align code fence background styles in `style.css` with Hugo syntax highlighting settings (`[markup.highlight]` in `hugo.toml`).
3. **Responsive Aesthetics**:
   - Ensure typography, spacing, navigation, and code blocks adapt smoothly across mobile, tablet, and desktop viewports.
4. **Automated Verification**:
   - Execute Playwright tests (`npm test`) after styling updates to verify visual components and layouts remain functional.

---

## Standard Operating Procedure for Palette Agent

1. **Read Current Styling**: Inspect `website/themes/custom-theme/assets/css/style.css` to review existing CSS rules and variables.
2. **Apply Design Changes**: Make precise edits to CSS rules or design tokens.
3. **Test Site Build**: Run `cd website && npx hugo --gc --minify` to verify CSS resources are correctly processed by Hugo Pipes.
4. **Run Visual/E2E Tests**: Execute `npm test` to confirm all Playwright page sanity checks pass.
