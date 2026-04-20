/**
 * KRONOS - Config Manager
 * ~/.kronosrc dosyasında ayarları saklar
 */

import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { KronosConfig, SupportedLanguage, ContentPlatform } from '../types/index.js';

const CONFIG_PATH = path.join(os.homedir(), '.kronosrc');

const DEFAULT_CONFIG: Partial<KronosConfig> = {
  language: 'en-US',
  platforms: ['changelog', 'twitter', 'linkedin', 'producthunt'],
  tone: 'professional',
  outputDir: './releases'
};

export class ConfigManager {
  /**
   * Config'i yükle (dosya + env var)
   */
  static async load(): Promise<KronosConfig> {
    let config: Partial<KronosConfig> = { ...DEFAULT_CONFIG };

    // Dosyadan oku
    if (await fs.pathExists(CONFIG_PATH)) {
      const fileConfig = await fs.readJson(CONFIG_PATH);
      config = { ...config, ...fileConfig };
    }

    // Env var'dan API key al (öncelikli)
    if (process.env.OPENAI_API_KEY) {
      config.openaiApiKey = process.env.OPENAI_API_KEY;
    }

    if (!config.openaiApiKey) {
      throw new Error(
        'OpenAI API key not found. Set OPENAI_API_KEY env var or run: kronos config'
      );
    }

    return config as KronosConfig;
  }

  /**
   * Config'i kaydet
   */
  static async save(config: Partial<KronosConfig>): Promise<void> {
    let existing: Partial<KronosConfig> = {};
    
    if (await fs.pathExists(CONFIG_PATH)) {
      existing = await fs.readJson(CONFIG_PATH);
    }
    
    const updated = { ...existing, ...config };
    await fs.writeJson(CONFIG_PATH, updated, { spaces: 2 });
  }

  /**
   * Config dosya yolunu al
   */
  static getConfigPath(): string {
    return CONFIG_PATH;
  }

  /**
   * Config var mı?
   */
  static async exists(): Promise<boolean> {
    return fs.pathExists(CONFIG_PATH);
  }
}
