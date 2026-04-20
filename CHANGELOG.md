# Changelog

All notable changes to Kronos will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Claude API support (Anthropic)
- Local LLM support (Ollama, LM Studio)
- Custom content templates
- VS Code extension
- Automated testing suite

## [0.1.0] - 2026-04-20

### Added
- Initial beta release (previously known as Hermes)
- Support for 7 languages (en-US, en-GB, fr, zh, ru, de, es)
- 6 content platforms (changelog, twitter, linkedin, producthunt, youtube, email)
- OpenAI GPT-4o-mini integration
- 4 content tones (professional, casual, excited, technical)
- Conventional commits parsing
- Parallel content generation (6x faster than sequential)
- CLI interface via Commander.js
- Interactive configuration wizard (`kronos config`)
- Language listing command (`kronos languages`)
- Init command (`kronos init`)

### Known Issues
- No automated test suite yet
- Limited error handling for edge cases
- Some API error messages could be more user-friendly

---

*Maintained by [Cinar Efe](https://github.com/Cinar-Efe)*
