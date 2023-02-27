import {
  optionsBG,
  optionsBody,
  optionsBodyAcc,
  optionsFaceAcc,
  optionsHead,
  optionsHeadAcc,
  optionsLeft,
  optionsLeftWingAcc,
  optionsRight,
  optionsRightWingAcc,
} from '@/data/pooly'
// import PixelBackground from '@/public/beta/0-background/bg-beach.svg'
// import PixelBody from '@/public/beta/1-body/cropped/body-OPshirt.svg'
// import PixelLeftWingAcc from '@/public/beta/10-leftWingAcc/cropped/leftWingAcc-defendershield.svg'
// import PixelRightWingAcc from '@/public/beta/11-rightWingAcc/cropped/rightWingAcc-gavel.svg'
// import PixelHead from '@/public/beta/2-head/cropped/head-pooly-tornadocooly.svg'
// import PixelBodyLower from '@/public/beta/3-bodyLower/cropped/feet-sitting.svg'
// import PixelLeft from '@/public/beta/4-left/cropped/left-wing.svg'
// import PixelRight from '@/public/beta/5-right/cropped/right-wing.svg'
// import PixelHeadAcc from '@/public/beta/6-headAcc/cropped/hatAcc-tophat.svg'
// import PixelFaceAcc from '@/public/beta/7-faceAcc/cropped/faceAcc-loveletter.svg'
// import PixelBodyAcc from '@/public/beta/8-bodyAcc/cropped/bodyAcc-flamingo.svg'

export const pixelPoolyItems = [
  {
    layer: 0,
    title: 'Background',
    // Icon: PixelBackground,
    elements: optionsBG,
  },
  {
    layer: 5,
    title: 'Head',
    // Icon: PixelHead,
    elements: optionsHead,
  },
  {
    layer: 6,
    title: 'Head Acc',
    // Icon: PixelHeadAcc,
    elements: optionsHeadAcc,
  },
  {
    layer: 11,
    title: 'Face Acc',
    // Icon: PixelFaceAcc,
    elements: optionsFaceAcc,
  },
  {
    layer: 3,
    title: 'Body',
    // Icon: PixelBody,
    elements: optionsBody,
  },
  {
    layer: 4,
    title: 'Body Acc',
    // Icon: PixelBodyAcc,
    elements: optionsBodyAcc,
  },
  {
    layer: 4,
    title: 'Left',
    // Icon: PixelLeft,
    elements: optionsLeft,
  },
  {
    layer: 9,
    title: 'Left Acc',
    // Icon: PixelLeftWingAcc,
    elements: optionsLeftWingAcc,
  },
  {
    layer: 1,
    title: 'Right',
    // Icon: PixelRight,
    elements: optionsRight,
  },
  {
    layer: 10,
    title: 'Right Acc',
    // Icon: PixelRightWingAcc,
    elements: optionsRightWingAcc,
  },
]

export default pixelPoolyItems
