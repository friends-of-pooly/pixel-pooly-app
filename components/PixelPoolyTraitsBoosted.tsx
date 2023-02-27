import * as React from 'react'

import { ERC721AttributesBoostNumbers } from '@turbo-eth/erc721-wagmi'
import classNames from 'classnames'
import { BigNumber, utils } from 'ethers'
import { useNetwork } from 'wagmi'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyStorageConstructTokenUri, usePixelPoolyStorageFormatTraitsBytesFromCharacter } from '@/lib/blockchain'
import { usePixelPoolyBuilder } from '@/lib/state/builder'

interface PixelPoolyTraitsBoostedPreviewProps {
  className?: string
}

const DEFAULT_ARGS = utils.solidityPack(
  ['uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
)

export const PixelPoolyTraitsBoostedPreview = ({ className }: PixelPoolyTraitsBoostedPreviewProps) => {
  const [data] = usePixelPoolyBuilder()
  const { chain } = useNetwork()

  const contract = useContractAutoLoad('PixelPoolyStorage')
  const traitsFormatted = usePixelPoolyStorageFormatTraitsBytesFromCharacter({
    address: contract?.address,
    chainId: chain?.id || 1,
    args: [
      {
        bg: data[0],
        body: data[1],
        head: data[2],
        bodyLower: data[3],
        left: data[4],
        right: data[5],
        headAcc: data[6],
        faceAcc: data[7],
        bodyAcc: data[8],
        bodyLowerAcc: data[9],
        leftAcc: data[10],
        rightAcc: data[11],
      },
    ],
  })

  const txRead = usePixelPoolyStorageConstructTokenUri({
    address: contract?.address,
    chainId: chain?.id || 1,
    args: [BigNumber.from(0), DEFAULT_ARGS as `0x${string}`, traitsFormatted.data as `0x${string}`],
  })

  const [attributes, setAttributes] = React.useState()
  React.useEffect(() => {
    if (txRead.data) {
      ;(async () => {
        if (txRead.data) {
          const data = await fetch(txRead.data as unknown as string)
          const json = await data.json()
          setAttributes(json?.attributes)
        }
      })()
    }
  }, [txRead.data])

  if (!attributes) return null

  const classes = classNames(className, 'PixelPoolyTraitsBoostedPreview')
  return (
    <>
      <ERC721AttributesBoostNumbers
        attributes={attributes}
        className="grid grid-cols-12 gap-y-2 text-white"
        classNameItem="flex justify-between items-center px-1 rounded-md col-span-12"
        classNameLabel="text-"
        classNameValue="text- font-semibold"
      />
    </>
  )
}
export default PixelPoolyTraitsBoostedPreview
