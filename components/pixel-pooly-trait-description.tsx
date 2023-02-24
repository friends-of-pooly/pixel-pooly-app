import * as React from 'react'

import classNames from 'clsx'

import { findImageFromLayerAndFrame } from '@/data/itemList'

interface PixelPoolyTraitDescriptionProps {
  className?: string
  layer: number
  frame: number
}

export const PixelPoolyTraitDescription = ({ className, layer, frame }: PixelPoolyTraitDescriptionProps) => {
  const classes = classNames(className, 'PixelPoolyTraitDescription')
  const trait = findImageFromLayerAndFrame(layer, frame)

  return <span className={classes}>{trait?.traitDescription}</span>
}

export default PixelPoolyTraitDescription
