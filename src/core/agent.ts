/**
 * KRONOS - AI Agent
 * Uses OpenAI API to generate autonomous multi-platform content
 */

import OpenAI from 'openai';
import { ReleaseData, SupportedLanguage, ContentPlatform, KronosConfig } from '../types/index.js';
import { getAILanguageInstruction } from '../i18n/index.js';

export class KronosAgent {
  private openai: OpenAI;
  private config: KronosConfig;

  constructor(config: KronosConfig) {
    this.config = config;
    this.openai = new OpenAI({
      apiKey: config.openaiApiKey
    });
  }

  /**
   * System prompt - Defines the agent's role
   */
  private getSystemPrompt(platform: ContentPlatform): string {
    const langInstruction = getAILanguageInstruction(this.config.language);
    
    const base = `You are KRONOS, an autonomous AI agent that transforms software releases into engaging content. You are the messenger between developers and the world.

CRITICAL LANGUAGE REQUIREMENT:
- You MUST write the ENTIRE output in: ${langInstruction}
- Do NOT mix languages
- Do NOT add English if the target language is different
- Technical terms (API, commit, release, etc.) can stay in English if commonly used that way

TONE: ${this.config.tone}

IMPORTANT RULES:
- Be authentic and avoid generic marketing fluff
- Use concrete details from the commits provided
- Make it sound human, not AI-generated
- Output ONLY the content, no explanations or preamble`;

    const platformPrompts: Record<ContentPlatform, string> = {
      changelog: `${base}

YOUR TASK: Generate a professional CHANGELOG.md entry.
FORMAT: Keep a Changelog (https://keepachangelog.com)
STRUCTURE:
### Breaking Changes
### Features
### Bug Fixes
### Improvements

Include commit references (hash). Be concise and technical.`,

      twitter: `${base}

YOUR TASK: Generate an engaging Twitter/X thread.
REQUIREMENTS:
- 5-7 tweets total
- Each tweet MUST be under 280 characters
- Number them: 1/7, 2/7, etc.
- Start with a strong hook
- Use emojis strategically (not excessively)
- Include 2-3 relevant hashtags in the final tweet
- End with a call-to-action (star repo, try it, etc.)`,

      linkedin: `${base}

YOUR TASK: Generate a professional LinkedIn post.
REQUIREMENTS:
- 1000-1500 characters total
- Start with a compelling hook (first line matters most)
- Tell the story behind the release
- Highlight impact and why it matters
- Use short paragraphs (scannable)
- Add 3-5 relevant hashtags at the end
- Professional but personable tone`,

      producthunt: `${base}

YOUR TASK: Generate Product Hunt launch content.
STRUCTURE (output exactly in this format with headers):
## Tagline
(60 characters max, punchy one-liner)

## Description
(260 characters max, what the product does)

## First Comment
(500-800 characters, founder-style intro explaining what's new in this release, why you built it, what problem it solves)

Be enthusiastic but genuine. No cheesy marketing speak.`,

      youtube: `${base}

YOUR TASK: Generate a YouTube video script for the release.
STRUCTURE (output with clear section headers):

## Title Suggestions (3 options)

## Hook (0:00 - 0:15)
(Grab attention immediately)

## Introduction (0:15 - 0:45)
(What this video covers)

## Main Content
(Break into sections with timestamps)
- Section 1: What's new
- Section 2: How to use it
- Section 3: Why it matters

## Call to Action
(Subscribe, try it, link in description)

## Description
(YouTube description box, 200-300 words)

## Tags
(10-15 relevant tags)

Target length: 5-8 minute video`,

      email: `${base}

YOUR TASK: Generate an email newsletter announcement.
STRUCTURE (output exactly in this format):

## Subject Line
(Compelling, under 50 characters)

## Preview Text
(Shown in inbox, under 90 characters)

## Email Body

### Header
(Eye-catching opening)

### What's New
(Main features, scannable)

### Why It Matters
(Impact on the user)

### How to Get Started
(Clear next steps)

## CTA Button Text
(3-5 words, action-oriented)

Keep paragraphs SHORT (2-3 sentences max). Use bullet points where appropriate.`
    };

    return platformPrompts[platform];
  }

  /**
   * User prompt - Provides the release data
   */
  private getUserPrompt(data: ReleaseData, platform: ContentPlatform): string {
    const commitList = data.commits
      .slice(0, 50) // Token limit protection
      .map(c => `- ${c.type ? `[${c.type}]` : ''} ${c.message} (${c.hash})`)
      .join('\n');

    return `Generate ${platform} content for this release:

PROJECT: ${data.repoName}
VERSION: ${data.version}
${data.previousVersion ? `PREVIOUS VERSION: ${data.previousVersion}` : ''}
${data.repoUrl ? `REPO: ${data.repoUrl}` : ''}
CONTRIBUTORS: ${data.contributors.join(', ')}
TOTAL COMMITS: ${data.commits.length}

COMMITS:
${commitList}

Generate the ${platform} content now. Remember: output ONLY the content itself, in the target language.`;
  }

  /**
   * Generate content for a specific platform
   */
  async generateContent(
    data: ReleaseData, 
    platform: ContentPlatform
  ): Promise<string> {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: this.getSystemPrompt(platform)
        },
        {
          role: 'user',
          content: this.getUserPrompt(data, platform)
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    return completion.choices[0]?.message?.content || '';
  }

  /**
   * Generate content for all platforms in PARALLEL (agent's superpower!)
   * 6x faster than sequential generation
   */
  async generateAllContent(data: ReleaseData): Promise<Map<ContentPlatform, string>> {
    const results = new Map<ContentPlatform, string>();
    
    // Parallel execution - all platforms at once
    const promises = this.config.platforms.map(async (platform) => {
      const content = await this.generateContent(data, platform);
      return { platform, content };
    });

    const generated = await Promise.all(promises);
    
    for (const { platform, content } of generated) {
      results.set(platform, content);
    }

    return results;
  }
}
