'use client'

import { Button } from '@/components/button'
import { CreditCardIcon, KeyIcon, SquaresPlusIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import General from './general'
import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar'

const tabs = [
  { name: 'General', content: <General />, icon: UserCircleIcon },
  { name: 'User & Permissions', content: 'User & Permissions Content', icon: UserGroupIcon },
  { name: 'Integrations', content: 'Integrations Content', icon: SquaresPlusIcon },
  { name: 'Data Privacy', content: 'Data Privacy Content', icon: SquaresPlusIcon },
  { name: 'Password', content: 'Password Content', icon: KeyIcon },
  { name: 'Plan & Billing', content: 'Plan & Billing Content', icon: CreditCardIcon },
]

export default function SettingIndex() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="flex flex-col mt-6">
      {/* Navbar for tab switching */}
      <Navbar>
        <NavbarSection className="overflow-scroll sm:overflow-visible">
          {tabs.map((tab, index) => (
            <NavbarItem
              key={tab.name}
              icon={tab.icon}
              current={selectedTab === index}
              onClick={() => setSelectedTab(index)} 
              className="p-0 "
            >
              {tab.name}
            </NavbarItem>
          ))}
        </NavbarSection>
      </Navbar>

      {/* Main Content */}
      <div className="w-full space-y-6 sm:px-6 lg:px-0 mt-6">
        {/* Render the content based on the selected tab */}
        <div>
          {tabs[selectedTab].content}
        </div>

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
