import { siteConfig } from './site'

export const menuMain = [
  {
    headerLabel: 'Body',
    items: [
      {
        label: 'Head',
        alias: 'head',
        icon: '/icons/menu/head.svg',
        layer: 2,
      },
      {
        label: 'Body',
        alias: 'body',
        icon: '/icons/menu/body.svg',
        layer: 1,
      },
      {
        label: 'Left Wing',
        alias: 'left-wing',
        icon: '/icons/menu/left-wing.svg',
        layer: 4,
      },
      {
        label: 'Right Wing',
        alias: 'right-wing',
        icon: '/icons/menu/right-wing.svg',
        layer: 5,
      },
    ],
  },
  {
    headerLabel: 'Accessories',
    items: [
      {
        label: 'Head',
        alias: 'head',
        icon: '/icons/menu/head-acc.svg',
        layer: 6,
      },
      {
        label: 'Face',
        alias: 'face',
        icon: '/icons/menu/face-acc.svg',
        layer: 7,
      },
      {
        label: 'Body',
        alias: 'body',
        icon: '/icons/menu/body-acc.svg',
        layer: 8,
      },
      {
        label: 'Left Wing',
        alias: 'left-wing',
        icon: '/icons/menu/leftWingAcc-defendershield.svg',
        layer: 10,
      },
      {
        label: 'Right Wing',
        alias: 'right-wing',
        icon: '/icons/menu/rightWingAcc-gavel.svg',
        layer: 11,
      },
    ],
  },
  {
    headerLabel: 'Extras',
    items: [
      {
        layer: 0,
        label: 'Backgrounds',
        alias: 'background',
        icon: '/icons/menu/background.svg',
      },
    ],
  },
]
