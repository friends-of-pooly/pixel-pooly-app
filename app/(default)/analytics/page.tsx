'use client'

export default function Home() {
  return (
    <>
      <section className="w-full py-20">
        <div className="mb-10 text-center">
          <h3 className="text-4xl font-semibold">Analytics</h3>
          <p className="text-normal mt-4">Real-time insights into the Pixel Pooly Crowdsourcing Platform.</p>
        </div>
        <div className="container grid max-w-screen-xl grid-cols-12 gap-x-10 lg:text-center">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-6xl font-bold">1</span>
            <h3 className="text-lg font-normal">Season</h3>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <span className="text-6xl font-bold">0</span>
            <h3 className="text-lg font-normal">Mints</h3>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <span className="text-6xl font-bold">$0.00</span>
            <h3 className="text-lg font-normal">Raised</h3>
          </div>
        </div>
      </section>
    </>
  )
}
