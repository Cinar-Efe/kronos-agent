import { PlatformGenerator, ReleaseData } from '../types';

export class WhatsAppGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a WhatsApp message for a software release announcement.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

WHATSAPP VIRAL RULES:
1. MAXIMUM 1,024 characters (strict limit!)
2. Start with an attention-grabbing emoji + hook
3. Use emojis liberally (🚀 ✨ 🎉 💪 ⚡ 🔥 etc.)
4. Short, punchy lines (mobile-friendly)
5. Include version number prominently
6. Highlight ONLY top 2-3 changes
7. End with strong CTA
8. Use line breaks for readability
9. No markdown (plain text only)
10. Make it shareable/forward-worthy

STYLE: Conversational, exciting, emoji-rich, concise

EXAMPLE STRUCTURE:
🚀 [Hook with emoji]

✨ v${version} is here!

[2-3 key changes with emojis]

💪 [Benefit statement]

🔗 [CTA]

Generate ONLY the WhatsApp message.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `whatsapp-${version}.txt`;
  }

  getPlatformName(): string {
    return 'WhatsApp';
  }
}
