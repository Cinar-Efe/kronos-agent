import { PlatformGenerator, ReleaseData } from '../types';

export class YouTubeGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a YouTube video description for a software release.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

YOUTUBE RULES:
- Compelling title (60-70 chars)
- Description with timestamps
- Key features outlined
- Links section
- Relevant hashtags
- Call-to-action (subscribe, like, comment)
- Max 5000 characters
- SEO-optimized keywords

Generate complete YouTube video description with timestamps.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `youtube-${version}.txt`;
  }

  getPlatformName(): string {
    return 'YouTube';
  }
}
