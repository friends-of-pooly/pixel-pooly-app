import { useEffect, useState } from 'react'

import { usePixelPoolyTokenUri } from '@/lib/blockchain'

export const useERC721TokenURIFormatted = (contractAddress: string, id: string) => {
  const { data, ...rest } = usePixelPoolyTokenUri({
    address: contractAddress,
    args: [id],
  })

  const [attributes, setAttributes] = useState()
  useEffect(() => {
    if (data) {
      ;(async () => {
        if (data) {
          const res = await fetch(data as unknown as string)
          const json = await res.json()
          setAttributes(json)
        }
      })()
    }
  }, [data])

  return { data: attributes, rest }
}
