'use client'
import classNames from 'clsx'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { LinkComponent } from '@/components/shared/LinkComponent'
import WalletConnect from '@/components/web3/WalletConnect'
export default function RootLayout({ children }: any) {
  const classes = classNames('App', 'bg-gradient-dark min-h-[100vh] flex flex-col relative pb-20')
  return (
    <>
      <div className={classes}>
        <Header />
        <main className="my-32 flex flex-1 flex-col md:px-0 lg:my-20 lg:py-0">{children}</main>
        <Footer />
      </div>
      <section className="bg-gradient-color fixed inset-x-0 bottom-0 z-50 flex justify-center p-2 px-6">
        <span className="text-center">
          <LinkComponent href="https://friendsofpooly.com" className="font-bold">
            Friends of Pooly
          </LinkComponent>{' '}
          and{' '}
          <LinkComponent href="https://www.lobby3.io" className="font-bold">
            Lobby3
          </LinkComponent>{' '}
          are teaming up to <span className="font-bold">#DefendDeFi</span> and secure an Open Web3{' '}
        </span>
        <span className="mx-3">🛡</span>
        <LinkComponent className="font-bold" href="/poolyverse/season-1">
          Learn More
        </LinkComponent>
      </section>
    </>
  )
}
