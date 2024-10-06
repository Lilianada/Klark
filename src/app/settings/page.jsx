

export const metadata = {
  title: 'Settings',
}

import React from 'react'
import SettingIndex from '.'
import { Heading } from '@/components/heading'
import { Divider } from '@/components/divider'

export default function Settings() {
  return (
    <div className="mx-auto max-w-4xl">
    <Heading >Settings</Heading>
    {/* <Divider className="my-10 mt-6" /> */}

    <SettingIndex />
    </div>

  )
}
