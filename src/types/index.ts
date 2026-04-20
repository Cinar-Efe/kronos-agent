/**
 * KRONOS - Tip tanımlamaları
 */

export type SupportedLanguage = 
  | 'en-US'  // English (US)
  | 'en-GB'  // English (UK)
  | 'fr'     // French
  | 'zh'     // Chinese
  | 'ru'     // Russian
  | 'de'     // German
  | 'es';    // Spanish

export type ContentPlatform = 
  | 'changelog'
  | 'twitter'
  | 'linkedin'
  | 'producthunt'
  | 'youtube'
  | 'email';

export interface Commit {
  hash: string;
  date: string;
  author: string;
  message: string;
  type?: 'feat' | 'fix' | 'docs' | 'style' | 'refactor' | 'test' | 'chore' | 'breaking';
  scope?: string;
  description?: string;
}

export interface ReleaseData {
  version: string;
  previousVersion?: string;
  commits: Commit[];
  repoName: string;
  repoUrl?: string;
  contributors: string[];
  dateRange: {
    from: string;
    to: string;
  };
}

export interface KronosConfig {
  openaiApiKey: string;
  language: SupportedLanguage;
  platforms: ContentPlatform[];
  tone: 'professional' | 'casual' | 'excited' | 'technical';
  outputDir: string;
  projectName?: string;
  projectDescription?: string;
}

export interface GeneratedContent {
  platform: ContentPlatform;
  content: string;
  metadata?: {
    title?: string;
    tags?: string[];
    hashtags?: string[];
    wordCount?: number;
  };
}

export interface AgentTask {
  name: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress?: number;
  result?: any;
  error?: string;
}
