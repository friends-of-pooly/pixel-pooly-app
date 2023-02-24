import * as React from 'react'

import classNames from 'clsx'
import { BigNumber } from 'ethers'
import { useAccount } from 'wagmi'

import useAddMintedToken from '@/hooks/app/use-add-minted-token'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelStoreGetFramePrices, usePixelUniverseMintWithFrames } from '@/lib/blockchain'
import { usePixelPoolyBuilder } from '@/lib/state/builder'

interface PixelStoreMintButtonProps {
  className?: string
  label?: string
}

export const PixelStoreMintButton = ({ className, label = 'Mint' }: PixelStoreMintButtonProps) => {
  const { address } = useAccount()
  const [itemSelection] = usePixelPoolyBuilder()

  const contract = useContractAutoLoad('PixelUniverse')
  const contractStore = useContractAutoLoad('PixelStore')

  const price = usePixelStoreGetFramePrices({
    address: contractStore.address,
    args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], itemSelection],
  })

  const { write, data, error } = usePixelUniverseMintWithFrames({
    address: contract.address,
    args: [address, itemSelection],
    overrides: {
      value: price?.data?.reduce((acc: BigNumber, val: BigNumber) => acc.add(val), BigNumber.from('0')),
    },
  })

  useAddMintedToken(data?.hash as string)

  const classes = classNames(className, 'PixelStoreMintButton', 'btn')
  return (
    <button onClick={write} className={classes}>
      {label}
    </button>
  )
}

export default PixelStoreMintButton
