// @ts-nocheck
'use client'
import classNames from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import Balancer from 'react-wrap-balancer'

import Card from '@/components/shared/card'
import { LinkComponent } from '@/components/shared/LinkComponent'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/config/design'
import useScroll from '@/hooks/use-scroll'

export default function Home() {
  const scrolled = useScroll(50)

  const classes = classNames('fixed inset-0 z-0 -mt-32 transition-all', {
    'opacity-30': scrolled,
  })
  return (
    <>
      <div className={classes}>
        <Image src="/img/dome-grid.svg" alt="Dome Grid" layout="fill" objectFit="cover" objectPosition="center" quality={100} priority />
      </div>
      <div className="relative flex flex-1">
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
              className="text-gradient-primary text-center text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[8rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <Balancer>A Crowd Sourcing Platform for Good</Balancer>
            </motion.h1>
            <motion.p className="mt-6 text-center text-gray-700 dark:text-gray-200 md:text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <Balancer className="text-2xl leading-8">
                Pixel Pooly is a community of artists, designers, and developers who are passionate about creating digital collectibles that make a
                difference.
              </Balancer>
            </motion.p>
          </motion.div>
        </div>
      </div>
      <section className="relative flex flex-1 flex-col lg:mt-32">
        <div className="container grid max-w-screen-xl grid-cols-12 gap-10 lg:mt-20">
          <div className="col-span-12 md:col-span-6">
            <Image className="w-full" src="https://via.placeholder.com/600x380" alt="Pixel Pooly" width={600} height={380} />
          </div>
          <div className="content col-span-12 flex flex-col justify-center md:col-span-6">
            <div className="my-3">
              <h3 className="mb-2 text-4xl font-bold">🛡 Defending DeFi</h3>
              <p className="text-neutral-600 dark:text-neutral-100">
                Sed estibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.
              </p>
            </div>
            <div className="my-3">
              <h3 className="mb-2 text-4xl font-bold">🌐 Securing an Open Web3</h3>
              <p className="text-neutral-600 dark:text-neutral-100">
                Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.
              </p>
            </div>
            <div className="my-3">
              <h3 className="mb-2 text-4xl font-bold">🤗 Strengthening Community</h3>
              <p className="text-neutral-600 dark:text-neutral-100">
                Sed vestibulum mi eget ligula accumsan, quis rhoncus est mattis. Vestibulum ac felis eget diam maximus sagittis.
              </p>
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
    </>
  )
}
