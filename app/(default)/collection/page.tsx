'use client'

import { useAccount, useChainId, useQuery } from 'wagmi'

import { LinkComponent } from '@/components/shared/LinkComponent'
import { alchemyOptimism, alchemyOptimismTestnet } from '@/data/alchemy'
import { useContractAutoLoad } from '@/hooks/use-contract-auto-load'
import { useTokensWatching } from '@/lib/state/token'

export default function Collection({ params }: any) {
  const contract = useContractAutoLoad('PixelPooly')
  const chainId = useChainId()
  const [tokens] = useTokensWatching()
  const { address } = useAccount()

  const { data } = useQuery(['collection', params, chainId], async () => {
    if (chainId == 10) {
      const res = alchemyOptimism.nft.getNftsForOwner(address as string, {
        contractAddresses: [contract.address],
      })
      return res
    } else {
      const res = alchemyOptimismTestnet.nft.getNftsForOwner(address as string, {
        contractAddresses: [contract.address],
      })
      return res
    }
  })

  if (!data?.ownedNfts)
    return (
      <div className="flex-center flex h-full min-h-[50vh]">
        <h3 className="text-lg font-normal">Your Pixel Pooly Collection is Empty</h3>
      </div>
    )
  return (
    <div className="container max-w-screen-xl lg:py-20">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Collection</h1>
      </div>
      <hr className="my-8" />
      <div className="grid grid-cols-12 gap-12">
        {data?.ownedNfts?.map((token, idx) => {
          return (
            <div key={idx} className="card col-span-12 lg:col-span-4">
              <LinkComponent href={`/token/${token.tokenId}`}>
                <img src={token?.rawMetadata?.image} className="w-full rounded-lg border-2 shadow-lg " />
              </LinkComponent>
              <h3 className="mb-2 mt-3 text-2xl font-bold">{token?.rawMetadata?.name}</h3>
              <p className="text-lg font-normal">{token?.rawMetadata?.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
