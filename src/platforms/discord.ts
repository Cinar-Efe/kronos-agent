import { PlatformGenerator, ReleaseData } from '../types';

export class DiscordGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a Discord server announcement for a software release.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

DISCORD OPTIMIZATION:
1. Server announcement with mentions (@everyone, @here)
2. Discord markdown (bold, italic, code blocks, spoilers)
3. Embed-friendly formatting
4. Reaction emoji suggestions
5. Thread discussion starters
6. Custom emoji references (if applicable)
7. Role mentions for relevant teams
8. Max 2000 characters per message
9. Multi-message thread if needed

FORMAT:

**MAIN ANNOUNCEMENT:**
@here 🚀 **[Release Title]**

__Version ${version} is live!__

**What's New:**
\`\`\`
• Feature 1
• Feature 2
• Feature 3
\`\`\`

**Getting Started:**
[Installation instructions or link]

React with 🎉 if you're excited!

---

**EMBED SUGGESTION:**
Title: ${version} Release Notes
Color: [Hex color for embed]
Fields:
- What's New
- Breaking Changes
- Getting Started

---

**THREAD STARTER:**
[Question to encourage discussion]

**REACTION EMOJIS:**
🎉 Excited
🐛 Found a bug
❓ Need help
✅ Already updated

Generate complete Discord announcement package.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `discord-${version}.md`;
  }

  getPlatformName(): string {
    return 'Discord';
  }
}
