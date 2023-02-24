import * as React from 'react'

import classNames from 'clsx'

import { findImageFromLayerAndFrame } from '@/data/itemList'

interface PixelPoolyTraitNameProps {
  className?: string
  layer: number
  frame: number
}

export const PixelPoolyTraitName = ({ className, layer, frame }: PixelPoolyTraitNameProps) => {
  const classes = classNames(className, 'PixelPoolyTraitName')
  const trait = findImageFromLayerAndFrame(layer, frame)

  return <span className={classes}>{trait?.traitName}</span>
}

export default PixelPoolyTraitName
