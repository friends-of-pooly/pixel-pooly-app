import * as React from 'react'

import classNames from 'classnames'
import { utils } from 'ethers'
import { useNetwork } from 'wagmi'

import { usePixelPoolyRenderPreview } from '@/lib/blockchain'
import { usePixelPoolyBuilder } from '@/lib/state/builder'

interface PixelPoolyPreviewProps {
  className?: string
}

export const PixelPoolyPreview = ({ className }: PixelPoolyPreviewProps) => {
  const [data] = usePixelPoolyBuilder()
  const { chain } = useNetwork()
  const txRead = usePixelPoolyRenderPreview({
    address: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
    chainId: chain?.id || 1,
    args: [utils.solidityPack(['uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8'], data)],
  })

  const [img, setImg] = React.useState<string>()
  React.useEffect(() => {
    if (txRead.data) {
      setImg(String(txRead.data))
    }
  }, [txRead.data])

  const classes = classNames(className, 'PixelPoolyPreview')
  return <img className={classes} src={img} />
}

export default PixelPoolyPreview
