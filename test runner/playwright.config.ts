import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    // CI環境ではheadlessモードで実行、ローカルではUIモードで実行
    headless: process.env.CI === 'true' ? true : false,
  },
});