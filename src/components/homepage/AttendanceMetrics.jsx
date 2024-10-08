'use client'

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

// Updated chart data for attendance
const chartData = [
  { attendance: 'present', employees: 45 },
  { attendance: 'absent', employees: 5 },
  { attendance: 'leave', employees: 10 },
  { attendance: 'sick-leave', employees: 3 },
  { attendance: 'other', employees: 1 },
]

const chartConfig = {
  employees: {
    label: 'Employees',
    color: "hsl(var(--chart-1))",
  },
}

export function AttendanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Metrics</CardTitle>
        <CardDescription>A summary of employee attendance metrics.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="attendance" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="employees" fill="var(--color-employees)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
