import * as React from 'react'

import classNames from 'classnames'
import { BigNumber, utils } from 'ethers'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyStorageGetCharacter, usePixelStoreGetFramePrices } from '@/lib/blockchain'
import { usePixelPoolyUpdater } from '@/lib/state/updater'
import { arrayFindDifferences } from '@/lib/utils/arrayFindDifferences'

interface PixelStoreUnlockBatchPriceSplitProps {
  className?: string
  tokenId?: number
  percentage?: string
}

export const PixelStoreUnlockBatchPriceSplit = ({ className, tokenId, percentage = '100' }: PixelStoreUnlockBatchPriceSplitProps) => {
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

  const [priceTotal, setPriceTotal] = React.useState<string | undefined>(undefined)
  React.useEffect(() => {
    if (Array.isArray(price.data)) {
      const total = price.data.reduce((acc: BigNumber, val: BigNumber) => acc.add(val), BigNumber.from('0'))
      setPriceTotal(utils.formatEther(total))
      setPriceTotal(utils.formatEther(total.mul(BigNumber.from(percentage)).div(BigNumber.from('100'))))
    }
  }, [price])

  const containerClassName = classNames(className, 'PixelStoreUnlockBatchPriceSplit')

  if (!priceTotal) return null
  return <div className={containerClassName}>{priceTotal}</div>
}

export default PixelStoreUnlockBatchPriceSplit
