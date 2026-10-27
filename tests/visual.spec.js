import { test, expect } from '@playwright/test';

test('Kiem tra thay doi giao dien', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await expect(page).toHaveScreenshot('giao-dien-chuan.png');
});