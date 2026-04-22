#!/usr/bin/env node

/**
 * KRONOS CLI
 * Command-line interface for the Kronos agent
 */

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import { GitAnalyzer } from './core/git-analyzer.js';
import { KronosAgent } from './core/agent.js';
import { FileWriter } from './core/file-writer.js';
import { ConfigManager } from './core/config.js';
import { LANGUAGES, t } from './i18n/index.js';
import { ContentPlatform } from './types/index.js';

const program = new Command();

// ASCII Logo
const LOGO = chalk.yellow(`
    ╦╔═╦═╗╔═╗╔╗╔╔═╗╔═╗
    ╠╩╗╠╦╝║ ║║║║║ ║╚═╗
    ╩ ╩╩╚═╚═╝╝╚╝╚═╝╚═╝
  ${chalk.cyan('⌛ Time to generate')}
`);

program
  .name('kronos')
  .description('AI agent that transforms your releases into content for every platform')
  .version('0.1.0');

/**
 * generate command - Main command to generate release content
 */
program
  .command('generate')
  .description('Generate release content for all platforms')
  .option('-r, --release <version>', 'Release version (e.g., v1.2.0)')
  .option('-l, --language <lang>', 'Output language (en-US, en-GB, fr, zh, ru, de, es)')
  .option('-p, --platforms <platforms>', 
  'Platforms (twitter,linkedin,youtube,email,reddit,whatsapp,telegram,tiktok,twitch,instagram,discord)', 
  'twitter,linkedin,youtube,email,reddit,whatsapp,telegram,tiktok,twitch,instagram,discord')
  .option('-t, --tone <tone>', 'Tone: professional, casual, excited, technical')
  .option('-o, --output <dir>', 'Output directory', './releases')
  .action(async (options) => {
    console.log(LOGO);
    
    try {
      // Load config
      const config = await ConfigManager.load();
      
      // Override with CLI options
      if (options.language) config.language = options.language;
      if (options.tone) config.tone = options.tone;
      if (options.output) config.outputDir = options.output;
      if (options.platforms) {
        config.platforms = options.platforms.split(',') as ContentPlatform[];
      }

      // Get version (prompt if missing)
      let version = options.release;
      if (!version) {
        const answer = await inquirer.prompt([{
          type: 'input',
          name: 'version',
          message: t(config.language, 'enterVersion'),
          default: 'v1.0.0'
        }]);
        version = answer.version;
      }

      // 1. Analyze git history
      const analyzeSpinner = ora(t(config.language, 'analyzing')).start();
      const gitAnalyzer = new GitAnalyzer();
      const releaseData = await gitAnalyzer.getCommitsSinceLastRelease(version);
      
      if (releaseData.commits.length === 0) {
        analyzeSpinner.fail(t(config.language, 'noCommits'));
        return;
      }
      
      analyzeSpinner.succeed(
        chalk.green(t(config.language, 'foundCommits', releaseData.commits.length))
      );

      // 2. Generate content via AI Agent
      const langName = LANGUAGES[config.language].nativeName;
      const langFlag = LANGUAGES[config.language].flag;
      console.log(chalk.cyan(`\n⌛ ${t(config.language, 'craftingContent')} ${langName} ${langFlag}\n`));
      
      const agent = new KronosAgent(config);
      const generateSpinner = ora(t(config.language, 'generating')).start();
      
      const content = await agent.generateAllContent(releaseData);
      
      generateSpinner.succeed(
        chalk.green(t(config.language, 'generated', content.size))
      );

      // 3. Save files
      const saveSpinner = ora(t(config.language, 'saving')).start();
      const writer = new FileWriter(config.outputDir);
      const savedFiles = await writer.saveAll(content, releaseData);
      saveSpinner.succeed(chalk.green(t(config.language, 'filesSaved')));

      // 4. Show results
      console.log(chalk.yellow('\n' + '='.repeat(50)));
      console.log(chalk.bold.green(t(config.language, 'success')));
      console.log(chalk.yellow('='.repeat(50) + '\n'));
      
      console.log(chalk.bold(`📦 ${t(config.language, 'generatedFiles')}\n`));
      savedFiles.forEach(file => {
        console.log(chalk.cyan(`  ✓ ${file}`));
      });
      
      console.log(chalk.gray(`\n${t(config.language, 'tipEdit')}`));
      console.log(chalk.gray(`📁 ${t(config.language, 'location')} ${config.outputDir}/release-${version}\n`));
      
    } catch (error: any) {
      console.error(chalk.red('\n❌ Error:'), error.message);
      process.exit(1);
    }
  });

