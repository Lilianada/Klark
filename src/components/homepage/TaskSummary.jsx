'use client'

import { CheckIcon } from '@radix-ui/react-icons'
import { Checkbox } from '@/components/ui/checkbox'
import { XMarkIcon } from '@heroicons/react/16/solid'
// import { Description, Label } from './klark/fieldset'

export function TaskSummary({ label, description, status }) {
  const statusIcon = status === 'completed' ? (
    <CheckIcon className="h-3 w-3 text-zinc-500" />
  ) : (
    <XMarkIcon className="h-3 w-3 text-zinc-500" />
  )
  return (
    <div className="items-top flex space-x-2">
      {
        status && (
          <Checkbox id="terms1" />
        )
      }
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        <div className="flex items-center gap-2">
        <p className="text-muted-foreground text-xs">
          {description}
          
          </p>
        {
          status && (
            <div className="w-fit border border-zinc-600 rounded-full">
              {statusIcon}
            </div>
          )
        }
        </div>
          
      </div>
    </div>
  )
}

export function Reminder ({ title, description, time }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 bg-lime-500 rounded-full" />
        <div className="text-sm font-medium">{title}</div>
      </div>
      <div className="text-muted-foreground text-sm">
        {description} at {time}
      </div>
    </div>
  )
}