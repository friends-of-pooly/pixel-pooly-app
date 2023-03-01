import React from 'react'

import classNames from 'clsx'
import Image from 'next/image'

import { siteConfig } from '@/config/site'
import useScroll from '@/hooks/use-scroll'

import { NavigationMenuGeneral } from './navigation-menu-general'
import UserDropdown from './user-dropdown'
import { BranchColorMode } from '../shared/branch/BranchColorMode'
import { BranchIsWalletConnected } from '../shared/branch/BranchIsWalletConnected'
import { LinkComponent } from '../shared/LinkComponent'
import ResponsiveMobileAndDesktop from '../shared/responsive/ResponsiveMobileAndDesktop'
import { ThemeToggle } from '../shared/theme-toggle'
import WalletConnect from '../web3/WalletConnect'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const scrolled = useScroll(50)
  const classes = classNames(
    props.className,
    'Header',
    'fixed top-0 w-full',
    'px-6 lg:px-10 py-3 mb-8 flex items-center',
    {
      'border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:bg-black/50 dark:border-gray-800': scrolled,
    },
    'z-30 transition-all'
  )
  return (
    <header className={classes}>
      <ResponsiveMobileAndDesktop>
        <LinkComponent href="/" className="flex min-w-[32px] flex-1 items-center">
          <BranchColorMode>
            <Image alt="Logo" src="/logo-dark.png" width={32} height={32} />
            <Image alt="Logo" src="/logo-white.png" width={32} height={32} />
          </BranchColorMode>
        </LinkComponent>
        <LinkComponent className="flex items-center" href="/">
          <BranchColorMode>
            <Image alt="Logo" src="/logo-dark.png" width={32} height={32} />
            <Image alt="Logo" src="/logo-white.png" width={32} height={32} />
          </BranchColorMode>
          <h1 className="text-gradient-sand ml-2 text-2xl font-bold">{siteConfig.name}</h1>
        </LinkComponent>
      </ResponsiveMobileAndDesktop>
      <div className="flex-center flex-1 px-10">
        <NavigationMenuGeneral />
      </div>

      <div className="flex items-center gap-4">
        <ResponsiveMobileAndDesktop>
          <></>
          <LinkComponent className="flex items-center" href="/collection">
            <button className="btn btn-purple btn-pill btn-sm bg-gradient-primary w-full py-6 text-sm">Collection</button>
          </LinkComponent>
        </ResponsiveMobileAndDesktop>
        <LinkComponent className="flex items-center" href="/dashboard">
          <button className="btn btn-purple btn-pill bg-gradient-color w-full py-6 text-sm">App</button>
        </LinkComponent>
        <WalletConnect />
        <ThemeToggle />
      </div>
    </header>
  )
}
