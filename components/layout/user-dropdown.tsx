import { useState } from 'react'

import { motion } from 'framer-motion'
import { BinaryIcon, LogInIcon, LogOutIcon, Wallet } from 'lucide-react'
import { useAccount } from 'wagmi'

import Popover from '@/components/shared/popover'
import { FADE_IN_ANIMATION_SETTINGS } from '@/config/design'

import BranchIsAuthenticated from '../shared/branch/BranchIsAuthenticated'
import ButtonSIWELogin from '../web3/siwe/ButtonSIWELogin'
import ButtonSIWELogout from '../web3/siwe/ButtonSIWELogout'

export default function UserDropdown() {
  const [openPopover, setOpenPopover] = useState(false)

  const { connector } = useAccount()

  connector?.disconnect

  return (
    <motion.div className="relative inline-block text-left text-neutral-700 dark:text-white" {...FADE_IN_ANIMATION_SETTINGS}>
      <Popover
        content={
          <div className="bg-card w-full rounded-md p-2 sm:w-56">
            <BranchIsAuthenticated>
              <ButtonSIWELogout className="user-dropdown-menu-item">
                <>
                  <LogOutIcon className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </>
              </ButtonSIWELogout>
              <ButtonSIWELogin className="">
                <div className="user-dropdown-menu-item">
                  <LogInIcon className="h-4 w-4" />
                  <span className="text-sm">Web3 Login</span>
                </div>
              </ButtonSIWELogin>
            </BranchIsAuthenticated>
            <span onclick={connector?.disconnect} className="user-dropdown-menu-item">
              <BinaryIcon className="h-4 w-4" />
              <span className="text-sm">Wallet Disconnect</span>
            </span>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}>
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="bg-card flex items-center justify-center overflow-hidden rounded-xl p-3 transition-all duration-75 hover:bg-neutral-100 hover:text-neutral-800 focus:outline-none active:scale-95 ">
          <Wallet className="h-6 w-6" />
        </button>
      </Popover>
    </motion.div>
  )
}
