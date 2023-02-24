'use client'

import Image from 'next/image'

export default function Guide() {
  return (
    <>
      <section className="relative flex flex-1 flex-col bg-constitution bg-cover bg-center lg:min-h-[620px]">
        <div className=" absolute inset-0 z-0 bg-black opacity-50 blur" />
        <div className="flex-center z-10 flex h-full flex-1 flex-col text-white">
          <h3 className="text-2xl font-medium">Defending Ethereum Values</h3>
          <h3 className="text-6xl font-bold">Open Web3 Constitution</h3>
        </div>
      </section>
      <section className="content py-20">
        <div className="container max-w-screen-md">
          <hr className="my-8" />
          <h3 className="text-4xl font-bold">Article I : Accessibility</h3>
          <p className="">
            An Open Web3 must prioritize accessibility above all else. Accessibility is empowerment in a digital world. Through empowerment; access to
            digital computations, currencies and networks, every sovereign Persons, will have equitable connection in the Ethereum network state.
          </p>

          <h3 className="text-4xl font-bold">Article II : Neutrality</h3>
          <p className="">
            An Open Web3 must maintain technological, protocol and computational neutrality. Trust is an emergent property of neutral fareways and
            open lines of distribution; without these neutral and trusted environments for all sovereign Peoples, Institutions and Governments, a
            future Internet will not be possible.
          </p>

          <h3 className="text-4xl font-bold">Article III : Digital Ownership</h3>
          <p className="">
            An Open Web3 is built upon digital ownership. Cryptography is an inalienable digital right, available freely to all sovereign Peoples;
            regardless of assets, borders or creeds. Mnemonic phrases, passwords and other cryptographic instruments for digital ownership belong to
            the Person, Institution or Government signing the first message; No Person, Institution or Government may gain unauthorized access or
            computational resources, granted from the ownership of these cryptographic instruments, without expressed permission from the Owner, or
            pursuant to applicable laws protecting private property and civil liberties.
          </p>

          <h3 className="text-4xl font-bold">Article IV : Privacy</h3>
          <p className="">
            An Open Web3 is built upon digital privacy and freedom to assemble using all known cryptographic ceremonies. Every sovereign Citizen of
            the Ethereum network state has a right to participate in public and private cryptographic ceremonies; including but not limited to
            encryption, secret sharing and zero-knowledge computations.
          </p>

          <h3 className="text-4xl font-bold">Article V : Decentralization</h3>
          <p className="">
            An Open Web3 must prioritize decentralization as a core principle. Decentralization empowers sovereign Peoples, Institutions and
            Governments to participate in network state decision-making and computational power; preventing any central authority from controlling the
            network, its resources or data. Decentralization also increases network security, resilience and innovation, enabling sovereign Peoples,
            Institutions and Governments to create their own applications and protocols that interact with the network.
          </p>

          <h3 className="text-4xl font-bold">Article VI : Interoperability</h3>
          <p className="">
            An Open Web3 must prioritize interoperability between different protocols, networks and ecosystems. Interoperability promotes
            collaboration, innovation and growth, enabling sovereign Peoples, Institutions and Governments to interact seamlessly with other networks,
            protocols and ecosystems. Interoperability also ensures that data and resources can be easily exchanged and shared, promoting open and
            fair access to digital assets and resources.
          </p>

          <h3 className="text-4xl font-bold">Article VII : Transparency</h3>
          <p className="">
            An Open Web3 must prioritize transparency in all network state decision-making and governance processes. Transparency ensures that all
            sovereign Peoples, Institutions and Governments have equal access to information and can participate in decision-making and governance
            processes. Transparency also promotes accountability and trust, enabling the network to function with integrity and reliability.
          </p>

          <h3 className="text-4xl font-bold">Article VIII : Community-driven Development</h3>
          <p className="">
            An Open Web3 must prioritize community-driven development as a core principle. Community-driven development empowers sovereign Peoples,
            Institutions and Governments to contribute to the development and evolution of the network state. This includes contributing to code,
            creating applications and protocols, participating in governance processes and decision-making, and providing feedback and support to
            other members of the community. Community-driven development also promotes diversity, inclusivity and innovation, enabling the network to
            grow and evolve in a decentralized and sustainable manner.
          </p>

          <h3 className="text-4xl font-bold">Article IX : Resilience</h3>
          <p className="">
            An Open Web3 must prioritize resilience as a core principle. Resilience ensures that the network state is able to withstand attacks,
            disruptions and other challenges, and is able to recover quickly in the event of a failure or outage. Resilience also ensures that the
            network state is able to adapt and evolve to changing circumstances and emerging threats, enabling sovereign Peoples, Institutions and
            Governments to continue to rely on the network for their digital needs.
          </p>
        </div>
      </section>
    </>
  )
}
