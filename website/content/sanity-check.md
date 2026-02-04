---
title: "Sanity Check for your next Hugo deployment"
---

## What is a Sanity Check?

A sanity check is a basic test to quickly evaluate whether a claim or the result of a calculation can possibly be true. In software development, it serves as a "smoke test" to ensure that the critical functions of your application (or website) are working as expected before you dive into deeper testing or deployment.

For a static website like this one, a sanity check might verify:
1.  The homepage loads successfully.
2.  Key pages (like this one!) are accessible.
3.  The title and essential metadata are correct.
4.  No broken links on the main navigation.

## Automated Testing with Playwright

This repository includes a set of automated End-to-End (E2E) tests using [Playwright](https://playwright.dev/). These tests simulate a real user opening a browser and interacting with your site.

### How to Run the Tests

You can run the tests locally to verify your changes before pushing them.

1.  **Open your terminal.**
2.  **Run the test command:**

    ```bash
    npm test
    ```

    This command (configured in `package.json`) will:
    - Build your Hugo site.
    - Start a local server.
    - Run the Playwright tests against that server.

3.  **Check the results:**
    You will see output in the terminal indicating whether tests passed or failed.

### Continuous Integration (CI)

These tests are also configured to run automatically on GitHub Actions whenever you push code or create a pull request. This ensures that you don't accidentally break your site.

## Example Test

You can find the test definition in `tests/homepage.spec.js`. Open that file to see how we define what "success" looks like for this website. It's a great place to start learning how to write your own tests!
