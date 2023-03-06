// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  previewImg: string
  localeDefault: string
  companyName: string
  links: {
    twitter: string
    github: string
    discord: string
  }
}

export const SITE_CANONICAL = 'https://poolypals.com'

export const siteConfig: SiteConfig = {
  name: 'Pixel Pooly',
  title: 'Pixel Pooly - Defending DeFi',
  emoji: '🪶',
  description: 'A Crowd Sourcing Platform for Good. Securing an Open Web3 through the power of Community',
  companyName: 'Friends of Pooly, Inc',
  previewImg: `${SITE_CANONICAL}/preview.png`,
  localeDefault: 'en',
  links: {
    twitter: 'https://twitter.com/FriendsOfPooly',
    github: 'https://github.com/friends-of-pooly',
    discord: 'https://discord.gg/6gAKsTDje8',
  },
}
