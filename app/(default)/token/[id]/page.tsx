'use client'

import { useEffect } from 'react'

import { useAccount } from 'wagmi'

import PixelPoolyInventory from '@/components/inventory/pixel-pooly-inventory'
import PixelPoolyTraitDescription from '@/components/pixel-pooly-trait-description'
import PixelPoolyTraitLayerName from '@/components/pixel-pooly-trait-layer-name'
import PixelPoolyTraitName from '@/components/pixel-pooly-trait-name'
import PixelPoolyTraitPrice from '@/components/pixel-pooly-trait-price'
import PixelPoolyTraitTier from '@/components/pixel-pooly-trait-tier'
import PixelPoolyRenderImage from '@/components/PixelPoolyRenderImage'
import PixelPoolyTraitsBoostedPreview from '@/components/PixelPoolyTraitsBoostedPreview'
import PixelPoolyBuyAndEquipItems from '@/components/updater/pixel-pooly-buy-and-equip-items'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { useERC721TokenURIFormatted } from '@/hooks/use-erc721-token-uri-formatted'
import { usePixelPoolyOwnerOf, usePixelPoolyStorageGetCharacter } from '@/lib/blockchain'
import { usePixelPoolyUpdater } from '@/lib/state/updater'

export default function Home({ params }: any) {
  const contract = useContractAutoLoad('PixelPooly')
  const contractStorage = useContractAutoLoad('PixelPoolyStorage')

  const account = useAccount()
  const { data: ownerData } = usePixelPoolyOwnerOf({ address: contract?.address, args: [params?.id] })
  const { data } = useERC721TokenURIFormatted(contract?.address, params?.id)

  const { data: data2, isSuccess: isSuccess2 } = usePixelPoolyStorageGetCharacter({
    address: contractStorage?.address,
    args: [params?.id],
  })

  const [poolyUpdater, setUpdater, setLayerAndFrames] = usePixelPoolyUpdater()
  useEffect(() => {
    if (isSuccess2) {
      setLayerAndFrames(data2)
    }
  }, [data2])

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
          <div className="col-span-8 px-10 lg:col-span-4">
            <img src={data?.image} className="w-full rounded-lg border-2 shadow-lg " />
            <div className="mt-6 rounded-lg p-4 shadow-xl dark:bg-purple-900">
              <PixelPoolyTraitsBoostedPreview />
            </div>
          </div>
          <div className="col-span-10 lg:col-span-8">
            <div className="content">
              <h3 className="text-3xl font-bold">{data?.name}</h3>
              <p className="text-sm font-normal">{data?.description}</p>
            </div>
            <div className="grid grid-cols-12 gap-10">
              {itemList?.map((item, layer) => (
                <div key={layer} className="card relative col-span-10 flex cursor-pointer gap-10 lg:col-span-6">
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
      {account?.address == ownerData ? (
        <>
          <section className="container py-10 lg:py-16">
            <PixelPoolyInventory
              character={data2?.map((frame, layer) => {
                return { frame, layer }
              })}
              tokenId={params?.id}
            />
          </section>
          <section className="container py-10 lg:py-16">
            <PixelPoolyBuyAndEquipItems character={itemList} tokenId={params?.id} />
          </section>
        </>
      ) : null}
    </>
  )
}
