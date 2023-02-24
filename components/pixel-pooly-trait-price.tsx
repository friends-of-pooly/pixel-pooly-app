import * as React from 'react'

import classNames from 'clsx'

import { findImageFromLayerAndFrame } from '@/data/itemList'

interface PixelPoolyTraitPriceProps {
  className?: string
  layer: number
  frame: number
}

export const PixelPoolyTraitPrice = ({ className, layer, frame }: PixelPoolyTraitPriceProps) => {
  const classes = classNames(className, 'PixelPoolyTraitPrice', 'inline')
  const trait = findImageFromLayerAndFrame(layer, frame)
  const traitTier = trait?.tier

  if (traitTier === 0) {
    return <span className={`${classes}`}> 0 ETH </span>
  }
  if (traitTier === 1) {
    return <span className={`${classes}`}>0.05 ETH</span>
  }
  if (traitTier === 2) {
    return <span className={`${classes}`}>0.2 ETH</span>
  }
  if (traitTier === 3) {
    return <span className={`${classes}`}>0.5 ETH</span>
  }
}

export default PixelPoolyTraitPrice
