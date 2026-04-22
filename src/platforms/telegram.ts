import { PlatformGenerator, ReleaseData } from '../types';

export class TelegramGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a Telegram channel/group message for a software release.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

TELEGRAM OPTIMIZATION RULES:
1. Maximum 4,096 characters
2. Use Telegram markdown: **bold**, __italic__, \`code\`, \`\`\`code block\`\`\`
3. Start with compelling emoji + headline
4. Use emojis for bullet points (✅ ⚡ 🎯 📌)
5. Break into clear sections
6. Include preview-friendly formatting
7. Add relevant hashtags at the end
8. Link-preview optimized (first link matters)
9. Encourage engagement (reactions, comments)
10. Channel-ready (no @mentions unless needed)

FORMAT:
🚀 **[Bold Headline]**

__Release ${version}__

[Hook paragraph]

**What's New:**
⚡ Feature 1
⚡ Feature 2
⚡ Feature 3

**Get Started:**
[Installation/link]

[Engagement question or CTA]

#SoftwareRelease #Development #Update

Generate ONLY the Telegram message with proper markdown.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `telegram-${version}.md`;
  }

  getPlatformName(): string {
    return 'Telegram';
  }
}
