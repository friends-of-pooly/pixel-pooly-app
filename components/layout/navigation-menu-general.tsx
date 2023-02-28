'use client'

import * as React from 'react'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

import { LinkComponent } from '../shared/LinkComponent'

const partners: { title: string; href: string; description: string }[] = [
  {
    title: 'PoolTogether',
    href: '/partner/pooltogether',
    description: 'PoolTogether is a crypto-powered savings protocol based on Premium Bonds. Save money and have a chance to win every day.',
  },
  {
    title: 'Lobby3',
    href: '/partner/lobby3',
    description:
      'Lobby3 is a new Web3 community designed to give the people a stronger voice in Washington, DC — so we can build a more prosperous economic future together.',
  },
]

export function NavigationMenuGeneral() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Poolyverse</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-500 to-purple-700 p-6 no-underline outline-none focus:shadow-md">
                    <div className="mt-4 mb-2 text-lg font-medium text-white">Pooly Pals Universe</div>
                    <p className="text-sm leading-tight text-white/90">
                      Friends of Pooly is on a mission to defend decentralized finance; and to secure an Open Web3 through the power of Community.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/poolyverse/constitution" title="Open Web3 Constitution">
                <p className="">
                  We the People of the Web3 Network State stand firmly for an open, secure and neutral Web3; protecting foundational digital rights
                  like ownership, privacy and accessibility.
                </p>
              </ListItem>
              <ListItem href="/poolyverse/defender-sdk" title="Defender SDK">
                <p className="">Friends of Pooly is developing a DeFiDefender SDK - powering Web3 native grassroots organizing.</p>
              </ListItem>
              <ListItem href="/poolyverse/pixel-store" title="Pixel Stores">
                <p className="">
                  As the Pooly Pal family grows, we will be opening up Pixel Stores for Pooly Pals to sell their NFTs and earn a commission.
                </p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Friends</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
              {partners.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/guide" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Guide</NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
