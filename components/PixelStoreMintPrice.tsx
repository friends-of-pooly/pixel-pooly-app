import * as React from 'react'

import classNames from 'classnames'
import { BigNumber, utils } from 'ethers'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelStoreGetFramePrices } from '@/lib/blockchain'
import { usePixelPoolyBuilder } from '@/lib/state/builder'

interface PixelStoreMintPriceProps {
  className?: string
}

export const PixelStoreMintPrice = ({ className }: PixelStoreMintPriceProps) => {
  const [data] = usePixelPoolyBuilder()

  const contract = useContractAutoLoad('PixelStore', 31337)

  const price = usePixelStoreGetFramePrices({
    address: contract.address,
    args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], data],
  })

  const [priceTotal, setPriceTotal] = React.useState<string | undefined>(undefined)
  React.useEffect(() => {
    if (Array.isArray(price.data)) {
      const total = price.data.reduce((acc: BigNumber, val: BigNumber) => acc.add(val), BigNumber.from('0'))
      setPriceTotal(utils.formatEther(total))
    }
  }, [price])

  const containerClassName = classNames(className, 'PixelStoreMintPrice')

  if (!priceTotal) return null
  return <div className={containerClassName}>{priceTotal}</div>
}

export default PixelStoreMintPrice
