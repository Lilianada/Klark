'use client'

import { Button } from '@/components/button'
import { CreditCardIcon, KeyIcon, SquaresPlusIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import General from './general'

const tabs = [
  { name: 'General', content: 'General Settings', icon: UserCircleIcon, current: true },
  { name: 'User & Permissions', content: 'User & Permissions Settings', icon: UserGroupIcon, current: false },
  { name: 'Integrations', content: 'Integration Settings', icon: SquaresPlusIcon, current: false },
  { name: 'Data Privacy', content: 'Data Privacy Settings', icon: SquaresPlusIcon, current: false },
  { name: 'Password', content: 'Password Settings', icon: KeyIcon, current: false },
  { name: 'Plan & Billing', content: 'Plan & Billing Settings', icon: CreditCardIcon, current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tab = ({ children, selectedTab, setPosition, setSelectedTab, index }) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      onClick={() => {
        if (!ref?.current) return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })

        setSelectedTab(index)
      }}
      className={classNames(
        selectedTab === index ? 'text-zinc-300' : 'text-zinc-500 hover:text-zinc-300',
        'relative z-10 block cursor-pointer text-xs capitalize lg:text-sm pb-2 text-nowrap'
      )}
    >
      {children}
    </li>
  )
}

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute bottom-0 z-0 border-b-2 border-white"
    />
  )
}

export default function SettingIndex() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })
  

  return (
    <div className="flex flex-col mt-8">
      {/* Tabs Navigation */}
      <aside className="w-full px-2 py-6 sm:px-6 lg:px-0 lg:py-0">
        <ul className="relative mx-auto mb-8 flex gap-4 md:gap-6 w-full overflow-scroll border-b-2 border-zinc-700 p-1">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.name}
              index={index}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              setPosition={setPosition}
            >
              {tab.name}
            </Tab>
          ))}

          <Cursor position={position} />
        </ul>
      </aside>

      {/* Main Content */}
      <div className="w-full space-y-6 sm:px-6 lg:px-0">
        {selectedTab === 0 && <General />}

        {selectedTab === 1 && <div>User & Permissions Content</div>}

        {selectedTab === 2 && <div>Integrations Content</div>}

        {selectedTab === 3 && <div>Data Privacy Content</div>}

        {selectedTab === 4 && <div>Password Content</div>}

        {selectedTab === 5 && <div>Plan & Billing Content</div>}

        <div className="mt-8 flex justify-end gap-4">
          <Button type="reset" plain>
            Reset
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </div>
    </div>
  )
}
