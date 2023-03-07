import * as React from 'react'

import classNames from 'clsx'

import { findImageFromLayerAndFrame } from '@/data/itemList'

interface PixelPoolyTraitLayerNameProps {
  className?: string
  layer: number
  frame: number
}

const names = [
  'Background',
  'Right Wing',
  'Left Wing',
  'Body',
  'Body Accessory',
  'Head',
  'Head Accessory',
  'Body Lower',
  'Accessory Left',
  'Accessory Right',
  'Accessory Face',
  'Wildcard',
]

export const PixelPoolyTraitLayerName = ({ className, layer, frame }: PixelPoolyTraitLayerNameProps) => {
  const classes = classNames(className, 'PixelPoolyTraitLayerName')
  const trait = findImageFromLayerAndFrame(layer, frame)

  return <span className={classes}>{names[layer]}</span>
}

export default PixelPoolyTraitLayerName
