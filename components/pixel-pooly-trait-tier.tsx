import * as React from 'react'

import classNames from 'clsx'

import { findImageFromLayerAndFrame } from '@/data/itemList'

interface PixelPoolyTraitTierProps {
  className?: string
  layer: number
  frame: number
}

export const PixelPoolyTraitTier = ({ className, layer, frame }: PixelPoolyTraitTierProps) => {
  const classes = classNames(className, 'PixelPoolyTraitTier', 'inline')
  const trait = findImageFromLayerAndFrame(layer, frame)

  const traitTier = trait?.tier

  if (traitTier === 0) {
    return <span className={`${classes} tag tag-gray`}>Common</span>
  }
  if (traitTier === 1) {
    return <span className={`${classes} tag tag-indigo`}>Rare</span>
  }
  if (traitTier === 2) {
    return <span className={`${classes} tag tag-emerald`}>Epic</span>
  }
  if (traitTier === 3) {
    return <span className={`${classes} tag tag-red`}>Legendary</span>
  }

  return null
}

export default PixelPoolyTraitTier
