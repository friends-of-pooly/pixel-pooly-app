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
