// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * This file contains End-to-End (E2E) tests for our Hugo website.
 * We use Playwright to simulate a user interacting with the site.
 *
 * You can run these tests using: npm test
 */

test.describe('Website Sanity Checks', () => {

  // Test 1: Verify the homepage loads and has the correct title
  test('homepage has correct title', async ({ page }) => {
    // 1. Navigate to the homepage ('/' refers to the baseURL set in playwright.config.js)
    await page.goto('/');
    
    // 2. Assert that the page title matches what we expect in hugo.toml
    await expect(page).toHaveTitle(/My New Hugo Site/);
  });

  // Test 2: Verify that the content is visible
  test('homepage shows main content', async ({ page }) => {
    await page.goto('/');
    
    // Check that the body element is visible
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  // Test 3: Verify the "Sanity Check" page exists
  // This demonstrates how to test specific pages and their content.
  test('sanity check page exists and loads', async ({ page }) => {
    // Navigate to the newly created page
    // Note: Hugo generates URLs based on the content filename.
    // content/sanity-check.md becomes /sanity-check/
    await page.goto('/sanity-check/');
    
    // Check that the heading on the page is correct
    // We look for an h1 element with the specific text
    await expect(page.locator('h1')).toContainText('Sanity Check for your next Hugo deployment');
  });


  // Test 4: Verify code block rendering on getting started page
  test('getting started page renders code blocks correctly', async ({ page }) => {
    await page.goto('/getting-started/');

    // Check heading
    await expect(page.locator('h1')).toContainText('Getting Started');

    // Check code blocks exist and are visible
    const highlight = page.locator('.highlight');
    await expect(highlight.first()).toBeVisible();

    const codeBlock = page.locator('.highlight pre code');
    await expect(codeBlock.first()).toContainText('hugo server');

    // Check inline code element exists
    const inlineCode = page.locator('p code');
    await expect(inlineCode.first()).toBeVisible();
    await expect(inlineCode.first()).toHaveText('public');
  });
});
