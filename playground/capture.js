const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.impl.co.jp/');
  await page.waitForTimeout(1500); // 動的アニメーション待ち

  await page.screenshot({
    path: 'screenshots/test.png',
    fullPage: true
  });

  await browser.close();
})();