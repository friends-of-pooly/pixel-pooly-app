import * as React from 'react'

import classNames from 'clsx'

import pixelPoolyItems from '@/config/pixel-pooly-items'
import { tierPrices } from '@/data/tier-prices'
import { usePixelPoolyBuilder } from '@/lib/state/builder'

import TimeFromEpoch from './shared/time/TimeFromEpoch'

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
              <span className="item-previews p-1">{!item.croppedSVG ? null : <img src={item.croppedSVG} className="h-20 w-20" />}</span>
            </div>
            <div className="col-span-8">
              <h3 className="mb-2.s text-2xl font-bold">{item.traitName}</h3>
              <p className="mb-2 text-sm">{item.traitDescription}</p>
              <span className="tag tag-green mt-2 inline-block font-bold"> {tierPrices[item.tier]} ETH</span>
              {!item.expiry ? null : (
                <span className="mt-2 inline-block text-xs font-medium">
                  Expires: <TimeFromEpoch epoch={item.expiry} />{' '}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PixelPoolyLayerFrameList
