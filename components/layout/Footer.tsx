import React from 'react'

import classNames from 'clsx'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'

import { SITE_TITLE, SOCIAL_GITHUB, SOCIAL_TWITTER } from '@/config/constants'
import { siteConfig } from '@/config/site'

import { LinkComponent } from '../shared/LinkComponent'

interface Props {
  className?: string
}

export function Footer(props: Props) {
  const classes = classNames(props.className, 'Footer', 'px-4 py-6 flex flex-col justify-center items-center')

  return (
    <footer className={classes}>
      <h3>{siteConfig.title}</h3>
      <a className="link my-2 text-xs" target={'_blank'} href="https://github.com/turbo-eth/template-web3-app" rel="noreferrer">
        Built using ⚡️TurboETH
      </a>
      <div className="mt-2 flex items-center">
        <LinkComponent href={`https://github.com/${siteConfig.links.discord}`}>
          <FaDiscord />
        </LinkComponent>
        <div className="mx-2" />
        <LinkComponent href={`https://twitter.com/${siteConfig.links.twitter}`}>
          <FaTwitter />
        </LinkComponent>
      </div>
    </footer>
  )
}
