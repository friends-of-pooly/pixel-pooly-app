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

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 84.667 84.667"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
      dangerouslySetInnerHTML={{ __html: image?.SVG }}
    />
  )
}

export default PixelPoolyRenderImage
