import { useCallback } from 'react'

import { SetStateAction, WritableAtom, atom, useAtom } from 'jotai'

const DEFAULT_EQUIPER = [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
// TODO: set the default to the current pixel pooly equiped traits

let strAtom: WritableAtom<number[], SetStateAction<number[]>>
strAtom = atom(DEFAULT_EQUIPER)
if (typeof window !== 'undefined') {
  // strAtom = atom(JSON.parse(window?.localStorage.getItem('builder') || `${DEFAULT_BUILDER}`))
  // strAtom = atom(JSON.parse(window?.localStorage.getItem('builder')) || `${DEFAULT_BUILDER}`)
} else {
  strAtom = atom(DEFAULT_EQUIPER)
}

export const pixelPoolyEquiper = atom(
  (get) => get(strAtom),
  (get, set, newStr: Array<number>) => {
    set(strAtom, newStr)
    localStorage.setItem('equiper', newStr.toString())
  }
)

export const usePixelPoolyEquiper = () => {
  const [mode, setMode] = useAtom(pixelPoolyEquiper)
  const setLayerFrame = useCallback(
    (layer: number, frame: number) => {
      const newEquiper = [...mode]
      newEquiper[layer] = frame
      setMode(newEquiper)
    },
    [mode, setMode]
  )
  return [mode, setLayerFrame] as const
}
