import { PlatformGenerator, ReleaseData } from '../types';

export class InstagramGenerator implements PlatformGenerator {
  async generate(data: ReleaseData): Promise<string> {
    const { version, changes, tone, language } = data;

    const prompt = `Generate Instagram content for a software release announcement.

Release version: ${version}
Changes: ${JSON.stringify(changes)}
Tone: ${tone}
Language: ${language}

INSTAGRAM OPTIMIZATION:
1. Carousel post strategy (max 10 slides)
2. Caption with hooks (first 125 chars crucial!)
3. Hashtag strategy (max 30, use 20-25 optimal)
4. Story highlights script
5. Reel script (15-90 seconds)
6. Visual description for each slide
7. CTA in bio optimization
8. Engagement tactics (questions, polls)

FORMAT:

**POST TYPE:** [Carousel / Single / Reel]

**CAROUSEL SLIDES:** (if carousel)
Slide 1: [Cover - Eye-catching visual description]
Slide 2: [Key feature 1]
Slide 3: [Key feature 2]
...

**CAPTION:**
[First 125 characters - HOOK]

[Main content - value, features, benefits]

[CTA]

**HASHTAGS:**
#SoftwareDevelopment #Coding #Programming #TechRelease #DevCommunity #OpenSource [+ 15-20 more relevant]

**STORY HIGHLIGHTS SCRIPT:**
Frame 1: [Text + visual]
Frame 2: [Text + visual]
...

**REEL SCRIPT:** (if video content)
[0-3s] Hook
[3-15s] Problem/Value
[15-60s] Solution showcase
[60-90s] CTA

**ENGAGEMENT:**
- Question for comments
- Poll for stories
- Share prompt

Generate complete Instagram content package.`;

    return prompt;
  }

  getFileName(version: string): string {
    return `instagram-${version}.md`;
  }

  getPlatformName(): string {
    return 'Instagram';
  }
}
