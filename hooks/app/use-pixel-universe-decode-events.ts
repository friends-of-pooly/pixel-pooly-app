import { useEffect, useState } from 'react'

import { utils } from 'ethers'
import { useWaitForTransaction } from 'wagmi'

import { pixelPoolyABI } from '@/lib/blockchain'

export function usePixelUniverseDecodeEvents(hash: string): any {
  const contractInterface = new utils.Interface(pixelPoolyABI)

  const { data, isSuccess, isError, isLoading } = useWaitForTransaction({
    hash: hash as `0x${string}`,
  })

  const [decodedEvents, setDecodedEvents] = useState<any>()
  useEffect(() => {
    if (isSuccess) {
      // @ts-ignore
      const decoded = contractInterface.parseLog(data?.logs[0])
      setDecodedEvents(decoded)
    }
  }, [isSuccess])

  return {
    data: decodedEvents,
    isSuccess,
    isError,
    isLoading,
  }
}

export default usePixelUniverseDecodeEvents
