# Kronos - Toplu Commit Script
Write-Host "Kronos commit script basliyor..." -ForegroundColor Yellow

# SECURITY.md
Set-Content -Path "SECURITY.md" -Value "# Security Policy`n`n## Supported Versions`n`n| Version | Supported |`n|---------|-----------|`n| 0.1.x   | Yes       |`n`n## Reporting a Vulnerability`n`nIf you discover a security vulnerability, please do not open a public issue.`nOpen a private security advisory on GitHub instead.`n`nWe will respond within 48 hours.`n`nThank you for helping keep Kronos secure!" -Encoding utf8
git add SECURITY.md
git commit -m "docs: add SECURITY.md for vulnerability reporting"
Write-Host "OK: SECURITY.md" -ForegroundColor Green

# CODE_OF_CONDUCT.md
Set-Content -Path "CODE_OF_CONDUCT.md" -Value "# Code of Conduct`n`n## Our Pledge`n`nWe are committed to making participation in this project a harassment-free experience for everyone.`n`n## Our Standards`n`nPositive behavior includes using welcoming language, being respectful, and accepting constructive criticism.`n`nUnacceptable behavior includes harassment, trolling, and publishing others private information.`n`n## Enforcement`n`nInstances of unacceptable behavior may be reported by opening a GitHub issue.`n`n## Attribution`n`nAdapted from the Contributor Covenant, version 2.1." -Encoding utf8
git add CODE_OF_CONDUCT.md
git commit -m "docs: add CODE_OF_CONDUCT.md"
Write-Host "OK: CODE_OF_CONDUCT.md" -ForegroundColor Green

# ROADMAP.md
Set-Content -Path "ROADMAP.md" -Value "# Kronos Roadmap`n`n## v0.1.0 (Current)`n- 7 languages support`n- 6 platforms`n- OpenAI GPT-4o-mini`n- 4 content tones`n- Parallel generation`n`n## v0.2.0 (Planned)`n- Claude API support`n- Dry-run mode`n- JSON output format`n- Unit tests`n`n## v0.3.0 (Planned)`n- Local LLM support (Ollama)`n- Custom templates`n- VS Code extension`n`n## v1.0.0 (Future)`n- Stable API`n- Full test coverage`n- Plugin system`n`nHave an idea? Open an issue on GitHub!" -Encoding utf8
git add ROADMAP.md
git commit -m "docs: add ROADMAP.md with future plans"
Write-Host "OK: ROADMAP.md" -ForegroundColor Green

# .npmignore
Set-Content -Path ".npmignore" -Value "src/`ntests/`nexamples/`n.github/`n.env.example`ntsconfig.json`nCONTRIBUTING.md`nCHANGELOG.md`nSECURITY.md`nCODE_OF_CONDUCT.md`nROADMAP.md`n.editorconfig`n.gitattributes`nnode_modules/`n*.test.ts`n*.spec.ts" -Encoding utf8
git add .npmignore
git commit -m "chore: update .npmignore to exclude dev files"
Write-Host "OK: .npmignore" -ForegroundColor Green

# GitHub Actions
New-Item -ItemType Directory -Force -Path ".github/workflows" | Out-Null
Set-Content -Path ".github/workflows/release.yml" -Value "name: Kronos Release`n`non:`n  release:`n    types: [published]`n`njobs:`n  ship:`n    runs-on: ubuntu-latest`n    steps:`n      - name: Checkout`n        uses: actions/checkout@v4`n        with:`n          fetch-depth: 0`n      - name: Setup Node.js`n        uses: actions/setup-node@v4`n        with:`n          node-version: '18'`n      - name: Install Kronos`n        run: npm install -g kronos-agent`n      - name: Ship Release Content`n        run: kronos ship --release `${{ github.event.release.tag_name }}`n        env:`n          OPENAI_API_KEY: `${{ secrets.OPENAI_API_KEY }}" -Encoding utf8
git add .github
git commit -m "ci: add GitHub Actions workflow for automated release content"
Write-Host "OK: GitHub Actions" -ForegroundColor Green

