const { expect, test } = require('@playwright/test');

async function gotoStable(page, path) {
  let lastError;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      await page.goto(path, { waitUntil: 'commit' });
      await page.waitForLoadState('domcontentloaded');
      return;
    } catch (error) {
      lastError = error;
      await page.waitForTimeout(1000);
    }
  }

  throw lastError;
}

test('home page renders the public landing experience', async ({ page }) => {
  await gotoStable(page, '/');
  await expect(page.getByRole('heading', { name: 'Discover reliable apps for communication, gaming, health, fashion, and productivity.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explore Applications' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create Account' })).toBeVisible();
});

test('register page is reachable from public navbar', async ({ page }) => {
  await gotoStable(page, '/');
  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
});
