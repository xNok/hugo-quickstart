# Hugo Quickstart

This repository provides a template for creating a Hugo-based static site, optimized for deployment as GitHub Pages. It offers a streamlined setup for developers to quickly launch a new website with minimal configuration. The structure includes a pre-configured `hugo.toml` file and essential directories, allowing you to focus on content creation from the start.

This project is designed for seamless development in cloud-based environments. You can use it with Gitpod or GitHub Codespaces to get a ready-to-use development environment in seconds, without needing to install any dependencies on your local machine.

## Key Features

- **Quick Setup**: Clone the repository and start your Hugo site instantly.
- **GitHub Pages Integration**: Pre-configured for easy deployment.
- **Cloud-Ready**: Works out-of-the-box with Gitpod and GitHub Codespaces.
- **Customizable**: Easily extendable with your own content and themes.

This template is ideal for developers, bloggers, and content creators who want a fast and efficient way to build and deploy static websites using Hugo.

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
npm install
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
