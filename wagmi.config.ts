import { defineConfig } from '@wagmi/cli'
import { hardhat, react } from '@wagmi/cli/plugins'
import { erc20ABI } from 'wagmi'

export default defineConfig({
  out: 'lib/blockchain.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20ABI,
    },
  ],
  plugins: [
    react(),
    hardhat({
      commands: {
        clean: 'pnpm hardhat clean',
        build: 'pnpm hardhat compile',
        rebuild: 'pnpm hardhat compile',
      },
      include: [
        'PixelPooly.json',
        'PixelPoolyAssets.json',
        'PixelPoolyRender.json',
        'PixelPoolyStorage.json',
        'PixelPoolyTraits.json',
        'PixelStore.json',
        'PixelUniverse.json',
      ],
      project: '../pixel-pooly-sol/contracts/pixel-pooly',
    }),
  ],
})
