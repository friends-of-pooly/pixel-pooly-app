import * as React from 'react'

import classNames from 'clsx'

import { findImageFromLayerAndFrame } from '@/data/itemList'

interface PixelPoolyRenderImageProps {
  className?: string
  layer: number
  frame: number
}

export const PixelPoolyRenderImage = ({ className, layer, frame }: PixelPoolyRenderImageProps) => {
  const classes = classNames(className, 'PixelPoolyRenderImage')
  const image = findImageFromLayerAndFrame(layer, frame)

  if (!image.croppedSVG) return null
  return <img src={image?.croppedSVG} className={classes} alt={image?.traitName} />
}

export default PixelPoolyRenderImage
