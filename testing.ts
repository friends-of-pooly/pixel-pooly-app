import { Contract, constants } from 'ethers'
import { erc20ABI } from 'wagmi'
const contract = new Contract(constants.AddressZero, erc20ABI)
const encoded = contract.populateTransaction.balanceOf('0x0000000000000000000000000000000000000000')
console.log(encoded, 'balanceOfEncoded')
