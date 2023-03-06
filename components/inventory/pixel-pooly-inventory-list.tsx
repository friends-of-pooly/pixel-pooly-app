import * as React from 'react'

import classNames from 'clsx'

import { menuMain } from '@/config/menu-items'
import pixelPoolyItems from '@/config/pixel-pooly-items-v2'

interface PixelPoolyInventoryListProps {
  className?: string
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

export const PixelPoolyInventoryList = ({ className, ownedTraits }: PixelPoolyInventoryListProps) => {
  const classes = classNames(className, 'PixelPoolyInventoryList', 'flex flex-row gap-10 overflow-x-auto')
  return (
    <div className={classes}>
      {ownedTraits.map((item, index) => {
        const itemClasses = classNames(
          'col-span-8 lg:col-span-6 grid cursor-pointer grid-cols-12 gap-x-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 p-4 dark:hover:bg-neutral-900 dark:bg-neutral-800'
        )

        const trait = pixelPoolyItems.find((l) => l.layer == item.layer)?.elements.find((t) => t.frame == item.frame)

        return (
          <div key={`inventory_${item.layer}-${item.frame}`} className={itemClasses}>
            <div className="flex-center col-span-4 flex ">
              <span className="pt-4">
                {trait && trait.croppedSVG ? <img src={trait.croppedSVG} className="h-20 w-20" alt="owned-trait" /> : null}
              </span>
            </div>
            <div className="col-span-8">
              <h2 className="mb-4 text-3xl font-bold">{menuMain.find((x) => x.items.find((y) => y.layer == item.layer) != null)?.items[0].label}</h2>
              <h3 className="mb-3 text-2xl font-bold">{item.traitName}</h3>
              <p className="text-sm">{item.traitDescription}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PixelPoolyInventoryList
