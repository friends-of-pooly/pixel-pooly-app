'use client'

import classNames from 'clsx'

import { LinkComponent } from '@/components/shared/LinkComponent'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { useERC721TokenURIFormatted } from '@/hooks/use-erc721-token-uri-formatted'
import { useTokensWatching } from '@/lib/state/token'

interface PixelPoolyImageProps {
  className?: string
  tokenId: string
}

export const PixelPoolyImage = ({ className, tokenId }: PixelPoolyImageProps) => {
  const contract = useContractAutoLoad('PixelPooly')
  const { data } = useERC721TokenURIFormatted(contract?.address, tokenId)
  const classes = classNames(className, 'PixelPoolyImage')
  return (
    <div className={classes}>
      <img src={data?.image} className="w-full rounded-lg border-2 shadow-lg " />
    </div>
  )
}

export default function Collection({ params }: any) {
  const [tokens] = useTokensWatching()
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Collection</h1>
        <button className="btn btn-indigo">Manually Add Token</button>
      </div>
      <hr className="my-8" />
      <div className="grid grid-cols-12 gap-12">
        {tokens.map((token) => {
          return (
            <div className="col-span-12 lg:col-span-4">
              <LinkComponent href={`/token/${token.id}`}>
                <PixelPoolyImage tokenId={token.id} />
              </LinkComponent>
            </div>
          )
        })}
      </div>
    </div>
  )
}
