# Contributing to Kronos ⌛

Thank you for considering contributing to Kronos! This document will guide you through the process.

## 🌟 Ways to Contribute

- 🐛 Report bugs via [GitHub Issues](https://github.com/yourusername/kronos-agent/issues)
- 💡 Suggest features
- 🌍 Add new languages
- 📝 Improve documentation
- 🎨 Add new content platform templates
- 🧪 Write tests

## 🚀 Development Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/kronos-agent.git
cd kronos-agent

# Install dependencies
npm install

# Run in dev mode (uses tsx, no build needed)
npm run dev -- ship --release v1.0.0

# Build for production
npm run build

# Run tests
npm test
```

## 🌍 Adding a New Language

1. Add the language code to `SupportedLanguage` type in `src/types/index.ts`
2. Add language info to `LANGUAGES` in `src/i18n/index.ts`
3. Add UI translations to `UI_MESSAGES` in `src/i18n/index.ts` (all keys required)
4. Add AI prompt instruction to `AI_LANGUAGE_NAMES` in `src/i18n/index.ts`
5. Update the README language table
6. Test with: `npm run dev -- ship --release v1.0.0 --language <your-lang>`

## 🎨 Adding a New Platform

1. Add the platform to `ContentPlatform` type in `src/types/index.ts`
2. Add a prompt template in `src/core/agent.ts` (in `getSystemPrompt`)
3. Add file name and header in `src/core/file-writer.ts`
4. Add to default platforms list in `src/core/config.ts`
5. Update the README platform table

## 📝 Commit Convention

We use [conventional commits](https://www.conventionalcommits.org):

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: formatting changes (no code change)
refactor: code refactoring (no feature or fix)
test: add or update tests
chore: maintenance tasks
perf: performance improvements
```

Breaking changes: add `!` after type or `BREAKING CHANGE:` in footer.

## 🔄 Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit using conventional commits
4. Push to your fork: `git push origin feat/amazing-feature`
5. Open a Pull Request with a clear description

## 📜 Code of Conduct

Be kind, be respectful, be helpful. Harassment will not be tolerated.

---

Questions? Open an issue or start a discussion!
