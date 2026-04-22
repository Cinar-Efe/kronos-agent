import { PlatformGenerator, ReleaseData } from '../types';

export class LinkedInGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a LinkedIn post for a software release announcement.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

LINKEDIN RULES:
- Professional tone
- Start with attention-grabbing first line
- Use line breaks for readability
- Include key achievements/metrics
- Relevant hashtags (3-5)
- Call-to-action
- Max 3000 characters
- Emphasize value and impact

Generate a complete LinkedIn post.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `linkedin-${version}.txt`;
  }

  getPlatformName(): string {
    return 'LinkedIn';
  }
}
