

export const metadata = {
  title: 'Settings',
}

import React from 'react'
import SettingIndex from '.'
import { Heading } from '@/components/klark/heading'
import { Divider } from '@/components/klark/divider'

export default function Settings() {
  return (
    <div className="mx-auto max-w-4xl">
    <Heading >Settings</Heading>

    <SettingIndex />
    </div>

  )
}
