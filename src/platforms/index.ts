export { TwitterGenerator } from './twitter';
export { LinkedInGenerator } from './linkedin';
export { YouTubeGenerator } from './youtube';
export { EmailGenerator } from './email';
export { RedditGenerator } from './reddit';
export { WhatsAppGenerator } from './whatsapp';
export { TelegramGenerator } from './telegram';
export { TikTokGenerator } from './tiktok';
export { TwitchGenerator } from './twitch';
export { InstagramGenerator } from './instagram';
export { DiscordGenerator } from './discord';

import { TwitterGenerator } from './twitter';
import { LinkedInGenerator } from './linkedin';
import { YouTubeGenerator } from './youtube';
import { EmailGenerator } from './email';
import { RedditGenerator } from './reddit';
import { WhatsAppGenerator } from './whatsapp';
import { TelegramGenerator } from './telegram';
import { TikTokGenerator } from './tiktok';
import { TwitchGenerator } from './twitch';
import { InstagramGenerator } from './instagram';
import { DiscordGenerator } from './discord';

export const platforms = {
  twitter: new TwitterGenerator(),
  linkedin: new LinkedInGenerator(),
  youtube: new YouTubeGenerator(),
  email: new EmailGenerator(),
  reddit: new RedditGenerator(),
  whatsapp: new WhatsAppGenerator(),
  telegram: new TelegramGenerator(),
  tiktok: new TikTokGenerator(),
  twitch: new TwitchGenerator(),
  instagram: new InstagramGenerator(),
  discord: new DiscordGenerator(),
};

export type PlatformName = keyof typeof platforms;
