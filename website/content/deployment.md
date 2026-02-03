---
title: "Deployment"
---

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
