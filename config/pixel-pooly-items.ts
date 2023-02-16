import {
  pixelPoolyBackground,
  pixelPoolyBody,
  pixelPoolyBodyAcc,
  pixelPoolyFaceAcc,
  pixelPoolyHead,
  pixelPoolyHeadAcc,
  pixelPoolyLeft,
  pixelPoolyLeftAcc,
  pixelPoolyRight,
  pixelPoolyRightAcc,
} from '@/data'
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
    elements: pixelPoolyBackground,
  },
  {
    layer: 2,
    title: 'Head',
    // Icon: PixelHead,
    elements: pixelPoolyHead,
  },
  {
    layer: 6,
    title: 'Head Acc',
    // Icon: PixelHeadAcc,
    elements: pixelPoolyHeadAcc,
  },
  {
    layer: 7,
    title: 'Face Acc',
    // Icon: PixelFaceAcc,
    elements: pixelPoolyFaceAcc,
  },
  {
    layer: 1,
    title: 'Body',
    // Icon: PixelBody,
    elements: pixelPoolyBody,
  },
  {
    layer: 8,
    title: 'Body Acc',
    // Icon: PixelBodyAcc,
    elements: pixelPoolyBodyAcc,
  },
  {
    layer: 4,
    title: 'Left',
    // Icon: PixelLeft,
    elements: pixelPoolyLeft,
  },
  {
    layer: 10,
    title: 'Left Acc',
    // Icon: PixelLeftWingAcc,
    elements: pixelPoolyLeftAcc,
  },
  {
    layer: 5,
    title: 'Right',
    // Icon: PixelRight,
    elements: pixelPoolyRight,
  },
  {
    layer: 11,
    title: 'Right Acc',
    // Icon: PixelRightWingAcc,
    elements: pixelPoolyRightAcc,
  },
]

export default pixelPoolyItems
