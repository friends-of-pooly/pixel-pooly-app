'use client'

import { useEffect, useState } from 'react'

import PixelPoolyRenderImage from '@/components/PixelPoolyRenderImage'
import PixelPoolyTraitsBoostedPreview from '@/components/PixelPoolyTraitsBoostedPreview'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { useERC721TokenURIFormatted } from '@/hooks/use-erc721-token-uri-formatted'
import { usePixelPoolyStorageGetCharacter } from '@/lib/blockchain'

export default function Home({ params }) {
  const contract = useContractAutoLoad('PixelPooly')
  const contractStorage = useContractAutoLoad('PixelPoolyStorage')

  const { data, isSuccess } = useERC721TokenURIFormatted(contract?.address, params?.id)

  const { data: data2, isSuccess: isSuccess2 } = usePixelPoolyStorageGetCharacter({
    address: contractStorage?.address,
    args: [params?.id],
  })

  console.log(data2, 'data2')

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 px-10 lg:col-span-4">
          <img src={data?.image} className="w-full rounded-lg border-2 shadow-lg " />
          <div className="content mt-4">
            <h3 className="text-3xl font-bold">{data?.name}</h3>
            <p className="text-sm font-normal">{data?.description}</p>
          </div>
          <div className="mt-6 rounded-lg p-4 shadow-xl dark:bg-purple-900">
            <PixelPoolyTraitsBoostedPreview />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-12 gap-4">
            {data2?.map((frame, layer) => (
              <PixelPoolyRenderImage layer={layer} frame={frame} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
