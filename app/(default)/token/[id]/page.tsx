// @ts-nocheck
'use client'

import PixelPoolyTraitDescription from '@/components/pixel-pooly-trait-description'
import PixelPoolyTraitName from '@/components/pixel-pooly-trait-name'
import PixelPoolyTraitPrice from '@/components/pixel-pooly-trait-price'
import PixelPoolyTraitTier from '@/components/pixel-pooly-trait-tier'
import PixelPoolyRenderImage from '@/components/PixelPoolyRenderImage'
import PixelPoolyTraitsBoostedPreview from '@/components/PixelPoolyTraitsBoostedPreview'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { useERC721TokenURIFormatted } from '@/hooks/use-erc721-token-uri-formatted'
import { usePixelPoolyStorageGetCharacter } from '@/lib/blockchain'

export default function Home({ params }: any) {
  const contract = useContractAutoLoad('PixelPooly')
  const contractStorage = useContractAutoLoad('PixelPoolyStorage')

  const { data } = useERC721TokenURIFormatted(contract?.address, params?.id)

  const { data: data2, isSuccess: isSuccess2 } = usePixelPoolyStorageGetCharacter({
    address: contractStorage?.address,
    args: [params?.id],
  })

  console.log(data2, 'data2')

  const itemList = data2
    ?.map((frame, layer) => {
      return { frame, layer }
    })
    .filter((frame, layer) => {
      if (frame.frame === 0 && frame.layer > 2) return false
      return true
    })

  console.log(itemList, 'itemList')

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 px-10 lg:col-span-4">
          <img src={data?.image} className="w-full rounded-lg border-2 shadow-lg " />
          <div className="mt-6 rounded-lg p-4 shadow-xl dark:bg-purple-900">
            <PixelPoolyTraitsBoostedPreview />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="content">
            <h3 className="text-3xl font-bold">{data?.name}</h3>
            <p className="text-sm font-normal">{data?.description}</p>
          </div>
          <div className="grid grid-cols-12 gap-10">
            {itemList?.map((item, layer) => (
              <div key={layer} className="card relative col-span-4 flex cursor-pointer gap-10">
                <div className="flex-center flex min-h-[64px] w-[64px]">
                  <PixelPoolyRenderImage layer={item.layer} frame={item.frame} className="max-h-[74px] w-full" />
                </div>
                <div className="relative flex flex-col justify-center">
                  <PixelPoolyTraitName className="font-raleway text-2xl font-bold" layer={item.layer} frame={item.frame} />
                  <PixelPoolyTraitDescription className="mt-2 text-sm" layer={item.layer} frame={item.frame} />
                  <PixelPoolyTraitPrice className="mt-4 inline-block text-sm" layer={item.layer} frame={item.frame} />
                  <span className=""></span>
                </div>
                <span className="absolute -right-2 -top-4">
                  <PixelPoolyTraitTier className="mt-2 text-sm" layer={item.layer} frame={item.frame} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
