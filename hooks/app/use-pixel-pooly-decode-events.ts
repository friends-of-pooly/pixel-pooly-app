import { useEffect, useState } from 'react'

import { utils } from 'ethers'
import { useWaitForTransaction } from 'wagmi'

import { pixelPoolyABI } from '@/lib/blockchain'

export function usePixelPoolyDecodeEvents(hash: string): any {
  const contractInterface = new utils.Interface(pixelPoolyABI)

  const { data, error, isSuccess, isError, isLoading } = useWaitForTransaction({
    hash: hash,
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
    error,
    isSuccess,
    isError,
    isLoading,
  }
}

export default usePixelPoolyDecodeEvents
