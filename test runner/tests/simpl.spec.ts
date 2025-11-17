import { test } from '@playwright/test';

test('basic screenshot', async ({ page }) => {
  await page.goto('https://www.impl.co.jp/');
  await page.waitForLoadState('networkidle'); // ページ内のリソース（画像、JS、動画など）が完全に読み込まれるまで待つ

  await page.mouse.wheel(0, 500); // 500pxスクロール
  await page.waitForTimeout(1000); // エフェクトが発火する時間待つ。1000ms=1秒


  await page.screenshot({
    path: 'screenshots/basic2.png',
    fullPage: true,
  });
});