/**
 * KRONOS - Complete Multi-Language Support
 * 7 languages: English (US/UK), French, Chinese, Russian, German, Spanish
 * Includes UI messages AND AI content generation instructions
 */

import { SupportedLanguage } from '../types/index.js';

export const LANGUAGES: Record<SupportedLanguage, { name: string; flag: string; nativeName: string }> = {
  'en-US': { name: 'English (US)', flag: '🇺🇸', nativeName: 'English (US)' },
  'en-GB': { name: 'English (UK)', flag: '🇬🇧', nativeName: 'English (UK)' },
  'fr':    { name: 'French',       flag: '🇫🇷', nativeName: 'Français' },
  'zh':    { name: 'Chinese',      flag: '🇨🇳', nativeName: '中文' },
  'ru':    { name: 'Russian',      flag: '🇷🇺', nativeName: 'Русский' },
  'de':    { name: 'German',       flag: '🇩🇪', nativeName: 'Deutsch' },
  'es':    { name: 'Spanish',      flag: '🇪🇸', nativeName: 'Español' }
};

/**
 * UI messages for each language
 */
export const UI_MESSAGES: Record<SupportedLanguage, Record<string, string>> = {
  'en-US': {
    welcome: '⌛ KRONOS - Time to ship',
    analyzing: 'Analyzing commits...',
    generating: 'Generating content...',
    saving: 'Saving files...',
    success: '✨ Release content generated successfully!',
    error: '❌ An error occurred',
    configMissing: 'OpenAI API key not found. Run: kronos config',
    noCommits: 'No commits found since last release',
    selectLanguage: 'Select output language:',
    selectPlatforms: 'Select platforms to generate content for:',
    selectTone: 'Select content tone:',
    enterApiKey: 'OpenAI API key:',
    enterVersion: 'What version are you shipping?',
    processing: 'Processing',
    foundCommits: 'Found %d commits',
    generated: 'Generated %d pieces of content',
    filesSaved: 'Files saved',
    generatedFiles: 'Generated files:',
    craftingContent: 'Kronos is crafting content in',
    tipEdit: '💡 Tip: Edit the files and share on your platforms!',
    location: 'Location:',
    configSaved: '✅ Configuration saved!',
    welcomeInit: '🚀 Welcome to Kronos!',
    setupDesc: 'Let\'s set up your project for autonomous release content generation.',
    firstConfig: '📝 First, let\'s configure Kronos:',
    readyMsg: '✅ Kronos is ready!',
    nextSteps: 'Next steps:',
    step1: '1. Commit your changes using conventional commits (feat:, fix:, etc.)',
    step2: '2. Run: kronos ship --release v1.0.0',
    step3: '3. Share the generated content on your platforms!',
    supportedLangs: '🌍 Supported Languages:'
  },
  'en-GB': {
    welcome: '⌛ KRONOS - Time to ship',
    analyzing: 'Analysing commits...',
    generating: 'Generating content...',
    saving: 'Saving files...',
    success: '✨ Release content generated successfully!',
    error: '❌ An error has occurred',
    configMissing: 'OpenAI API key not found. Run: kronos config',
    noCommits: 'No commits found since the last release',
    selectLanguage: 'Select output language:',
    selectPlatforms: 'Select platforms to generate content for:',
    selectTone: 'Select content tone:',
    enterApiKey: 'OpenAI API key:',
    enterVersion: 'What version are you shipping?',
    processing: 'Processing',
    foundCommits: 'Found %d commits',
    generated: 'Generated %d pieces of content',
    filesSaved: 'Files saved',
    generatedFiles: 'Generated files:',
    craftingContent: 'Kronos is crafting content in',
    tipEdit: '💡 Tip: Edit the files and share them on your platforms!',
    location: 'Location:',
    configSaved: '✅ Configuration saved!',
    welcomeInit: '🚀 Welcome to Kronos!',
    setupDesc: 'Let\'s set up your project for autonomous release content generation.',
    firstConfig: '📝 First, let\'s configure Kronos:',
    readyMsg: '✅ Kronos is ready!',
    nextSteps: 'Next steps:',
    step1: '1. Commit your changes using conventional commits (feat:, fix:, etc.)',
    step2: '2. Run: kronos ship --release v1.0.0',
    step3: '3. Share the generated content on your platforms!',
    supportedLangs: '🌍 Supported Languages:'
  },
  'fr': {
    welcome: '⌛ KRONOS - Messager de votre code',
    analyzing: 'Analyse des commits...',
    generating: 'Génération du contenu...',
    saving: 'Enregistrement des fichiers...',
    success: '✨ Contenu de version généré avec succès !',
    error: '❌ Une erreur est survenue',
    configMissing: 'Clé API OpenAI introuvable. Exécutez : kronos config',
    noCommits: 'Aucun commit trouvé depuis la dernière version',
    selectLanguage: 'Sélectionnez la langue de sortie :',
    selectPlatforms: 'Sélectionnez les plateformes pour générer du contenu :',
    selectTone: 'Sélectionnez le ton du contenu :',
    enterApiKey: 'Clé API OpenAI :',
    enterVersion: 'Quelle version publiez-vous ?',
    processing: 'Traitement',
    foundCommits: '%d commits trouvés',
    generated: '%d contenus générés',
    filesSaved: 'Fichiers enregistrés',
    generatedFiles: 'Fichiers générés :',
    craftingContent: 'Hermès crée du contenu en',
    tipEdit: '💡 Astuce : Modifiez les fichiers et partagez-les sur vos plateformes !',
    location: 'Emplacement :',
    configSaved: '✅ Configuration enregistrée !',
    welcomeInit: '🚀 Bienvenue dans Hermès !',
    setupDesc: 'Configurons votre projet pour la génération automatique de contenu.',
    firstConfig: '📝 Configurons d\'abord Hermès :',
    readyMsg: '✅ Hermès est prêt !',
    nextSteps: 'Prochaines étapes :',
    step1: '1. Committez vos modifications avec des commits conventionnels (feat:, fix:, etc.)',
    step2: '2. Exécutez : kronos ship --release v1.0.0',
    step3: '3. Partagez le contenu généré sur vos plateformes !',
    supportedLangs: '🌍 Langues prises en charge :'
  },
  'zh': {
    welcome: '⌛ KRONOS - 您的代码信使',
    analyzing: '正在分析提交...',
    generating: '正在生成内容...',
    saving: '正在保存文件...',
    success: '✨ 发布内容生成成功！',
    error: '❌ 发生错误',
    configMissing: '未找到 OpenAI API 密钥。运行：kronos config',
    noCommits: '自上次发布以来未找到提交',
    selectLanguage: '选择输出语言：',
    selectPlatforms: '选择要生成内容的平台：',
    selectTone: '选择内容语气：',
    enterApiKey: 'OpenAI API 密钥：',
    enterVersion: '您要发布哪个版本？',
    processing: '处理中',
    foundCommits: '找到 %d 个提交',
    generated: '已生成 %d 条内容',
    filesSaved: '文件已保存',
    generatedFiles: '生成的文件：',
    craftingContent: 'Kronos 正在生成内容，语言：',
    tipEdit: '💡 提示：编辑文件并在您的平台上分享！',
    location: '位置：',
    configSaved: '✅ 配置已保存！',
    welcomeInit: '🚀 欢迎使用 Kronos！',
    setupDesc: '让我们设置您的项目以自动生成发布内容。',
    firstConfig: '📝 首先，让我们配置 Kronos：',
    readyMsg: '✅ Kronos 已准备就绪！',
    nextSteps: '下一步：',
    step1: '1. 使用约定式提交格式提交更改（feat:、fix: 等）',
    step2: '2. 运行：kronos ship --release v1.0.0',
    step3: '3. 在您的平台上分享生成的内容！',
    supportedLangs: '🌍 支持的语言：'
  },
  'ru': {
    welcome: '⌛ KRONOS - Вестник вашего кода',
    analyzing: 'Анализ коммитов...',
    generating: 'Генерация контента...',
    saving: 'Сохранение файлов...',
    success: '✨ Контент релиза успешно создан!',
    error: '❌ Произошла ошибка',
    configMissing: 'API-ключ OpenAI не найден. Запустите: kronos config',
    noCommits: 'Коммиты с последнего релиза не найдены',
    selectLanguage: 'Выберите язык вывода:',
    selectPlatforms: 'Выберите платформы для генерации контента:',
    selectTone: 'Выберите тон контента:',
    enterApiKey: 'API-ключ OpenAI:',
    enterVersion: 'Какую версию вы публикуете?',
    processing: 'Обработка',
    foundCommits: 'Найдено %d коммитов',
    generated: 'Создано %d единиц контента',
    filesSaved: 'Файлы сохранены',
    generatedFiles: 'Созданные файлы:',
    craftingContent: 'Kronos создаёт контент на языке:',
    tipEdit: '💡 Совет: Отредактируйте файлы и поделитесь ими на ваших платформах!',
    location: 'Расположение:',
    configSaved: '✅ Конфигурация сохранена!',
    welcomeInit: '🚀 Добро пожаловать в Kronos!',
    setupDesc: 'Настроим ваш проект для автоматической генерации контента релизов.',
    firstConfig: '📝 Сначала настроим Kronos:',
    readyMsg: '✅ Kronos готов!',
    nextSteps: 'Следующие шаги:',
    step1: '1. Делайте коммиты в формате conventional commits (feat:, fix: и т.д.)',
    step2: '2. Запустите: kronos ship --release v1.0.0',
    step3: '3. Поделитесь созданным контентом на ваших платформах!',
    supportedLangs: '🌍 Поддерживаемые языки:'
  },
  'de': {
    welcome: '⌛ KRONOS - Bote deines Codes',
    analyzing: 'Commits werden analysiert...',
    generating: 'Inhalt wird generiert...',
    saving: 'Dateien werden gespeichert...',
    success: '✨ Release-Inhalt erfolgreich generiert!',
    error: '❌ Ein Fehler ist aufgetreten',
    configMissing: 'OpenAI API-Schlüssel nicht gefunden. Ausführen: kronos config',
    noCommits: 'Keine Commits seit dem letzten Release gefunden',
    selectLanguage: 'Ausgabesprache auswählen:',
    selectPlatforms: 'Plattformen für Inhaltserstellung auswählen:',
    selectTone: 'Tonfall des Inhalts auswählen:',
    enterApiKey: 'OpenAI API-Schlüssel:',
    enterVersion: 'Welche Version veröffentlichen Sie?',
    processing: 'Verarbeitung',
    foundCommits: '%d Commits gefunden',
    generated: '%d Inhalte generiert',
    filesSaved: 'Dateien gespeichert',
    generatedFiles: 'Generierte Dateien:',
    craftingContent: 'Kronos erstellt Inhalte auf',
    tipEdit: '💡 Tipp: Bearbeiten Sie die Dateien und teilen Sie sie auf Ihren Plattformen!',
    location: 'Speicherort:',
    configSaved: '✅ Konfiguration gespeichert!',
    welcomeInit: '🚀 Willkommen bei Kronos!',
    setupDesc: 'Lassen Sie uns Ihr Projekt für die autonome Release-Inhaltsgenerierung einrichten.',
    firstConfig: '📝 Konfigurieren wir zunächst Kronos:',
    readyMsg: '✅ Kronos ist bereit!',
    nextSteps: 'Nächste Schritte:',
    step1: '1. Committen Sie Ihre Änderungen im Conventional-Commits-Format (feat:, fix:, usw.)',
    step2: '2. Ausführen: kronos ship --release v1.0.0',
    step3: '3. Teilen Sie den generierten Inhalt auf Ihren Plattformen!',
    supportedLangs: '🌍 Unterstützte Sprachen:'
  },
  'es': {
    welcome: '⌛ KRONOS - Mensajero de tu código',
    analyzing: 'Analizando commits...',
    generating: 'Generando contenido...',
    saving: 'Guardando archivos...',
    success: '✨ ¡Contenido de lanzamiento generado con éxito!',
    error: '❌ Ocurrió un error',
    configMissing: 'Clave API de OpenAI no encontrada. Ejecuta: kronos config',
    noCommits: 'No se encontraron commits desde el último lanzamiento',
    selectLanguage: 'Selecciona el idioma de salida:',
    selectPlatforms: 'Selecciona las plataformas para generar contenido:',
    selectTone: 'Selecciona el tono del contenido:',
    enterApiKey: 'Clave API de OpenAI:',
    enterVersion: '¿Qué versión estás lanzando?',
    processing: 'Procesando',
    foundCommits: 'Se encontraron %d commits',
    generated: 'Se generaron %d piezas de contenido',
    filesSaved: 'Archivos guardados',
    generatedFiles: 'Archivos generados:',
    craftingContent: 'Kronos está creando contenido en',
    tipEdit: '💡 Consejo: ¡Edita los archivos y compártelos en tus plataformas!',
    location: 'Ubicación:',
    configSaved: '✅ ¡Configuración guardada!',
    welcomeInit: '🚀 ¡Bienvenido a Kronos!',
    setupDesc: 'Configuremos tu proyecto para la generación autónoma de contenido de lanzamiento.',
    firstConfig: '📝 Primero, configuremos Kronos:',
    readyMsg: '✅ ¡Kronos está listo!',
    nextSteps: 'Próximos pasos:',
    step1: '1. Realiza commits usando commits convencionales (feat:, fix:, etc.)',
    step2: '2. Ejecuta: kronos ship --release v1.0.0',
    step3: '3. ¡Comparte el contenido generado en tus plataformas!',
    supportedLangs: '🌍 Idiomas soportados:'
  }
};

