'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { BigNumber } from 'ethers'

import MenuDashboardBuilder from '@/components/layout/menu-dashboard-builder'
import PixelPoolyTraitsUpdaterBoostedPreview from '@/components/PixelPoolyTraitsUpdaterBoostedPreview'
import PixelPoolyUpdaterPreview from '@/components/PixelPoolyUpdaterPreview'
import PixelStoreMintButton from '@/components/PixelStoreMintButton'
import PixelStoreMintPrice from '@/components/PixelStoreMintPrice'
import PixelStoreMintPriceSplit from '@/components/PixelStoreMintPriceSplit'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DialogHeader } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import PixelPoolyLayerFrameUpdaterList from '@/components/updater/pixel-pooly-layer-frame-updater-list'
import pixelPoolyItems from '@/config/pixel-pooly-items-v2'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyStorageGetUnlockedTraits } from '@/lib/blockchain'

import PixelStoreUnlockItemsBatch from './pixel-store-unlock-items-batch'
import PixelStoreUnlockBatchPrice from './pixels-store-unlock-batch-price'
import PixelStoreUnlockBatchPriceSplit from './pixels-store-unlock-batch-price-split'

interface PixelPoolyBuyAndEquipItemsProps {
  className?: string
  tokenId: any
  character: {
    frame: number
    layer: number
  }[]
}

export default function PixelPoolyBuyAndEquipItems({ className, tokenId, character }: PixelPoolyBuyAndEquipItemsProps) {
  // use character to initially set the state of the usePixelPoolyUpdater
  const contractStorage = useContractAutoLoad('PixelPoolyStorage')

  const { data: unlockedTraitsData } = usePixelPoolyStorageGetUnlockedTraits({
    address: contractStorage?.address,
    args: [tokenId],
  })

  return (
    <section className="block">
      <Tabs.Root defaultValue="tab5">
        <div className="max-w-screen-3xl container grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-3">
            <Tabs.List>
              <MenuDashboardBuilder />
            </Tabs.List>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className=" max-h-[80vh] overflow-auto  rounded-lg bg-neutral-50 px-8 dark:bg-neutral-700 ">
              {/* TODO: filter out already owned traits from pixelPoolyItems */}
              {pixelPoolyItems.map((item, index) => {
                return (
                  <div key={index} className="mb-10">
                    <Tabs.Content value={`tab${item.layer}`}>
                      <PixelPoolyLayerFrameUpdaterList layer={item.layer} items={item.elements} ownedTraits={unlockedTraitsData} />
                    </Tabs.Content>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-gradient-color min-h-[300px] rounded-xl rounded-t-3xl p-6 dark:bg-purple-700">
              <PixelPoolyUpdaterPreview className="-mt-20 w-full rounded-xl border-4 shadow-2xl" />
              <div className="mt-6 rounded-lg p-4 shadow-xl dark:bg-purple-900">
                <PixelPoolyTraitsUpdaterBoostedPreview />
              </div>
            </div>
            <div className="darK:bg-neutral-900 mt-3 rounded-lg p-4">
              <div className="ic jb flex">
                <span className="font-lg font-bold">Total Cost</span>
                <span className="flex items-center text-2xl font-bold">
                  <PixelStoreUnlockBatchPrice tokenId={tokenId} className="mr-2" /> <span className="">ETH</span>
                </span>
              </div>
              <Separator className="my-4" />
              <div className="ic jb mb-4 flex">
                <span className="text-lg font-bold">Lobby3 (80%)</span>
                <span className="flex items-center">
                  <PixelStoreUnlockBatchPriceSplit tokenId={tokenId} percentage="80" />
                  <span className="ml-2">ETH</span>
                </span>
              </div>
              <div className="ic jb flex">
                <span className="font-sm">Friends of Pooly (20%)</span>
                <span className="flex items-center">
                  <PixelStoreUnlockBatchPriceSplit tokenId={tokenId} percentage="20" />
                  <span className="ml-2">ETH</span>
                </span>
              </div>
              <PixelStoreUnlockItemsBatch
                tokenId={tokenId}
                className="btn-purple btn-pill bg-gradient-color btn-xl mt-5 w-full py-6 text-2xl"
                // label="Mint Pixel Pooly"
              />
            </div>
          </div>
        </div>
      </Tabs.Root>
    </section>
  )
}
