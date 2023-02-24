import * as React from 'react'

import classNames from 'clsx'

import pixelPoolyItems from '@/config/pixel-pooly-items'
import { tierPrices } from '@/data/tier-prices'
import { usePixelPoolyBuilder } from '@/lib/state/builder'

interface PixelPoolyLayerFrameListProps {
  className?: string
  layer: number
  items: {
    frame: number
    layer: number
    traitName: string
    traitDescription: string
    tier: number
    SVG: string
  }[]
}

export const PixelPoolyLayerFrameList = ({ className, items, layer }: PixelPoolyLayerFrameListProps) => {
  const [_data, setLayerFrame] = usePixelPoolyBuilder()

  const handleSetLayerFrame = (frame: number) => {
    setLayerFrame(layer, frame)
  }
  const classes = classNames(className, 'PixelPoolyLayerFrameList', 'grid grid-cols-12 gap-10')
  return (
    <div className={classes}>
      {items.map((item, index) => {
        const itemClasses = classNames(
          'col-span-6 grid cursor-pointer grid-cols-12 gap-x-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 p-4 dark:hover:bg-neutral-900 dark:bg-neutral-800',
          {
            'bg-gradient-color': _data[layer] == item.frame,
          }
        )

        return (
          <div onClick={() => handleSetLayerFrame(item.frame)} key={index} className={itemClasses}>
            <div className="flex-center col-span-4 flex ">
              <span className="item-preview">
                <img src={item.croppedSVG} className="h-20 w-20" />
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 84.667 84.667"
                  shapeRendering="crispEdges"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                  dangerouslySetInnerHTML={{ __html: item.SVG }}
                />
              </span>
            </div>
            <div className="col-span-8">
              <h3 className="mb-3 text-2xl font-bold">{item.traitName}</h3>
              <p className="text-sm">{item.traitDescription}</p>
              <span className=""> {tierPrices[item.tier]} ETH</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PixelPoolyLayerFrameList
