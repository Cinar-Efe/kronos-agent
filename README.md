<div align="center">

# ⌛ KRONOS

### Time to ship

**An autonomous AI agent that transforms your software releases into ready-to-publish content for every major platform — in 7 languages.**

[![npm version](https://img.shields.io/npm/v/kronos-agent?color=gold)](https://www.npmjs.com/package/kronos-agent)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Languages](https://img.shields.io/badge/languages-7-blue)](#-supported-languages)
[![Platforms](https://img.shields.io/badge/platforms-6-green)](#-content-platforms)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)

```bash
kronos ship --release v1.0.0
```

*One command. Six platforms. Seven languages. Zero effort.*

</div>

---

> [!WARNING]
> **🚧 Beta Status - v0.1.0**
>
> Kronos is in early development. Core functionality works, but expect rough edges.
> Parts of this project were built with AI assistance. PRs, feedback, and 
> bug reports are very welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) to help.

---

## 🎯 What is Kronos?

**Kronos is an autonomous AI agent for developers.**

You write code and ship releases. Kronos handles everything *after* the release:
writing changelogs, composing social media posts, drafting newsletters, scripting
videos, and preparing launch content — all generated from your actual git commits,
in the language and tone you choose.

### The Problem It Solves

Every developer knows the pain after shipping:

- ✍️ Writing a meaningful **CHANGELOG.md**
- 🐦 Crafting an engaging **Twitter thread**
- 💼 Composing a professional **LinkedIn post**
- 🚀 Preparing **Product Hunt launch** copy
- 🎥 Scripting a **YouTube video**
- 📧 Writing an **email newsletter**

This takes **hours** every release. Most developers skip it entirely, missing out
on the audience and growth their hard work deserves.

**Kronos does all of this in under 30 seconds. Autonomously.**

---

## ✨ Why Kronos?

| Without Kronos | With Kronos |
|----------------|-------------|
| 🕐 3+ hours writing release content | ⚡ 30 seconds |
| 😩 Generic marketing templates | 🎨 Context-aware from your commits |
| 🤖 Sounds like AI slop | 💬 Authentic, tone-adjusted voice |
| 🇺🇸 English only | 🌍 7 languages |
| 📝 Manual work for every platform | 🚀 All platforms in parallel |
| 💸 Pay a social media manager | 💰 ~$0.004 per release |

---

## 🌍 Supported Languages

Kronos writes content natively in 7 languages — no robotic translations.

| Flag | Code | Language |
|------|------|----------|
| 🇺🇸 | `en-US` | English (United States) |
| 🇬🇧 | `en-GB` | English (United Kingdom) |
| 🇫🇷 | `fr`    | Français |
| 🇨🇳 | `zh`    | 中文 (Simplified Chinese) |
| 🇷🇺 | `ru`    | Русский |
| 🇩🇪 | `de`    | Deutsch |
| 🇪🇸 | `es`    | Español |

---

## 📱 Content Platforms

| Platform | What You Get |
|----------|--------------|
| 📝 **Changelog** | Keep-a-Changelog formatted `CHANGELOG.md` entry |
| 🐦 **Twitter/X** | 5-7 tweet thread with hooks, emojis, hashtags |
| 💼 **LinkedIn** | Professional 1000-1500 char post with hashtags |
| 🚀 **Product Hunt** | Tagline + description + first comment |
| 🎥 **YouTube** | Full video script with timestamps, tags, description |
| 📧 **Email** | Subject line, preview, body, CTA text |

---

## 📦 Installation

### Step 1: Install Node.js

Kronos requires **Node.js v18 or higher**. Check your version:

```bash
node --version
```

If you don't have Node.js or your version is too old:
- 👉 Download from [nodejs.org](https://nodejs.org) (choose the **LTS** version)
- Windows: run the `.msi` installer, click Next on everything
- macOS: run the `.pkg` installer
- Linux: use your package manager or [nvm](https://github.com/nvm-sh/nvm)

After installation, **close and reopen** your terminal, then verify:

```bash
node --version   # Should show v18 or higher
npm --version    # Should show a version number
```

### Step 2: Install Kronos

```bash
npm install -g kronos-agent
```

Or with alternatives:

```bash
yarn global add kronos-agent
pnpm add -g kronos-agent
```

### Step 3: Verify Installation

```bash
kronos --version
kronos languages   # Lists supported languages
```

---

## 🔑 Get an OpenAI API Key

Kronos uses OpenAI's GPT-4o-mini model to generate content (very cheap, ~$0.004 per release).

### Step 1: Create an OpenAI Account

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up (you can use Google or GitHub login)

### Step 2: Add Payment Method

1. Go to [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing)
2. Click **Add payment method**
3. Enter your card details
4. Add credit balance (**$5 is enough for 1000+ releases**)

> ⚠️ **Important:** Turn OFF "Auto-recharge" if it's on. Set a **hard usage limit**
> at [platform.openai.com/settings/organization/limits](https://platform.openai.com/settings/organization/limits)
> to prevent surprise charges.

### Step 3: Create an API Key

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Click **Create new secret key**
3. Give it a name (e.g., "kronos")
4. Copy the key (starts with `sk-proj-...`)
5. ⚠️ **Save it somewhere safe** — you cannot view it again

---

## 🎯 Quick Start

### Step 1: Configure Kronos

Run the interactive configuration wizard:

```bash
kronos config
```

It will ask for:
- Your OpenAI API key
- Default language
- Platforms to generate content for
- Content tone (professional, casual, excited, technical)

Your config is saved to `~/.kronosrc`.

### Step 2: Go to Your Project

Kronos works inside a **git repository**. Navigate to your project:

```bash
cd path/to/your/project
```

### Step 3: Ship Your Release

```bash
kronos ship --release v1.0.0
```

That's it. Kronos will:
1. Analyze your git commits since the last release
2. Generate content for all configured platforms (in parallel)
3. Save everything to `./releases/release-v1.0.0/`

---

## 🛠️ Usage Examples

### Interactive mode (prompts for version)
```bash
kronos ship
```

### Specific version
```bash
kronos ship --release v2.0.0
```

### Different language
```bash
kronos ship --release v2.0.0 --language fr
kronos ship --release v2.0.0 --language zh
kronos ship --release v2.0.0 --language de
```

### Only specific platforms
```bash
kronos ship --release v2.0.0 --platforms twitter,linkedin
kronos ship --release v2.0.0 --platforms changelog
```

### Different tone
```bash
kronos ship --release v2.0.0 --tone excited
kronos ship --release v2.0.0 --tone technical
```

### Custom output directory
```bash
kronos ship --release v2.0.0 --output ./marketing/releases
```

### Combine options
```bash
kronos ship --release v2.0.0 --language es --tone casual --platforms twitter,linkedin
```

---

## 📘 All Commands

```bash
kronos ship       # Generate release content (main command)
kronos config     # Configure settings (interactive wizard)
kronos languages  # List supported languages
kronos init       # First-time setup
kronos --help     # Show all commands and options
kronos --version  # Show Kronos version
```

---

## 🎨 Content Tones

Choose the voice that matches your project:

| Tone | Best For | Vibe |
|------|----------|------|
| 🎩 **professional** | Enterprise products, B2B SaaS | Polished, clear, credible |
| 😎 **casual** | Indie projects, side hustles | Friendly, conversational |
| 🚀 **excited** | Launch day, big features | High energy, hype-worthy |
| 🤓 **technical** | Dev tools, libraries | Precise, detailed, deep |

---

## 💡 How It Works

Kronos is an autonomous AI agent that orchestrates a 5-step workflow:

```
1. 📊 ANALYZE    → Reads git log since last tag
2. 🧠 UNDERSTAND → Parses conventional commits (feat, fix, breaking)
3. 🎨 GENERATE   → Calls OpenAI GPT-4o-mini with platform-specific prompts
4. ✨ POLISH     → Applies tone, language, and formatting rules
5. 💾 SAVE       → Organizes output in /releases/release-vX.X.X/
```

The agent makes **6 parallel API calls** (one per platform), which is why it's 6x
faster than sequential generation.

---

## 📝 Conventional Commits

Kronos works best with [conventional commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat(auth): add OAuth login"
git commit -m "fix(api): resolve timeout issue"
git commit -m "feat!: breaking change in config format"
git commit -m "docs: update installation guide"
```

**Commit types Kronos understands:**
- `feat:` - New features (highlighted in Twitter/LinkedIn)
- `fix:` - Bug fixes (grouped in changelog)
- `feat!:` or `BREAKING CHANGE:` - Breaking changes (prominently featured)
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Tests
- `chore:` - Maintenance

Kronos also handles regular commit messages — it just works better with conventional ones.

---

## ⚙️ Configuration

Kronos stores config in `~/.kronosrc`:

```json
{
  "openaiApiKey": "sk-proj-...",
  "language": "en-US",
  "platforms": ["changelog", "twitter", "linkedin", "producthunt"],
  "tone": "professional",
  "outputDir": "./releases"
}
```

### Environment Variables

You can override config with environment variables:

```bash
# Linux/macOS
export OPENAI_API_KEY="sk-proj-..."
kronos ship --release v1.0.0

# Windows PowerShell
$env:OPENAI_API_KEY = "sk-proj-..."
kronos ship --release v1.0.0

# Windows CMD
set OPENAI_API_KEY=sk-proj-...
kronos ship --release v1.0.0
```

This is useful for CI/CD pipelines.

---

## 🤖 Use as a Library

Kronos is also a Node.js library:

```typescript
import { KronosAgent, GitAnalyzer } from 'kronos-agent';

const analyzer = new GitAnalyzer('/path/to/your/repo');
const data = await analyzer.getCommitsSinceLastRelease('v1.2.0');

const agent = new KronosAgent({
  openaiApiKey: process.env.OPENAI_API_KEY!,
  language: 'fr',
  platforms: ['twitter', 'linkedin'],
  tone: 'excited',
  outputDir: './releases'
});

const content = await agent.generateAllContent(data);
console.log(content.get('twitter'));
console.log(content.get('linkedin'));
```

---

## 🎬 GitHub Actions Integration

Automate release content generation in your CI/CD:

```yaml
# .github/workflows/release.yml
name: Generate Release Content

on:
  release:
    types: [published]

jobs:
  kronos:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0   # Need full git history

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Kronos
        run: npm install -g kronos-agent

      - name: Generate release content
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: kronos ship --release ${{ github.ref_name }} --language en-US

      - name: Commit generated content
        run: |
          git config user.name "github-actions"
          git config user.email "github-actions@github.com"
          git add releases/
          git commit -m "docs: add release content for ${{ github.ref_name }}"
          git push
```

---

## 💰 Pricing

Kronos itself is **100% free and open-source**. You only pay for OpenAI API usage:

- **Model:** `gpt-4o-mini`
- **Cost per release:** ~$0.004 (less than half a cent)
- **$5 budget:** ~1,250 release generations
- **No subscription, no tracking, no data collection**

---

## 🐛 Troubleshooting

### "OpenAI API key not found"
Run `kronos config` and enter your key, OR set the `OPENAI_API_KEY` environment variable.

### "No commits found since last release"
Make sure:
- You're in a git repository (`git status` should work)
- You've made commits since the last tag
- Your tag name matches semver format (`v1.0.0`, not just `1.0.0`)

### "429 - You exceeded your current quota"
You need to add credit to your OpenAI account at
[platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing).

### "404 - Model does not exist"
Your OpenAI account might not have access to `gpt-4o-mini`. Try upgrading your tier
or using a different model. Most accounts have access by default.

### Content is in the wrong language
Make sure you're passing the correct language code: `en-US`, `en-GB`, `fr`, `zh`, `ru`, `de`, or `es`.

### Windows: "execution policy" error
If you get an error running scripts on Windows, run this once in PowerShell as admin:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 🛣️ Roadmap

- [x] 7 language support
- [x] 6 platform content generation
- [x] Git commit analysis
- [x] Conventional commits parsing
- [x] OpenAI GPT-4o-mini integration
- [ ] Claude API support (Anthropic)
- [ ] Local LLM support (Ollama, LM Studio)
- [ ] Custom content templates
- [ ] Direct platform publishing (auto-post to Twitter, LinkedIn)
- [ ] VS Code extension
- [ ] Web dashboard
- [ ] AI-generated thumbnails/images
- [ ] Multi-release comparison reports
- [ ] More languages (Japanese, Portuguese, Italian, Arabic, Hindi)

---

## 🤝 Contributing

Contributions are welcome and appreciated! See [CONTRIBUTING.md](CONTRIBUTING.md).

Ways to contribute:
- 🌍 Add new languages
- 🎨 Add new content platforms
- 🐛 Fix bugs
- 📝 Improve documentation
- 🧪 Write tests
- 💡 Suggest features via GitHub Issues

---

## 📜 License

MIT © Kronos Contributors

See [LICENSE](LICENSE) for details.

---

<div align="center">

**Made with ⌛ by developers, for developers.**

If Kronos saved you time, consider:

⭐ Starring the repo &nbsp;•&nbsp; 🐦 Sharing on Twitter &nbsp;•&nbsp; 💖 Telling a friend

*The messenger of the gods is now the time to ship.*

</div>
