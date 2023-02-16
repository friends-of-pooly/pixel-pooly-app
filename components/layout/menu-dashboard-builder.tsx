import * as React from 'react'

import { Separator } from '@radix-ui/react-dropdown-menu'
import * as Tabs from '@radix-ui/react-tabs'
import classNames from 'clsx'
import Image from 'next/image'

import { menuMain } from '@/config/menu-items'

interface MenuDashboardBuilderProps {
  className?: string
}

const MenuItem = (props: any) => {
  return (
    <Tabs.Trigger value={`tab${props.layer}`}>
      <div className="dashboard-tab">
        <span className="text-xl">{props.label}</span>
        <Image src={props.icon} width={32} height={32} alt={`${props.label} icon`} />
      </div>
    </Tabs.Trigger>
  )
}

export const MenuDashboardBuilder = ({ className }: MenuDashboardBuilderProps) => {
  const classes = classNames(className, 'MenuDashboardBuilder')
  return (
    <div className={classes}>
      {menuMain.map((item: any, index) => {
        return (
          <>
            <h3 className="text-3xl font-bold">{item.headerLabel}</h3>
            <Separator className="my-3 bg-yellow-300" />
            <div className="flex  flex-col">
              {item.items.map((action: any, index: number) => {
                return <MenuItem key={index} layer={action.layer} {...action} />
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default MenuDashboardBuilder
