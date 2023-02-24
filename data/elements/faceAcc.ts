import { pixelFaceAccBubblepipe, pixelFaceAccLoveletter, pixelFaceAccMonocle, pixelFaceAccSmokes } from './output/faceAcc'

export const pixelPoolyFaceAcc = [
  {
    tier: 0,
    layer: 7,
    frame: 0,
    expiry: 0,
    traitName: 'None',
    traitDescription: "Keep that right wing open for what's coming next.",
    stats: [],
    SVG: '',
  },
  {
    tier: 0,
    layer: 7,
    frame: 1,
    expiry: 0,
    traitName: 'Bubble Pipe',
    traitDescription: 'Hide Pooly in a cloud of bubbles to escape from prying eyes.',
    stats: [
      { categoryType: 'charisma', value: 1 },
      { categoryType: 'agility', value: 1 },
    ],
    SVG: pixelFaceAccBubblepipe.data,
  },
  {
    tier: 0,
    layer: 7,
    frame: 2,
    expiry: 0,
    traitName: 'Smokes',
    traitDescription: 'Sit back, relax, and shroud Pooly in cloud.',
    stats: [],
    SVG: pixelFaceAccSmokes.data,
  },
  {
    tier: 0,
    layer: 7,
    frame: 3,
    expiry: 0,
    traitName: 'Love Letter',
    traitDescription: 'Pooly, has a part time delivery service, not just for Kiki.',
    stats: [
      { categoryType: 'defense', value: 2 },
      { categoryType: 'wisdom', value: 1 },
    ],
    SVG: pixelFaceAccLoveletter.data,
  },
  {
    tier: 0,
    layer: 7,
    frame: 4,
    expiry: 0,
    traitName: 'Monocle',
    traitDescription: 'Posh Pooly requires a monocle for gestures and emphasis.',
    stats: [
      { categoryType: 'charisma', value: 2 },
      { categoryType: 'wisdom', value: 1 },
    ],
    SVG: pixelFaceAccMonocle.data,
  },
]

export default pixelPoolyFaceAcc
