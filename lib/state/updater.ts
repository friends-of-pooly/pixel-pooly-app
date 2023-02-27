import { useCallback } from 'react'

import { SetStateAction, WritableAtom, atom, useAtom } from 'jotai'

const DEFAULT_UPDATER = [0, 1, 1, 31, 0, 0, 0, 0, 0, 0, 0, 0]
// TODO: set the default to the current pixel pooly equiped traits

let strAtom: WritableAtom<number[], SetStateAction<number[]>>
strAtom = atom(DEFAULT_UPDATER)
if (typeof window !== 'undefined') {
  strAtom = atom(window?.localStorage.getItem('updater') ? JSON.parse('[' + window?.localStorage.getItem('updater') + ']') : DEFAULT_UPDATER)
} else {
  strAtom = atom(DEFAULT_UPDATER)
}

export const pixelPoolyUpdater = atom(
  (get) => get(strAtom),
  (get, set, newStr: Array<number>) => {
    set(strAtom, newStr)
    localStorage.setItem('updater', newStr.toString())
  }
)

export const usePixelPoolyUpdater = () => {
  const [mode, setMode] = useAtom(pixelPoolyUpdater)
  const setLayerFrame = useCallback(
    (layer: number, frame: number) => {
      const newUpdater = [...mode]
      newUpdater[layer] = frame
      setMode(newUpdater)
    },
    [mode, setMode]
  )
  const setLayerAndFrames = useCallback(
    (layersAndFrames: any) => {
      setMode(layersAndFrames)
    },
    [mode, setMode]
  )
  return [mode, setLayerFrame, setLayerAndFrames] as const
}
