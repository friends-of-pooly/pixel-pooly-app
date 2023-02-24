'use client'

import Image from 'next/image'

export default function Guide() {
  return (
    <>
      <section className="relative flex flex-1 flex-col bg-defender-sdk bg-cover bg-center lg:min-h-[620px]">
        <div className=" absolute inset-0 z-0 bg-black opacity-50 blur" />
        <div className="flex-center z-10 flex h-full flex-1 flex-col text-white">
          <h3 className="text-2xl font-medium">Open Source Protocol for Grassroots Organizing</h3>
          <h3 className="text-6xl font-bold">Defender SDK</h3>
        </div>
      </section>
      <section className="content">
        {/* <div className="relative"> */}
        {/* <Image src="/story/washington-night.png" width={1312} height={512} className="absolute w-full" /> */}
        {/* </div> */}
        <div className="container max-w-screen-md">
          <hr className="my-8" />
          <p className="">
            In today's digital age, where decentralized applications and digital assets hold more value than ever before, the need for effective
            community organization and management is essential. This is where the DefenderSDK comes in. Created by the Friends of Pooly, the
            DefenderSDK is a software development kit designed to empower grassroots coalitions in the Web3 ecosystem.
          </p>

          <ul className="list my-6 list-disc pl-6">
            <li className="">Easy integration into the Pooly Pals Digital Collectible Universe</li>
            <li className="">Decentralized identifiers and verifiable credentials for secure communication and trust building</li>
            <li className="">Trustless transactions and secure communication through peer-to-peer cryptography</li>
            <li className="">Simplified smart contract development and deployment through the DefenderSDK</li>
            <li className="">Empowerment of grassroots coalitions in the Web3 ecosystem</li>
            <li className="">Built-in incentives for digital collectibles, community initiatives, and fund distribution</li>
          </ul>

          <p className="">
            One of the key benefits of the DefenderSDK is its ability to easily integrate into the Pooly Pals Digital Collectible Universe. This means
            developers can create and manage digital collectibles, distribute funds, and launch community initiatives with built-in incentives.
            Additionally, the DefenderSDK includes decentralized identifiers and verifiable credentials, which allow communities to build trust and
            establish secure communication between members. By leveraging a web of trust and peer-to-peer cryptography, the DefenderSDK enables
            trustless transactions and secure communication between community members.
          </p>

          <p className="">
            Moreover, the DefenderSDK supports Pooly Pals smart contract factories and simplifies contract development. This means that developers can
            easily create and deploy smart contracts without worrying about complex coding or security issues. With the DefenderSDK, developers can
            focus on building a strong community and achieving their goals, rather than spending time on technical details.
          </p>

          <p className="">
            Overall, the DefenderSDK is a powerful tool that enables communities to collaborate, innovate, and achieve their goals in a secure and
            decentralized environment. Whether you are a developer, a community organizer, or simply a member of a digital community, the DefenderSDK
            is the perfect solution for building trust, fostering collaboration, and managing digital assets in the Web3 ecosystem. Join the
            DefenderSDK community today and experience the power of decentralized technology for yourself. Together, we can build a safer, more open
            Web3 that is accessible to all.
          </p>
        </div>
      </section>
    </>
  )
}
