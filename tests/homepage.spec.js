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

});
