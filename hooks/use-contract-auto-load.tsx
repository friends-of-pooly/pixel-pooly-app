import { useNetwork } from 'wagmi'

import { pixelStoreABI, pixelUniverseABI } from '@/lib/blockchain'

export function useContractAutoLoad(contract: string, chainId?: number): any {
  const { chain } = useNetwork()
  switch (chainId || chain?.id) {
    case 420:
      switch (contract) {
        case 'PixelPooly':
          return {
            address: '0x1af7bBb04793E6eb5F7eCB7A0f5B2f697d0398C4',
            abi: pixelUniverseABI,
          }
        case 'PixelUniverse':
          return {
            address: '0x7A00f743FEE6A88037A2D4f4963c4a87a49e8928',
            abi: pixelUniverseABI,
          }
        case 'PixelPoolyStorage':
          return {
            address: '0xd6537F6C2A2c78438c796A3Db48c985BEE0adDbc',
            abi: pixelStoreABI,
          }
        case 'PixelStore':
          return {
            address: '0x9F87290F9de941668a8C26BcC04A28e306CDa890',
            abi: pixelStoreABI,
          }
        default:
          throw new Error(`Unknown contract ${contract}`)
      }
    case 31337:
      switch (contract) {
        case 'PixelPooly':
          return {
            address: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
            abi: pixelUniverseABI,
          }
        case 'PixelUniverse':
          return {
            address: '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e',
            abi: pixelUniverseABI,
          }
        case 'PixelPoolyStorage':
          return {
            address: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
            abi: pixelStoreABI,
          }
        case 'PixelStore':
          return {
            address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
            abi: pixelStoreABI,
          }
        default:
          throw new Error(`Unknown contract ${contract}`)
      }
    default:
    // throw new Error(`Unknown network ${chain?.id}`)
  }
}

//  "svg" deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 279078 gas
//  "svgUtils" deployed at 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 with 66022 gas
//  "SVGColor" deployed at 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 with 1126602 gas
//  "SVGLibrary" deployed at 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 with 235050 gas
//  "SVGRegistry" deployed at 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9 with 625401 gas
//  "PixelPoolyAssets" deployed at 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707 with 1344827 gas
//  "PixelStore" deployed at 0x0165878A594ca255338adfa4d48449f69242Eb8F with 1428682 gas
//  "PixelPoolyRender" deployed at 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853 with 1243252 gas
//  "PixelPoolyTraits" deployed at 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6 with 742950 gas
//  "PixelPoolyStorage" deployed at 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318 with 4935534 gas
//  "PixelPooly" deployed at 0x610178dA211FEF7D417bC0e6FeD39F05609AD788 with 2176072 gas
//  "PixelUniverse" deployed at 0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e with 1222227 gas
