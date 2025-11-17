import { test, expect } from '@playwright/test';

test('company page capture', async ({ page }) => {
  // TOPへ
  await page.goto('https://www.impl.co.jp/');

  // Companyへ移動
  await page.locator('#header').getByRole('link', { name: 'Company' }).click();

  // ページのアニメーションや表示を待つ
  await page.waitForTimeout(1200); // 1.2秒待つ（必要に応じて調整）

  // スクリーンショット
  await page.screenshot({
    path: 'screenshots/company.png',
    fullPage: true
  });
});
