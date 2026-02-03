---
title: "Testing"
---

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
