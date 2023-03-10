import * as React from 'react'

import classNames from 'clsx'

import PixelPoolyTraitLayerName from '@/components/pixel-pooly-trait-layer-name'
import PixelPoolyTraitName from '@/components/pixel-pooly-trait-name'
import PixelPoolyTraitTier from '@/components/pixel-pooly-trait-tier'
import pixelPoolyItems from '@/config/pixel-pooly-items-v2'

import PixelPoolyEquipTraitButton from './pixel-pooly-equip-trait-button'

interface PixelPoolyInventoryListProps {
  className?: string
  tokenId: any
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
  character: {
    frame: number
    layer: number
  }[]
}

export const PixelPoolyInventoryList = ({ className, tokenId, ownedTraits, character }: PixelPoolyInventoryListProps) => {
  const classes = classNames(className, 'PixelPoolyInventoryList', 'flex flex-row gap-10 overflow-x-auto')
  return (
    <div className={classes}>
      {ownedTraits.map((item, index) => {
        const isEquiped = character.find((x) => x.frame == item.frame && x.layer == item.layer)
        const itemClasses = classNames(
          'relative mt-2 mb-2 col-span-8 lg:col-span-6 grid cursor-pointer grid-cols-12 gap-x-4 rounded-lg bg-neutral-100 hover:bg-neutral-200 p-4 dark:hover:bg-neutral-900 dark:bg-neutral-800',
          {
            'border border-4 border-b-8 border-indigo-500/100': isEquiped,
          }
        )

        const trait = pixelPoolyItems.find((l) => l.layer == item.layer)?.elements.find((t) => t.frame == item.frame)

        return (
          <div key={`inventory_${item.layer}-${item.frame}`} className={itemClasses}>
            <div className="flex-center col-span-12 flex">
              <PixelPoolyTraitName className="font-raleway text-xl font-bold" layer={item.layer} frame={item.frame} />
            </div>
            <span className="absolute -right-2 -top-4">
              <PixelPoolyTraitTier className="mt-2 text-sm" layer={item.layer} frame={item.frame} />
            </span>
            <div className="flex-center col-span-4 flex ">
              <span className="pt-4">
                {trait && trait.croppedSVG ? <img src={trait.croppedSVG} className="h-20 w-20" alt="owned-trait" /> : null}
              </span>
            </div>
            <div className="col-span-8">
              <PixelPoolyTraitLayerName className="mt-2 font-raleway text-sm font-medium text-neutral-500" layer={item.layer} frame={item.frame} />
              <p className="text-left text-sm">{item.traitDescription}</p>
            </div>
            <div className="flex-center col-span-12 mt-2 flex">
              {isEquiped ? null : (
                <PixelPoolyEquipTraitButton
                  tokenId={tokenId}
                  className="btn-purple btn-pill bg-gradient-color btn-xl mt-5 w-full py-6 text-2xl"
                  layer={item.layer}
                  frame={item.frame}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PixelPoolyInventoryList
