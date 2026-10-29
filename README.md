# Hugo Quickstart

This repository provides a template for creating a Hugo-based static site, optimized for deployment as GitHub Pages. It offers a streamlined setup for developers to quickly launch a new website with minimal configuration. The structure includes a pre-configured `hugo.toml` file and essential directories, allowing you to focus on content creation from the start.

This project is designed for seamless development in cloud-based environments and supports automated AI software engineering workflows powered by **Jules**.

## Key Features

- **Quick Setup**: Clone the repository and start your Hugo site instantly.
- **GitHub Pages Integration**: Pre-configured for easy deployment.
- **Jules AI Workflows**: Out-of-the-box Jules AI agent integration with specialized sub-agent patterns (e.g. Palette Agent).
- **Reusable Composite Action**: Shared GitHub Action (`.github/actions/setup-hugo-environment`) for consistent Hugo, Node, and Playwright setup across workflows.
- **Cloud-Ready**: Works out-of-the-box with Gitpod and GitHub Codespaces.
- **Customizable**: Easily extendable with your own content and themes.

## Getting Started

To get started with this template, you can use the following Hugo commands.

### Running the Development Server

To preview your site locally, run the following command. This will start a development server with live reloading, allowing you to see your changes in real-time.

```bash
hugo server
```

### Building the Static Site

When you're ready to deploy your site, you can generate the static files using the following command. The output will be placed in the `public` directory by default.

```bash
hugo
```

## Testing

This template includes Playwright end-to-end tests to verify that the site builds and runs correctly.

### Running Tests

To run the Playwright tests locally, you'll need to install Node.js dependencies first:

```bash
npm ci
```

Then run the tests:

```bash
npm test
```

The tests will automatically start a Hugo development server, run the tests against it, and then shut it down.

### Test Scripts

- `npm test` - Run tests in headless mode (CI mode)
- `npm run test:headed` - Run tests with visible browser
- `npm run test:ui` - Run tests in interactive UI mode

The tests run automatically in GitHub Actions on every pull request and push to main, ensuring the site works correctly before deployment.

## Jules AI Integration & Agent Patterns

This template comes with built-in patterns for integrating your repository with **Jules** and AI coding agents.

### 1. Out-of-the-box Jules Workflow

The workflow at `.github/workflows/jules.yaml` provides automated test and build verification whenever Jules or automated workflows create or update pull requests.

### 2. Reusable Composite Setup Action

Instead of duplicating setup logic across CI and AI workflows, use the composite action:

```yaml
- name: Setup Hugo & Test Environment
  uses: ./.github/actions/setup-hugo-environment
  with:
    hugo-version: '0.155.2'
    install-playwright: 'true'
```

This single step prepares Hugo extended, Node.js, dependencies (`npm ci`), and Playwright browsers with caching.

### 3. Agent Instructions (`AGENTS.md`) & The Palette Agent Pattern

- **`AGENTS.md`**: Positioned at the repository root, `AGENTS.md` instructs Jules on project structure, commands, coding standards, and mandatory pre-commit verification steps.
- **Palette Agent Example (`.github/agents/palette-agent.md`)**: Demonstrates a domain-specific agent pattern focused on CSS styling, theme design tokens, and color palette management. You can use this example to define custom agent personas (e.g. content creation agent, SEO agent, theme palette agent) for your own projects.

## Cloud-Based Development

This repository is optimized for cloud-based development environments like Gitpod and GitHub Codespaces. These platforms provide a pre-configured environment with all the necessary dependencies, allowing you to start coding immediately.

### GitHub Codespaces

To open this project in GitHub Codespaces, click the button below:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=428059888)

### Gitpod

To open this project in Gitpod, click the button below:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jpmorganchase/hugo-quickstart)

## Render Deployment

This project includes a `render.yaml` file to simplify deployment on [Render](https://render.com). This file creates a Blueprint that automatically configures the project as a static site.

To deploy:
1. Create a new [Blueprint Instance](https://dashboard.render.com/blueprints/new) on Render.
2. Connect your repository.
3. Render will automatically detect the `render.yaml` configuration and set up the build command (`hugo --gc --minify`) and publish directory (`website/public`).
