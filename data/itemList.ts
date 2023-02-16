import {
  pixelPoolyBackground,
  pixelPoolyBody,
  pixelPoolyBodyAcc,
  pixelPoolyBodyLower,
  pixelPoolyFaceAcc,
  pixelPoolyHead,
  pixelPoolyHeadAcc,
  pixelPoolyLeft,
  pixelPoolyLeftAcc,
  pixelPoolyRight,
  pixelPoolyRightAcc,
} from './index'

export const itemList = [
  pixelPoolyBackground,
  pixelPoolyBody,
  pixelPoolyHead,
  pixelPoolyFaceAcc,
  pixelPoolyLeft,
  pixelPoolyRight,
  pixelPoolyBodyAcc,
  pixelPoolyBodyLower,
  pixelPoolyHeadAcc,
  pixelPoolyLeftAcc,
  pixelPoolyRightAcc,
]

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

export function findImageFromLayerAndFrame(layer: number, frame: number) {
  return flatten(itemList).find((item) => item.layer === layer && item.frame === frame)
}
