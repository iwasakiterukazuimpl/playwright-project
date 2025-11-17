# playwright-project

Playwrightを使用したブラウザ自動化テストプロジェクト。自動スクリーンショット撮影、ウェブサイトのインタラクションテスト、およびOpenAI APIを使用したAI駆動のイメージ分析機能を備えています。

## 📋 プロジェクト概要

このプロジェクトは2つの主要なコンポーネントで構成されています：

- **Test Runner**: Playwright公式テストフレームワークを使用した自動テストスイート
- **Playground**: 実験的なスクリプトとユーティリティ

## 🗂️ プロジェクト構成

```
playwright-project/
├── test runner/              # テストスイート
│   ├── tests/
│   │   ├── simpl.spec.ts     # 基本的なスクリーンショットテスト
│   │   └── hover.spec.ts     # ナビゲーション・ホバーテスト
│   ├── screenshots/          # 生成されたスクリーンショット出力
│   ├── test-results/         # テスト実行結果
│   ├── playwright.config.ts  # Playwright設定
│   └── package.json
│
├── playground/               # 実験的スクリプト
│   ├── capture.js            # 基本的なブラウザ自動化
│   ├── capture-ai_repo.js    # AI統合版（OpenAI API使用）
│   ├── screenshots/          # スクリーンショット出力
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🚀 主な機能

### Test Runner
- **Playwrightテストフレームワーク**: 複数のテストケースを構造化された形式で管理
- **スクリーンショット撮影**: ウェブページのフルページスクリーンショット自動保存
- **インタラクション検証**: クリック、ホバー、スクロール等のユーザー操作シミュレーション
- **ウェイト機能**: ネットワークアイドル検出やアニメーション完了待機

### Playground
- **基本的なブラウザ自動化**: Chromiumブラウザの直接制御
- **AI画像分析**: OpenAI GPT-4oを使用したウェブページ内容の自動解析
- **環境変数管理**: dotenv による API キーの安全な管理

## 💻 使用技術

| 技術 | バージョン | 用途 |
|------|-----------|------|
| **Playwright** | ^1.56.1 | ブラウザ自動化フレームワーク |
| **OpenAI API** | ^6.9.0 | AI画像分析・自然言語処理 |
| **Node.js** | - | ランタイム環境 |
| **dotenv** | ^17.2.3 | 環境変数管理 |

## 📦 インストール

### Test Runner の セットアップ

```bash
cd "test runner"
npm install
```

### Playground のセットアップ

```bash
cd playground
npm install
```

Playground で AI 機能を使用する場合は、`.env` ファイルを作成して OpenAI API キーを設定してください：

```
OPENAI_API_KEY=your_api_key_here
```

## 🧪 テストの実行

### すべてのテストを実行

```bash
cd "test runner"
npx playwright test
```

### 特定のテストを実行

```bash
npx playwright test hover.spec.ts
```

### デバッグモードで実行

```bash
npx playwright test --debug
```

### UI モードで実行

```bash
npx playwright test --ui
```

## 🎯 Playground スクリプト

### 基本的なスクリーンショット撮影

```bash
cd playground
node capture.js
```

出力: `screenshots/test.png`

### AI統合版（画像分析付き）

```bash
cd playground
node capture-ai_repo.js
```

- ウェブページのスクリーンショットを撮影
- 撮影した画像をOpenAI APIに送信
- GPT-4o-miniモデルによる日本語での内容説明を表示

## 📝 テストケース詳細

### simpl.spec.ts
- **対象**: https://www.impl.co.jp/
- **操作**: ページナビゲーション → スクロール → スクリーンショット撮影
- **出力**: `screenshots/basic2.png`

### hover.spec.ts
- **対象**: impl.co.jp のCompanyページ
- **操作**: ヘッダーの「Company」リンククリック → ホバー操作 → スクリーンショット撮影
- **出力**: `screenshots/company.png`

## 🔐 セキュリティ

- API キーや認証情報は `.env` ファイルに保管し、`.gitignore` に登録
- 本番環境では環境変数を安全に管理してください

## 📚 参考資料

- [Playwright 公式ドキュメント](https://playwright.dev/)
- [OpenAI API リファレンス](https://platform.openai.com/docs/api-reference)

## 📄 ライセンス

未指定

## 🤝 貢献

改善提案やバグ報告は、GitHubのIssuesから受け付けています。
