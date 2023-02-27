'use client'
import * as Tabs from '@radix-ui/react-tabs'

import MenuDashboardBuilder from '@/components/layout/menu-dashboard-builder'
import PixelPoolyLayerFrameList from '@/components/PixelPoolyLayerFrameList'
import PixelPoolyPreview from '@/components/PixelPoolyPreview'
import PixelPoolyTraitsBoostedPreview from '@/components/PixelPoolyTraitsBoostedPreview'
import PixelStoreMintButton from '@/components/PixelStoreMintButton'
import PixelStoreMintPrice from '@/components/PixelStoreMintPrice'
import PixelStoreMintPriceSplit from '@/components/PixelStoreMintPriceSplit'
import { LinkComponent } from '@/components/shared/LinkComponent'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DialogHeader } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import pixelPoolyItems from '@/config/pixel-pooly-items-v2'

export default function Home() {
  return (
    <section className="block py-32">
      <Tabs.Root defaultValue="tab5">
        <div className="max-w-screen-3xl container grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-3">
            <Tabs.List>
              <MenuDashboardBuilder />
            </Tabs.List>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-gradient-color mb-5 flex items-center justify-between rounded-md py-3 px-4 shadow-md">
              <span className="">Handcraft a PixelPooly and contribute to future of DeFi</span>
              <LinkComponent className="font-bold" href="/guide">
                Guide
              </LinkComponent>
            </div>
            <div className=" max-h-[80vh] overflow-auto  rounded-lg bg-neutral-50 px-8 dark:bg-neutral-700 ">
              {pixelPoolyItems.map((item, index) => {
                return (
                  <div key={index} className="mb-10">
                    <Tabs.Content value={`tab${item.layer}`}>
                      <PixelPoolyLayerFrameList layer={item.layer} items={item.elements} />
                    </Tabs.Content>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-gradient-color min-h-[300px] rounded-xl rounded-t-3xl p-6 dark:bg-purple-700">
              <Dialog>
                <DialogTrigger>
                  <PixelPoolyPreview className="-mt-20 w-full rounded-xl border-4 shadow-2xl" />
                </DialogTrigger>
                <DialogContent className="container">
                  <DialogHeader>
                    <div className="container grid grid-cols-12 gap-5 p-10">
                      <div className="col-span-12 lg:col-span-6">
                        <PixelPoolyPreview className=" w-full rounded-xl border-4 shadow-2xl" />
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <PixelPoolyTraitsBoostedPreview />
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <div className="mt-6 rounded-lg p-4 shadow-xl dark:bg-purple-900">
                <PixelPoolyTraitsBoostedPreview />
              </div>
            </div>
            <div className="darK:bg-neutral-900 mt-3 rounded-lg p-4">
              <div className="ic jb flex">
                <span className="font-lg font-bold">Total Cost</span>
                <span className="flex items-center text-2xl font-bold">
                  <PixelStoreMintPrice className="mr-2" /> <span className="">ETH</span>
                </span>
              </div>
              <Separator className="my-4" />
              <div className="ic jb mb-4 flex">
                <span className="text-lg font-bold">Lobby3 (80%)</span>
                <span className="flex items-center">
                  <PixelStoreMintPriceSplit percentage="80" />
                  <span className="ml-2">ETH</span>
                </span>
              </div>
              <div className="ic jb flex">
                <span className="font-sm">Friends of Pooly (20%)</span>
                <span className="flex items-center">
                  <PixelStoreMintPriceSplit percentage="20" />
                  <span className="ml-2">ETH</span>
                </span>
              </div>
              <PixelStoreMintButton className="btn-purple btn-pill bg-gradient-color btn-xl mt-5 w-full py-6 text-2xl" label="Mint Pixel Pooly" />
            </div>
          </div>
        </div>
      </Tabs.Root>
    </section>
  )
}
