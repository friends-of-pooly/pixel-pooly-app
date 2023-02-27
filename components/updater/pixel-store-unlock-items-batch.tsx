import * as React from 'react'

import classNames from 'clsx'
import { BigNumber } from 'ethers'
import { useAccount } from 'wagmi'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import {
  usePixelPoolyStorageGetCharacter,
  usePixelStoreGetFramePrices,
  usePixelStoreUnlockBatch,
  usePixelUniverseMintWithFrames,
} from '@/lib/blockchain'
import { usePixelPoolyUpdater } from '@/lib/state/updater'
import { arrayFindDifferences } from '@/lib/utils/arrayFindDifferences'

interface PixelStoreUnlockItemsBatchProps {
  className?: string
  label?: string
  tokenId?: number
}

export const PixelStoreUnlockItemsBatch = ({ className, label = 'Buy', tokenId }: PixelStoreUnlockItemsBatchProps) => {
  const [itemSelection] = usePixelPoolyUpdater()
  const contractStore = useContractAutoLoad('PixelStore')
  const contractStorage = useContractAutoLoad('PixelPoolyStorage')
  const { data: currentPixelPoolySlots } = usePixelPoolyStorageGetCharacter({
    address: contractStorage?.address,
    args: [BigNumber.from(tokenId)],
  })

  const [itemsDiffed, setItemsDiffed] = React.useState([[], []])
  React.useEffect(() => {
    if (currentPixelPoolySlots) {
      const diffed = arrayFindDifferences(currentPixelPoolySlots, itemSelection)
      setItemsDiffed(diffed)
    }
  }, [currentPixelPoolySlots, itemSelection])

  const price = usePixelStoreGetFramePrices({
    address: contractStore?.address,
    args: [itemsDiffed[0], itemsDiffed[1]],
  })

  const { write, data, error } = usePixelStoreUnlockBatch({
    address: contractStore?.address,
    args: [tokenId, itemsDiffed[0], itemsDiffed[1]],
    overrides: {
      value: price?.data?.reduce((acc: BigNumber, val: BigNumber) => acc.add(val), BigNumber.from('0')),
    },
  })

  const classes = classNames(className, 'PixelStoreUnlockItemsBatch', 'btn')
  return (
    <button onClick={write} className={classes}>
      {label}
    </button>
  )
}

export default PixelStoreUnlockItemsBatch
