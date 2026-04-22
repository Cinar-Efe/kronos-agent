import { PlatformGenerator, ReleaseData } from '../types';

export class RedditGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a viral Reddit post for a software release announcement.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

CRITICAL RULES FOR REDDIT SUCCESS:
1. Title MUST be catchy, intriguing, benefit-focused (max 300 chars)
2. Start with a HOOK that grabs attention
3. Use markdown formatting (bold, italic, lists, code blocks)
4. Include a TL;DR at the top for lazy readers
5. Break into digestible sections with headers
6. End with clear call-to-action
7. Use emojis sparingly (1-3 max, strategically placed)
8. Be conversational and authentic
9. Anticipate and answer common questions
10. Max 10,000 characters total

FORMAT:
**[Catchy Title]**

**TL;DR:** [One compelling sentence about the release]

---

[Hook paragraph - why should they care?]

## What's New

[Key highlights with bullet points]

## Why This Matters

[Value proposition for users]

## Getting Started

[Simple steps or link]

---

[Engaging question or CTA to drive comments]

Generate ONLY the Reddit post (title on first line, body after).`;

    return prompt;
  }

  getFileName(version: string): string {
    return `reddit-${version}.md`;
  }

  getPlatformName(): string {
    return 'Reddit';
  }
}
