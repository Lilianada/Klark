"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"

export function CalendarComp() {
  const [date, setDate] = useState(new Date())

  return (
    <Card className="w-full">
      <div className="py-4 px-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full" 
        />
      </div>
    </Card>
  )
}
