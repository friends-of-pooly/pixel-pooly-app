// @ts-nocheck
'use client'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { LinkComponent } from '@/components/shared/LinkComponent'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/config/design'
import useScroll from '@/hooks/use-scroll'

export default function Home() {
  const scrolled = useScroll(50)

  return (
    <>
      <div className="relative flex flex-1 pt-12 lg:pt-32">
        <div className="flex-center flex h-full flex-1 flex-col items-center justify-center text-center">
          <motion.div
            className="max-w-5xl px-5 xl:px-0"
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}>
            {/* <img src="/icon-gradient.svg" alt="Turbo ETH" className="mx-auto mb-10 h-20 w-20 rounded-lg" /> */}
            <motion.h1
              className="text-gradient-primary text-center text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[8rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <Balancer>Raising Funds for DeFi Lobbyists in Washington D.C.</Balancer>
              {/* <Balancer>A Crowd Sourcing Platform for Good</Balancer> */}
            </motion.h1>
            <motion.p className="mt-6 text-center text-gray-700 dark:text-gray-200 md:text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <Balancer className="text-2xl leading-8">
                In Season 1 of Pixel Pooly, 80% of the contributions will be streamed directly to Lobby3.
              </Balancer>
            </motion.p>
            <div className="mt-8 flex items-center justify-center gap-3 ">
              <LinkComponent className="flex items-center" href="/dashboard">
                <button className="btn btn-purple btn-pill bg-gradient-color w-full py-6">Pixel Pooly Builder</button>
              </LinkComponent>
              <LinkComponent className="btn-emerald btn-pill btn font-bold " href="/poolyverse/season-1">
                Partnership with Lobby3
              </LinkComponent>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <section className=" relative my-10 flex flex-1 flex-col lg:my-32">
        <div className="container grid max-w-screen-xl grid-cols-12 lg:mt-20 lg:gap-10">
          <div className="flex-center col-span-12 flex text-center md:col-span-6 lg:px-10">
            <img
              className=" mx-auto w-3/4 rounded-lg border-2 shadow-xl lg:w-full"
              src="/story/washington-shield-stand.png"
              alt="Pixel Pooly"
              // width={600}
              // height={600}
            />
          </div>
          <div className="content col-span-12 flex flex-col justify-center md:col-span-6 lg:pl-12">
            <div className="my-3">
              <h3 className="mb-2 text-4xl font-bold">🛡 Defending DeFi</h3>
              <p className="text-neutral-600 dark:text-neutral-100">
                DeFi is critical to the success of the Open Web3, and are working to promote its adoption and use. By supporting DeFi projects and
                advocating for its importance, Friends of Pooly is helping to build a more resilient and decentralized financial system.
              </p>
            </div>
            <div className="my-3">
              <h3 className="mb-2 text-4xl font-bold">🔐 Securing an Open Web3</h3>
              <p className="text-neutral-600 dark:text-neutral-100">
                Friends of Pooly believes that an Open Web3 is essential to the future of the internet, and is working to secure this vision. We are
                committed to promoting accessibility, neutrality, digital ownership, and privacy as core values of the Open Web3.
              </p>
            </div>
            <div className="my-3">
              <h3 className="mb-2 text-4xl font-bold">🌐 Network State Infrastructure</h3>
              <p className="text-neutral-600 dark:text-neutral-100">
                Education is essential to promoting the adoption and use of DeFi and the Open Web3. By advocating for these values and educating the
                broader public about their importance, Friends of Pooly is helping to build a more informed and engaged community.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="relative flex flex-1 flex-col lg:mt-32">
        <div className="container grid max-w-screen-lg grid-cols-12 gap-10 lg:mt-20 lg:gap-y-32">
          <div className="col-span-12 md:col-span-6">
            <img
              className="w-full rounded-lg border-4 shadow-xl"
              src="/story/pixel-waashington-computer.png"
              alt="Defending DeFi"
              // width={600}
              // height={600}
            />
          </div>
          <div className="col-span-12 flex flex-col justify-center md:col-span-6">
            <div className="my-3">
              <h3 className="mb-2 text-5xl font-semibold">Defending DeFi</h3>
              <h3 className="mb-2 text-2xl font-normal">Uniting the Web3 Community</h3>
              <p className="text-lg leading-8">
                Nulla viverra faucibus hendrerit. Proin vel elit imperdiet, venenatis elit sed, tincidunt magna. Etiam sed dapibus risus, vel laoreet
                tortor. Pellentesque lobortis auctor eros, id tristique lectus vestibulum tempor.{' '}
              </p>
              <LinkComponent className="text-gradient-primary mt-4 block text-lg font-bold" href="/guide">
                Learn More
              </LinkComponent>
            </div>
          </div>
          <div className="lg col-span-12 md:col-span-6 lg:order-4">
            <img
              className="w-full max-w-[100%] rounded-lg border-4 shadow-xl"
              src="/story/pixel-washington-night.png"
              alt="Washington D.C. Night Connections"
              // width={600}
              // height={600}
            />
          </div>
          <div className="col-span-12 flex flex-col justify-center md:col-span-6 lg:order-3">
            <div className="my-3">
              <h3 className="mb-2 text-5xl font-semibold">Open Web3</h3>
              <h3 className="mb-2 text-2xl font-normal">Advocating for a Neutral Internet</h3>
              <p className="text-lg leading-8">
                Nulla viverra faucibus hendrerit. Proin vel elit imperdiet, venenatis elit sed, tincidunt magna. Etiam sed dapibus risus, vel laoreet
                tortor. Pellentesque lobortis auctor eros, id tristique lectus vestibulum tempor.{' '}
              </p>
              <LinkComponent className="text-gradient-primary mt-4 block text-lg font-bold" href="/guide">
                Learn More
              </LinkComponent>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:order-5">
            <img
              className="w-full rounded-lg border-4 shadow-xl"
              src="/story/pixel-wallet-info.png"
              alt="Defending DeFi"
              // width={600}
              // height={600}
            />
          </div>
          <div className="col-span-12 flex flex-col justify-center md:col-span-6 lg:order-6">
            <div className="my-3">
              <h3 className="mb-2 text-5xl font-semibold">Open Network State</h3>
              <h3 className="mb-2 text-2xl font-normal">Building Grassroots Communities</h3>
              <p className="text-lg leading-8">
                The Open Web3 is a vision for a decentralized internet, where every individual has equitable access to digital computations,
                currencies, and networks. Accessibility is key to this vision, and Friends of Pooly believes that accessibility should be prioritized
                above all else. This means ensuring that everyone, regardless of their background or resources, has the ability to participate in the
                Ethereum network state.
              </p>
              <LinkComponent className="text-gradient-primary mt-4 block text-lg font-bold" href="/guide">
                Learn More
              </LinkComponent>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-1 flex-col lg:mt-32">
        <div className="flex-center flex h-full flex-1 flex-col items-center justify-center text-center">
          <motion.div
            className="max-w-5xl px-5 xl:px-0"
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}>
            <motion.h3
              className="text-gradient-primary text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <Balancer>Join The Community</Balancer>
            </motion.h3>
            <motion.p className="mt-6 text-center text-gray-500 dark:text-gray-200 md:text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <Balancer className="text-2xl leading-7">
                Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.
              </Balancer>
            </motion.p>
            <motion.div
              className="flex-center mx-auto mt-10 flex flex-col items-center justify-center space-x-5"
              variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <LinkComponent
                className="transition-color flex max-w-fit items-center justify-center space-x-2 rounded-full bg-purple-600 px-7 py-5 text-3xl text-white shadow-md"
                href="/dashboard">
                <span className="font-bold">Mint a Pixel Pooly Today</span>
              </LinkComponent>
              <p className="mt-10 text-sm">In Season 1 Lobby3 is streamed 80% of the contributions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="relative flex flex-1 flex-col bg-washingtonSteps bg-cover bg-center lg:mt-32 lg:min-h-[620px]"></section> */}
    </>
  )
}