# examples
New-Item -ItemType Directory -Force -Path "examples" | Out-Null
Set-Content -Path "examples/basic-usage.md" -Value "# Kronos Usage Examples`n`n## Basic Usage`n`n    kronos ship --release v1.0.0`n`n## Specific Language`n`n    kronos ship --release v1.0.0 --language fr`n    kronos ship --release v1.0.0 --language de`n`n## Specific Platforms Only`n`n    kronos ship --release v1.0.0 --platforms twitter,linkedin`n    kronos ship --release v1.0.0 --platforms changelog`n`n## Custom Tone`n`n    kronos ship --release v2.0.0 --tone excited`n    kronos ship --release v1.5.0 --tone professional`n`n## Custom Output Directory`n`n    kronos ship --release v1.0.0 --output ./my-release-content" -Encoding utf8
git add examples/basic-usage.md
git commit -m "docs: add usage examples for common scenarios"
Write-Host "OK: examples/basic-usage.md" -ForegroundColor Green

Set-Content -Path "examples/ci-cd.md" -Value "# CI/CD Integration`n`n## GitHub Actions`n`nAdd this to .github/workflows/release.yml`n`n    name: Kronos Release`n    on:`n      release:`n        types: [published]`n    jobs:`n      ship:`n        runs-on: ubuntu-latest`n        steps:`n          - uses: actions/checkout@v4`n          - uses: actions/setup-node@v4`n            with:`n              node-version: '18'`n          - run: npm install -g kronos-agent`n          - run: kronos ship --release VERSION`n            env:`n              OPENAI_API_KEY: YOUR_KEY`n`n## GitLab CI`n`n    kronos:`n      stage: deploy`n      script:`n        - npm install -g kronos-agent`n        - kronos ship --release VERSION`n      only:`n        - tags" -Encoding utf8
git add examples/ci-cd.md
git commit -m "docs: add CI/CD integration examples"
Write-Host "OK: examples/ci-cd.md" -ForegroundColor Green

# .gitattributes
Set-Content -Path ".gitattributes" -Value "* text=auto eol=lf`n*.ts text eol=lf`n*.json text eol=lf`n*.md text eol=lf`n*.yml text eol=lf`n*.sh text eol=lf`n*.png binary`n*.jpg binary`n*.zip binary" -Encoding utf8
git add .gitattributes
git commit -m "chore: update .gitattributes for line ending consistency"
Write-Host "OK: .gitattributes" -ForegroundColor Green

# CONTRIBUTING.md update
Set-Content -Path "CONTRIBUTING.md" -Value "# Contributing to Kronos`n`nThank you for your interest in contributing to Kronos!`n`n## How to Contribute`n`n1. Fork the repository`n2. Create a feature branch: git checkout -b feat/my-feature`n3. Make your changes`n4. Commit with conventional commits: git commit -m 'feat: add new feature'`n5. Push and open a Pull Request`n`n## Commit Convention`n`nWe use conventional commits:`n- feat: new feature`n- fix: bug fix`n- docs: documentation`n- chore: maintenance`n- ci: CI/CD changes`n`n## Development Setup`n`n    git clone https://github.com/Cinar-Efe/kronos-agent.git`n    cd kronos-agent`n    npm install`n    npm run build`n    npm link`n`n## Questions?`n`nOpen an issue on GitHub!" -Encoding utf8
git add CONTRIBUTING.md
git commit -m "docs: improve CONTRIBUTING.md with detailed instructions"
Write-Host "OK: CONTRIBUTING.md" -ForegroundColor Green

# Push
Write-Host "`nPushing all commits..." -ForegroundColor Yellow
git push

Write-Host "`nTAMAM! Tum commitler atildi!" -ForegroundColor Green
Write-Host "https://github.com/Cinar-Efe/kronos-agent" -ForegroundColor Cyan
