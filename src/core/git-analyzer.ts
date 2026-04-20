/**
 * KRONOS - Git Analyzer
 * Git repository'sini analiz eder ve commitleri çıkarır
 */

import simpleGit, { SimpleGit } from 'simple-git';
import { Commit, ReleaseData } from '../types/index.js';

export class GitAnalyzer {
  private git: SimpleGit;

  constructor(workingDir: string = process.cwd()) {
    this.git = simpleGit(workingDir);
  }

  /**
   * Son tag'den itibaren tüm commit'leri al
   */
  async getCommitsSinceLastRelease(currentVersion: string): Promise<ReleaseData> {
    // Son tag'i bul
    const previousVersion = await this.getPreviousVersion(currentVersion);
    
    // Commit'leri al - eğer önceki tag varsa aralık, yoksa tüm history
    const logOptions = previousVersion
      ? { from: previousVersion, to: 'HEAD' }
      : {}; // Tüm historyi al
    
    const log = await this.git.log(logOptions);
    
    const commits: Commit[] = log.all.map(commit => ({
      hash: commit.hash.substring(0, 7),
      date: commit.date,
      author: commit.author_name,
      message: commit.message,
      ...this.parseConventionalCommit(commit.message)
    }));

    // Repo bilgilerini al
    const repoName = await this.getRepoName();
    const repoUrl = await this.getRepoUrl();
    
    // Katkıda bulunanlar
    const contributors = [...new Set(commits.map(c => c.author))];
    
    return {
      version: currentVersion,
      previousVersion,
      commits,
      repoName,
      repoUrl,
      contributors,
      dateRange: {
        from: commits[commits.length - 1]?.date || new Date().toISOString(),
        to: commits[0]?.date || new Date().toISOString()
      }
    };
  }

  /**
   * Conventional commit formatını parse et
   * Örnek: "feat(auth): add login feature"
   */
  private parseConventionalCommit(message: string): Partial<Commit> {
    const conventionalRegex = /^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?(!?): (.+)/;
    const match = message.match(conventionalRegex);
    
    if (!match) {
      return {};
    }
    
    const [, type, scope, breaking, description] = match;
    
    return {
      type: breaking === '!' ? 'breaking' : type as any,
      scope: scope?.replace(/[()]/g, ''),
      description
    };
  }

  /**
   * Önceki versiyon tag'ini bul
   */
  private async getPreviousVersion(currentVersion: string): Promise<string | undefined> {
    try {
      const tags = await this.git.tags();
      const versionTags = tags.all
        .filter(t => t.match(/^v?\d+\.\d+\.\d+/))
        .filter(t => t !== currentVersion && t !== `v${currentVersion}`);
      
      return versionTags[versionTags.length - 1];
    } catch {
      return undefined;
    }
  }

  /**
   * Repo ismini al
   */
  private async getRepoName(): Promise<string> {
    try {
      const remotes = await this.git.getRemotes(true);
      const origin = remotes.find(r => r.name === 'origin');
      
      if (origin?.refs.fetch) {
        const match = origin.refs.fetch.match(/[/:]([^/]+\/[^/]+?)(\.git)?$/);
        return match?.[1] || 'unknown';
      }
    } catch {}
    
    return 'project';
  }

  /**
   * Repo URL'ini al
   */
  private async getRepoUrl(): Promise<string | undefined> {
    try {
      const remotes = await this.git.getRemotes(true);
      const origin = remotes.find(r => r.name === 'origin');
      
      if (origin?.refs.fetch) {
        return origin.refs.fetch
          .replace('git@github.com:', 'https://github.com/')
          .replace('.git', '');
      }
    } catch {}
    
    return undefined;
  }

  /**
   * Commit'leri kategorize et
   */
  categorizeCommits(commits: Commit[]): Record<string, Commit[]> {
    const categories: Record<string, Commit[]> = {
      breaking: [],
      features: [],
      fixes: [],
      improvements: [],
      other: []
    };

    for (const commit of commits) {
      if (commit.type === 'breaking') {
        categories.breaking.push(commit);
      } else if (commit.type === 'feat') {
        categories.features.push(commit);
      } else if (commit.type === 'fix') {
        categories.fixes.push(commit);
      } else if (['refactor', 'perf', 'style'].includes(commit.type || '')) {
        categories.improvements.push(commit);
      } else {
        categories.other.push(commit);
      }
    }

    return categories;
  }
}
