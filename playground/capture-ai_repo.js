import 'dotenv/config';
import OpenAI from "openai";
import { readFileSync } from "fs";
import { chromium } from 'playwright';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.impl.co.jp/');
  await page.waitForTimeout(1500);

  // キャプチャ
  const screenshotPath = 'screenshots/test.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });

  // Playwright終了
  await browser.close();

  // 画像をbase64として読み込み
  const imageData = readFileSync(screenshotPath, { encoding: 'base64' });

  // AIに画像を投げる
  const result = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "この画像の内容を説明して。" },
          {
            type: "image_url",
            image_url: {
              url: `data:image/png;base64,${imageData}`
            }
          }
        ]
      }
    ]
  });

  console.log("AIの回答：", result.choices[0].message.content);
})();
