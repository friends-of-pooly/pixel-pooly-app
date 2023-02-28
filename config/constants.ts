import { arbitrum, goerli, hardhat, mainnet, optimism, optimismGoerli, polygon, sepolia } from '@wagmi/chains'

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Application
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const SITE_CANONICAL = 'https://turbo.district.dev'
export const SITE_EMOJI = '⚡'
export const SITE_NAME = 'TurboETH'
export const SITE_TITLE = 'TurboETH - Web3 App Template'
export const SITE_DESCRIPTION = 'Web3 App Template built using Next.js, TailwindCSS and RainbowKit.'
export const SOCIAL_TWITTER = 'KamesGeraghty'
export const SOCIAL_GITHUB = 'turbo-eth/template-web3-app'

export const APP_CONFIG = {
  canonical: SITE_CANONICAL,
  emoji: SITE_EMOJI,
  title: SITE_TITLE,
  site_name: SITE_NAME,
  description: SITE_DESCRIPTION,
  previewImg: `${SITE_CANONICAL}/preview.png`,
  locale: 'en',
  twitter: SOCIAL_TWITTER,
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Design
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const THEME_INITIAL_COLOR = 'system'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Blockchain
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Override the default Goerli icon so it's not the same as the default Ethereum icon

// @ts-ignore
goerli.iconUrl = '/icons/NetworkEthereumTest.svg'
// @ts-ignore
sepolia.iconUrl = '/icons/NetworkEthereumTest.svg'

export const ETH_CHAINS_PROD = [optimism, optimismGoerli]
export const ETH_CHAINS_TEST = [optimism, goerli, optimismGoerli]
