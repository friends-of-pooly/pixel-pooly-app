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

export const itemList = [
  optionsBG,
  optionsBody,
  optionsBodyAcc,
  optionsHead,
  optionsFaceAcc,
  optionsLeft,
  optionsRight,
  optionsHeadAcc,
  optionsLeftWingAcc,
  optionsRightWingAcc,
]

function flatten(arr: any[]): any[] {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

export function findImageFromLayerAndFrame(layer: number, frame: number) {
  return flatten(itemList).find((item: { layer: number; frame: number }) => item.layer === layer && item.frame === frame)
}
