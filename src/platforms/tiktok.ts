import { PlatformGenerator, ReleaseData } from '../types';

export class TikTokGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate a TikTok video script for a software release announcement.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

TIKTOK VIRAL FORMULA:
1. Video length: 15-60 seconds
2. HOOK in first 3 seconds (crucial!)
3. Fast-paced, energetic delivery
4. Visual cues for each point
5. Trending sound suggestions
6. Clear value proposition
7. Strong CTA at end
8. Hashtag strategy (#DevTok #Coding #Programming #SoftwareEngineering)

OUTPUT FORMAT:

**VIDEO SCRIPT (15-60 sec)**

[HOOK - First 3 seconds]
[Visual: ...]
[Text on screen: ...]
[Audio: ...]

[VALUE - Main content 30-40 sec]
[Scene 1: ...]
[Scene 2: ...]
[Scene 3: ...]

[CTA - Last 10 sec]
[Visual: ...]
[Text: ...]

---

**CAPTION:**
[Engaging caption with emojis, max 150 chars]

**HASHTAGS:**
#DevTok #Coding #Programming #SoftwareEngineering #TechTok #Developer #${version.replace(/\./g, '')} [+ 3-5 relevant hashtags]

**TRENDING SOUND SUGGESTIONS:**
- [Song/Sound 1] - Why it works
- [Song/Sound 2] - Why it works

**ENGAGEMENT HOOKS:**
- Pin comment idea
- Question to drive comments

Generate a complete, production-ready TikTok script.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `tiktok-${version}.md`;
  }

  getPlatformName(): string {
    return 'TikTok';
  }
}