/**
 * CONFIG command - Configure settings
 */
program
  .command('config')
  .description('Configure Kronos settings')
  .action(async () => {
    console.log(LOGO);
    
    const answers = await inquirer.prompt([
      {
        type: 'password',
        name: 'openaiApiKey',
        message: 'OpenAI API key:',
        mask: '*'
      },
      {
        type: 'list',
        name: 'language',
        message: 'Default output language:',
        choices: Object.entries(LANGUAGES).map(([code, info]) => ({
          name: `${info.flag}  ${info.nativeName} (${info.name})`,
          value: code
        }))
      },
      {
        type: 'checkbox',
        name: 'platforms',
        message: 'Select platforms to generate content for:',
        choices: [
          { name: '📝 Changelog', value: 'changelog', checked: true },
          { name: '🐦 Twitter/X Thread', value: 'twitter', checked: true },
          { name: '💼 LinkedIn Post', value: 'linkedin', checked: true },
          { name: '🚀 Product Hunt', value: 'producthunt', checked: true },
          { name: '🎥 YouTube Script', value: 'youtube' },
          { name: '📧 Email Newsletter', value: 'email' }
        ]
      },
      {
        type: 'list',
        name: 'tone',
        message: 'Content tone:',
        choices: [
          { name: '🎩 Professional', value: 'professional' },
          { name: '😎 Casual', value: 'casual' },
          { name: '🚀 Excited', value: 'excited' },
          { name: '🤓 Technical', value: 'technical' }
        ]
      }
    ]);

    await ConfigManager.save(answers);
    
    console.log(chalk.green(`\n${t(answers.language, 'configSaved')}`));
    console.log(chalk.gray(`📁 ${ConfigManager.getConfigPath()}\n`));
  });

/**
 * LANGUAGES command - Show supported languages
 */
program
  .command('languages')
  .description('List supported languages')
  .action(() => {
    console.log(LOGO);
    console.log(chalk.bold(`\n${t('en-US', 'supportedLangs')}\n`));
    
    Object.entries(LANGUAGES).forEach(([code, info]) => {
      console.log(`  ${info.flag}  ${chalk.cyan(code.padEnd(7))} ${info.nativeName} ${chalk.gray(`(${info.name})`)}`);
    });
    
    console.log();
  });

/**
 * INIT command - First-time setup
 */
program
  .command('init')
  .description('Initialize Kronos in your project')
  .action(async () => {
    console.log(LOGO);
    console.log(chalk.cyan(`\n${t('en-US', 'welcomeInit')}\n`));
    console.log(t('en-US', 'setupDesc') + '\n');
    
    if (!await ConfigManager.exists()) {
      console.log(chalk.yellow(t('en-US', 'firstConfig')));
      await program.commands.find(cmd => cmd.name() === 'config')?.parseAsync([], { from: 'user' });
    }
    
    console.log(chalk.green(`\n${t('en-US', 'readyMsg')}`));
    console.log(chalk.gray(`\n${t('en-US', 'nextSteps')}`));
    console.log(chalk.gray(`  ${t('en-US', 'step1')}`));
    console.log(chalk.gray(`  ${t('en-US', 'step2')}`));
    console.log(chalk.gray(`  ${t('en-US', 'step3')}\n`));
  });

program.parse();

