import { useCallback } from 'react'

import { SetStateAction, WritableAtom, atom, useAtom } from 'jotai'

const DEFAULT_BUILDER = [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]

let strAtom: WritableAtom<number[], SetStateAction<number[]>>
strAtom = atom(DEFAULT_BUILDER)
if (typeof window !== 'undefined') {
  // strAtom = atom(JSON.parse(window?.localStorage.getItem('builder') || `${DEFAULT_BUILDER}`))
  // strAtom = atom(JSON.parse(window?.localStorage.getItem('builder')) || `${DEFAULT_BUILDER}`)
} else {
  strAtom = atom(DEFAULT_BUILDER)
}

export const pixelPoolyBuilder = atom(
  (get) => get(strAtom),
  (get, set, newStr: Array<number>) => {
    set(strAtom, newStr)
    localStorage.setItem('builder', newStr.toString())
  }
)

export const usePixelPoolyBuilder = () => {
  const [mode, setMode] = useAtom(pixelPoolyBuilder)
  const setLayerFrame = useCallback(
    (layer: number, frame: number) => {
      const newBuilder = [...mode]
      newBuilder[layer] = frame
      setMode(newBuilder)
    },
    [mode, setMode]
  )
  return [mode, setLayerFrame] as const
}
