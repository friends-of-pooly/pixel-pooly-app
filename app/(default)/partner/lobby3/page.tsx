'use client'
import { LinkComponent } from '@/components/shared/LinkComponent'

export default function PartnerLobby3() {
  return (
    <>
      <section className="bg-gradient-color relative flex min-h-[240px] flex-1 flex-col bg-cover bg-center lg:min-h-[620px]">
        <div className="flex-center z-10 flex h-full flex-1 flex-col text-white">
          <h3 className="text-2xl font-medium">
            Lobby3 is a new Web3 community designed to <br />
            give the people a stronger voice in Washington
          </h3>
          <h3 className="text-6xl font-bold">Lobby3</h3>
        </div>
      </section>
      <section className="content py-20">
        <div className="container max-w-screen-md">
          <h3 className="text-5xl font-bold">Who is Lobby3?</h3>
          <p className="">
            Lobby3 is a new Web3 community designed to give the people a stronger voice in Washington, DC — so we can build a more prosperous economic
            future together.
          </p>

          <p className="">
            The emergence of Web3 offers a historic opportunity: to decentralize economic opportunity, eliminate barriers to financial inclusion,
            combat poverty, and advance the human condition.
          </p>

          <p className="">Unfortunately, ill-informed and poorly-designed policy can prevent Web3 from reaching its full potential.</p>

          <p className="">
            That’s why we’re building Lobby3 — a project to fund effective policy advocacy and educate lawmakers about the positive potential of Web3.
          </p>

          <p className="">
            By building on the unique voice and influence of Andrew Yang and the Yang Gang, Lobby3 will help shape a decentralized economic future for
            all.
          </p>
          <LinkComponent href="https://lobby3.org/">
            <a className="btn btn-light">Learn more about Lobby3</a>
          </LinkComponent>
          <hr className="my-8" />
          <h3 className="text-5xl font-bold">Partnership</h3>
          <p className="">
            Friends of Pooly and Lobby3 are partnering up for Season 1 of Pooly Pals. 80% of sales from the Pixel Store are streamed directly to the
            Lobby3 owned multisig wallet on the Optimism L2 network.
          </p>
        </div>
      </section>
    </>
  )
}
