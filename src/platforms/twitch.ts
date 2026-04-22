import { PlatformGenerator, ReleaseData } from '../types';

export class TwitchGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a Twitch stream announcement for a software release.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

TWITCH STREAM OPTIMIZATION:
1. Attention-grabbing title (max 140 chars)
2. Stream description with emotes
3. Chat-friendly formatting
4. Viewer engagement hooks
5. Timestamp breakdown for VOD
6. Clip-worthy moments highlighted
7. Call-to-action for viewers
8. Emote usage (PogChamp, Kappa style references)

FORMAT:

**STREAM TITLE:**
[Catchy, click-worthy title - max 140 chars]

**STREAM DESCRIPTION:**
[Engaging description with what viewers will see]

**CHAT ANNOUNCEMENT:**
[Short, hype message for chat - emote-friendly]

**STREAM SEGMENTS:**
[00:00] Intro & What's New
[05:00] Feature Showcase
[15:00] Live Demo
[25:00] Q&A / Chat Interaction

**VIEWER ENGAGEMENT:**
- Poll ideas for chat
- Questions to drive discussion
- Clip-worthy moments to highlight

**CALL-TO-ACTION:**
[Follow, subscribe, try the release]

Generate complete Twitch stream content.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `twitch-${version}.md`;
  }

  getPlatformName(): string {
    return 'Twitch';
  }
}
