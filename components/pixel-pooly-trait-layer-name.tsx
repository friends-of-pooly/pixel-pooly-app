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
  'Body Accesory',
  'Head',
  'Head Accesory',
  'Accesory Left',
  'Accesory Right',
  'Accesory Face',
]

export const PixelPoolyTraitLayerName = ({ className, layer, frame }: PixelPoolyTraitLayerNameProps) => {
  const classes = classNames(className, 'PixelPoolyTraitLayerName')
  const trait = findImageFromLayerAndFrame(layer, frame)

  return <span className={classes}>{names[layer]}</span>
}

export default PixelPoolyTraitLayerName
