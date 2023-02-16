import * as React from 'react'

import { ERC721AttributesBoostNumbers, ERC721AttributesFilteredByTraitType } from '@turbo-eth/erc721-wagmi'
import classNames from 'classnames'
import { utils } from 'ethers'
import { useNetwork } from 'wagmi'

import { usePixelPoolyStorageConstructTokenUri, usePixelPoolyStorageFormatTraitsBytesFromCharacter } from '@/lib/blockchain'
import { usePixelPoolyBuilder } from '@/lib/state/builder'

interface PixelPoolyTraitsPreviewProps {
  className?: string
}

const DEFAULT_ARGS = utils.solidityPack(
  ['uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
)

export const PixelPoolyTraitsPreview = ({ className }: PixelPoolyTraitsPreviewProps) => {
  const [data] = usePixelPoolyBuilder()
  const { chain } = useNetwork()
  const traitsFormatted = usePixelPoolyStorageFormatTraitsBytesFromCharacter({
    address: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
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
    address: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
    chainId: chain?.id || 1,
    args: [0, DEFAULT_ARGS, traitsFormatted.data],
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

  console.log(txRead, ' txReadtxRead')

  if (!txRead?.data || !txRead?.isSuccess) return null

  const classes = classNames(className, 'PixelPoolyTraitsPreview')
  return (
    <>
      <ERC721AttributesFilteredByTraitType
        attFilter={['Head', 'Body', 'Body Lower', 'Left', 'Right', 'Head Acc', 'Face Acc', 'Body Acc', 'Left Acc', 'Right Acc']}
        attributes={attributes || []}
        className="flex flex-col"
        classNameItem="flex justify-between items-center border-b-2 py-[6px]"
        classNameLabel="text-sm font-bold block w-1/4"
        classNameValue="text-sm font-normal text-right w-3/4"
      />
      <div className="my-4" />
      <ERC721AttributesBoostNumbers
        attributes={attributes}
        className="grid grid-cols-12 gap-y-5 gap-x-10 text-white"
        classNameItem="flex flex-col flex-col-reverse text-center bg-indigo-600 rounded-md py-2 shadow-md hover:shadow-lg col-span-4"
        classNameLabel="text-xl"
        classNameValue="text-2xl font-bold"
      />
    </>
  )
}
export default PixelPoolyTraitsPreview
