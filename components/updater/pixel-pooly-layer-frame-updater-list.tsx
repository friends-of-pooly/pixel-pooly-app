import * as React from 'react'

import classNames from 'clsx'

import { tierPrices } from '@/data/tier-prices'
import { usePixelPoolyUpdater } from '@/lib/state/updater'

import TimeFromEpoch from '../shared/time/TimeFromEpoch'

interface PixelPoolyLayerFrameUpdaterListProps {
  className?: string
  layer: number
  items: {
    frame: number
    layer: number
    traitName: string
    traitDescription: string
    tier: number
    svg: string
    expiry: number
    stats: [any]
    croppedSVG: string
  }[]
  ownedTraits: {
    id: string
    frame: number
    layer: number
    traitName: string
    traitDescription: string
    tier: number
    svg: string
    expiry: number
    stats: [any]
  }[]
}

export const PixelPoolyLayerFrameUpdaterList = ({ className, items, layer, ownedTraits }: PixelPoolyLayerFrameUpdaterListProps) => {
  const [_data, setLayerFrame] = usePixelPoolyUpdater()

  const handleSetLayerFrame = (frame: number) => {
    setLayerFrame(layer, frame)
  }
  const classes = classNames(className, 'PixelPoolyLayerFrameUpdaterList', 'grid grid-cols-12 gap-10')
  return (
    <div className={classes}>
      {items
        // .filter((t) => ownedTraits.find((o) => o.frame == t.frame && o.layer == t.layer))
        .map((item, index) => {
          if (ownedTraits?.find((o) => o.frame == item.frame && o.layer == item.layer)) {
            return null
          }
          const itemClasses = classNames(
            'col-span-6 grid cursor-pointer grid-cols-12 gap-x-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 p-4 dark:hover:bg-neutral-900 dark:bg-neutral-800',
            {
              'bg-gradient-color': _data[layer] == item.frame,
            }
          )

          return (
            <div onClick={() => handleSetLayerFrame(item.frame)} key={index} className={itemClasses}>
              <div className="flex-center col-span-4 flex ">
                <span className="pt-4">{!item.croppedSVG ? null : <img src={item.croppedSVG} className="h-20 w-20" />}</span>
              </div>
              <div className="col-span-8">
                <h3 className="mb-3 text-2xl font-bold">{item.traitName}</h3>
                <p className="text-sm">{item.traitDescription}</p>
                <span className="tag tag-green mt-2 inline-block font-bold"> {tierPrices[item.tier]} ETH</span>
              </div>
              {!item.expiry ? null : (
                <div className="col-span-12 w-full text-left">
                  <span className="tag tag-red w-fulll mt-2 inline-block text-xs font-medium">
                    <span className="text-xs">
                      On Sale Until: <TimeFromEpoch epoch={item.expiry} />{' '}
                    </span>
                  </span>
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default PixelPoolyLayerFrameUpdaterList
