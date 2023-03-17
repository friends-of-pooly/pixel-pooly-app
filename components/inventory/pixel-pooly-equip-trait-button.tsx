import * as React from 'react'

import classNames from 'clsx'

import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { usePixelPoolyEquip } from '@/lib/blockchain'

interface PixelPoolyEquipTraitButtonProps {
  className?: string
  label?: string
  tokenId: any
  layer: any
  frame: any
}

export const PixelPoolyEquipTraitButton = ({ className, label = 'Equip', tokenId, layer, frame }: PixelPoolyEquipTraitButtonProps) => {
  const contractPooly = useContractAutoLoad('PixelPooly')

  const { write, data, error } = usePixelPoolyEquip({
    address: contractPooly?.address,
    args: [tokenId, layer, frame],
  })

  const classes = classNames(className, 'PixelPoolyEquipTraitButton', 'btn')
  return (
    <button onClick={write} className={classes}>
      {label}
    </button>
  )
}

export default PixelPoolyEquipTraitButton
