import { useContext, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useTokensWatching } from '@/lib/state/token'

import { usePixelPoolyDecodeEvents } from './use-pixel-pooly-decode-events'

export function useAddMintedToken(hash: string) {
  const [_tokens, addToken] = useTokensWatching()
  const { data, isSuccess } = usePixelPoolyDecodeEvents(hash)
  const router = useRouter()
  useEffect(() => {
    if (isSuccess && data && data.name === 'Transfer' && data.args.from === '0x0000000000000000000000000000000000000000') {
      addToken({ id: data.args.id.toString(), hash })
      router.push(`/token/${data.args.id.toString()}`)
    }
  }, [isSuccess, data])
}

export default useAddMintedToken
