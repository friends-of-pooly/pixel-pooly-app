import * as React from 'react'

import classNames from 'classnames'
import { utils } from 'ethers'
import { useNetwork } from 'wagmi'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyRenderPreview } from '@/lib/blockchain'
import { usePixelPoolyUpdater } from '@/lib/state/updater'

interface PixelPoolyUpdaterPreviewProps {
  className?: string
}

export const PixelPoolyUpdaterPreview = ({ className }: PixelPoolyUpdaterPreviewProps) => {
  const [data, setUpdater] = usePixelPoolyUpdater()
  const contract = useContractAutoLoad('PixelPooly')
  const txRead = usePixelPoolyRenderPreview({
    address: contract?.address || '',
    args: [
      utils.solidityPack(['uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8', 'uint8'], data),
    ] as any,
  })

  const [img, setImg] = React.useState<string>()
  React.useEffect(() => {
    if (txRead.data) {
      setImg(String(txRead.data))
    }
  }, [txRead.data])

  const classes = classNames(className, 'PixelPoolyUpdaterPreview')
  return <img className={classes} src={img} alt="PixelPooly Preview" />
}

export default PixelPoolyUpdaterPreview
