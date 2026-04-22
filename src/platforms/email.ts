import { PlatformGenerator, ReleaseData } from '../types';

export class EmailGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate an email newsletter for a software release announcement.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

EMAIL RULES:
- Compelling subject line (50 chars max)
- Personal greeting
- Clear structure with headers
- Bullet points for features
- Call-to-action buttons/links
- Footer with unsubscribe
- Mobile-friendly format
- Professional HTML structure

Generate complete email newsletter (subject + body).`;

    return prompt;
  }

  getFileName(version: string): string {
    return `email-${version}.html`;
  }

  getPlatformName(): string {
    return 'Email';
  }
}
