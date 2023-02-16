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
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
  },
  {
    title: 'Lobby3',
    href: '/partner/lobby3',
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
  },
]

const quests: { title: string; href: string; description: string }[] = [
  {
    title: 'Feature',
    href: '/feature/dynamic-nft',
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
  },
  {
    title: 'Contribute',
    href: '/quest/test',
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
  },
  {
    title: 'Quest 3',
    href: '/quest/test-kit',
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
  },
  {
    title: 'Quest 4',
    href: '/quest/test',
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
  },
  {
    title: 'Quest 5',
    href: '/quest/test',
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
  },
  {
    title: 'Quest 6',
    href: '/quest/test',
    description: 'Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.',
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
                  <LinkComponent
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-500 to-purple-700 p-6 no-underline outline-none focus:shadow-md"
                    href="/poolyverse">
                    <div className="mt-4 mb-2 text-lg font-medium text-white">Pooly</div>
                    <p className="text-sm leading-tight text-white/90">
                      The most adorable NFT on the internet with a purpose is on a mission to defend DeFi and secure an Open Web3.
                    </p>
                  </LinkComponent>
                </NavigationMenuLink>
              </li>
              <ListItem href="/poolyverse" title="Defending DeFi">
                <p className="">Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.</p>
              </ListItem>
              <ListItem href="/poolyverse" title="Securing an Open Web3">
                <p className="">Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.</p>
              </ListItem>
              <ListItem href="/poolyverse" title="A Bigger Purpose">
                <p className="">Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
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
        </NavigationMenuItem>
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
