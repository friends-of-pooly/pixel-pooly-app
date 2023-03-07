'use client'

import PixelPoolyInventoryList from '@/components/inventory/pixel-pooly-inventory-list'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyStorageGetUnlockedTraits } from '@/lib/blockchain'

interface PixelPoolyInventoryProps {
  tokenId: any
  character: {
    frame: number
    layer: number
  }[]
}

export default function PixelPoolyInventory({ tokenId, character }: PixelPoolyInventoryProps) {
  const contractStorage = useContractAutoLoad('PixelPoolyStorage')

  const { data: unlockedTraitsData } = usePixelPoolyStorageGetUnlockedTraits({
    address: contractStorage?.address,
    args: [tokenId],
  })

  console.log('unlockedTraitsData', unlockedTraitsData)

  return (
    <div className="rounded-md bg-neutral-100 p-10 text-center dark:bg-neutral-800">
      {unlockedTraitsData && unlockedTraitsData.length > 0 ? (
        <>
          <h3 className="mb-8 pb-2 text-3xl font-bold">Inventory</h3>
          <PixelPoolyInventoryList character={character} ownedTraits={unlockedTraitsData} />
        </>
      ) : (
        <>
          <h3 className="mb-2 text-3xl font-bold">Empty Inventory</h3>
          <p className="text-lg font-normal">All purchased items are equipped on the Pixel Pooly</p>
        </>
      )}
    </div>
  )
}
