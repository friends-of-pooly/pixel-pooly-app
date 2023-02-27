import * as React from 'react'

import classNames from 'classnames'
import { utils } from 'ethers'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyRenderPreview } from '@/lib/blockchain'
import { usePixelPoolyUpdater } from '@/lib/state/updater'

interface PixelPoolyUpdatePreviewProps {
  className?: string
}

export const PixelPoolyUpdatePreview = ({ className }: PixelPoolyUpdatePreviewProps) => {
  const [data] = usePixelPoolyUpdater()
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

  const classes = classNames(className, 'PixelPoolyUpdatePreview')
  return <img className={classes} src={img} alt="PixelPooly Preview" />
}

export default PixelPoolyUpdatePreview
