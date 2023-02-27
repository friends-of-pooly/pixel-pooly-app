// @ts-nocheck
'use client'

import PixelPoolyBuyAndEquipItems from '@/components/pixel-pooly-buy-and-equip-items'
import PixelPoolyInventory from '@/components/pixel-pooly-inventory'
import PixelPoolyTraitDescription from '@/components/pixel-pooly-trait-description'
import PixelPoolyTraitLayerName from '@/components/pixel-pooly-trait-layer-name'
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

  const itemList = data2
    ?.map((frame, layer) => {
      return { frame, layer }
    })
    .filter((frame, layer) => {
      if (frame.frame === 0 && frame.layer > 2) return false
      return true
    })

  return (
    <>
      <div className="container py-10 lg:py-16">
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
                <div key={layer} className="card relative col-span-6 flex cursor-pointer gap-10">
                  <div className="flex-center flex min-h-[64px] w-[120px]">
                    <PixelPoolyRenderImage layer={item.layer} frame={item.frame} className="max-h-[84px] w-full max-w-[100px]" />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-center">
                    <PixelPoolyTraitName className="font-raleway text-xl font-bold" layer={item.layer} frame={item.frame} />
                    <PixelPoolyTraitLayerName
                      className="mt-2 font-raleway text-sm font-medium text-neutral-500"
                      layer={item.layer}
                      frame={item.frame}
                    />
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
      <section className="container py-10 lg:py-16">
        <PixelPoolyInventory />
      </section>
      <section className="container py-10 lg:py-16">
        <PixelPoolyBuyAndEquipItems />
      </section>
    </>
  )
}
