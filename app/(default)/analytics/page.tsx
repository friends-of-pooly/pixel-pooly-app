'use client'

import { ethers } from 'ethers'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyTotalSupply, usePixelStoreRead } from '@/lib/blockchain'

export default function Home() {
  const contractStore = useContractAutoLoad('PixelStore')
  const contractPooly = useContractAutoLoad('PixelPooly')

  const { data: totalSupplyData, isSuccess: isSupplySuccess } = usePixelPoolyTotalSupply({ address: contractPooly?.address })
  const { data: totalETHData, isSuccess: isEthSuccess } = usePixelStoreRead({ address: contractStore?.address, functionName: 'totalReceived' })

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
            <span className="text-6xl font-bold">{totalSupplyData?.toString()}</span>
            <h3 className="text-lg font-normal">Mints</h3>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <span className="text-6xl font-bold">{totalETHData ? ethers.utils.formatEther(totalETHData) : '...'} ETH</span>
            <h3 className="text-lg font-normal">Raised</h3>
          </div>
        </div>
      </section>
    </>
  )
}
