'use client'
import Balancer from 'react-wrap-balancer'

import { LinkComponent } from '@/components/shared/LinkComponent'

export default function PartnerLobby3() {
  return (
    <>
      <section className="bg-gradient-color relative flex min-h-[240px] flex-1 flex-col bg-cover bg-center lg:min-h-[620px]">
        <div className="flex-center z-10 flex h-full flex-1 flex-col text-center text-white">
          <h3 className="text-2xl font-medium">
            <>
              PoolTogether is a crypto-powered <br />
              savings protocol based on Premium Bonds
            </>
          </h3>
          <h3 className="text-6xl font-bold">PoolTogether</h3>
        </div>
      </section>
      <section className="content py-20">
        <div className="container max-w-screen-md">
          <h3 className="text-5xl font-bold">Who is PoolTogether</h3>
          <p className="">PoolTogether is a prize savings protocol, enabling you to win by saving.</p>
          <p className="">Every dollar you deposit gives you a chance to win prizes. The more you save, the higher your odds!</p>
          <p className="">
            PoolTogether is one of the first and most widely used DeFi (Decentralized Finance) applications and has been live for over three years.
            Since its inception, the protocol distributed over $5 million in prizes to depositors. The luckiest winner so far deposited $74 and won
            over $40,000.
          </p>
          <LinkComponent href="https://lobby3.org/">
            <a className="btn btn-light">Learn more about Lobby3</a>
          </LinkComponent>
          <hr className="my-8" />
          <h3 className="text-5xl font-bold">Partnership</h3>
          <p className="">
            Friends of Pooly exists because of PoolTogether and Pooly NFT campaign. Today we continue to support PoolTogether by defending DeFi
            through the power of community.
          </p>
        </div>
      </section>
    </>
  )
}
