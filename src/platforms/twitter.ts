import { PlatformGenerator, ReleaseData } from '../types';

export class TwitterGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a Twitter thread for a software release announcement.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

TWITTER RULES:
- First tweet: Hook (280 chars max)
- Following tweets: Key features, one per tweet
- Use relevant hashtags (max 2-3)
- Include emojis strategically
- Thread format (1/n, 2/n, etc.)
- Engaging, punchy language
- Call-to-action in final tweet

Generate a Twitter thread (4-6 tweets).`;

    return prompt;
  }

  getFileName(version: string): string {
    return `twitter-${version}.txt`;
  }

  getPlatformName(): string {
    return 'Twitter';
  }
}