/**
 * Full language names for AI prompts
 * Used to tell OpenAI exactly which language to write in
 */
export const AI_LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  'en-US': 'American English (use US spelling: "color", "optimize", "behavior")',
  'en-GB': 'British English (use UK spelling: "colour", "optimise", "behaviour")',
  'fr':    'French (français)',
  'zh':    'Simplified Chinese (简体中文)',
  'ru':    'Russian (русский язык)',
  'de':    'German (Deutsch)',
  'es':    'Spanish (español)'
};

/**
 * Get a localized UI message
 */
export function t(lang: SupportedLanguage, key: string, ...args: (string | number)[]): string {
  let message = UI_MESSAGES[lang]?.[key] || UI_MESSAGES['en-US'][key] || key;
  
  // Replace %d and %s placeholders
  args.forEach(arg => {
    message = message.replace(/%[ds]/, String(arg));
  });
  
  return message;
}

/**
 * Get the native language name
 */
export function getLanguageName(lang: SupportedLanguage): string {
  return LANGUAGES[lang]?.nativeName || lang;
}

/**
 * Get the AI prompt instruction for the language
 */
export function getAILanguageInstruction(lang: SupportedLanguage): string {
  return AI_LANGUAGE_NAMES[lang] || AI_LANGUAGE_NAMES['en-US'];
}
