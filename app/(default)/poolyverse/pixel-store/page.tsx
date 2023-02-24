'use client'

import Image from 'next/image'

export default function Guide() {
  return (
    <>
      <section className="relative flex flex-1 flex-col bg-pixel-store bg-cover bg-center lg:min-h-[620px]">
        <div className=" absolute inset-0 z-0 bg-black opacity-50 blur" />
        <div className="flex-center z-10 flex h-full flex-1 flex-col text-white">
          <h3 className="text-2xl font-medium">Sell DeFiDefender Pixel Art</h3>
          <h3 className="text-6xl font-bold">Pixel Store</h3>
        </div>
      </section>
      <section className="content">
        <div className="container max-w-screen-md">
          <hr className="my-8" />
        </div>
      </section>
    </>
  )
}
