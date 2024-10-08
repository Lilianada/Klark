import { CalendarComp } from '@/components/CalenderComp'
import { Badge } from '@/components/catalyst/badge'
import { Button } from '@/components/catalyst/button'
import { Heading, Subheading } from '@/components/catalyst/heading'
import { Select } from '@/components/catalyst/select'
import Invoice from '@/components/Invoice'
import { ModeToggle } from '@/components/mode'
import { Reminder, TaskSummary } from '@/components/TaskSummary'
import Timer from '@/components/timer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ClockIcon, DocumentIcon, PlusIcon } from '@heroicons/react/16/solid'
import { Activity, Users } from 'lucide-react'

function QuickAction({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-4 w-4 text-zinc-500" />}
      <span>{title}</span>
    </div>
  )
}

function Stat({ title, value, change, icon: Icon, text }) {
  return (
    <div className="rounded-lg border border-zinc-700 p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg/6 font-medium sm:text-sm/6">{title}</div>
        {Icon && <Icon className="mr-2 h-4 w-4 text-zinc-500" />}
      </div>
      <div className="text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-4 text-sm/6 sm:text-xs/6">
        <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
        <span className="text-zinc-500">{text}</span>
      </div>
    </div>
  )
}

function ClockInOut({ title, icon: Icon }) {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="text-muted-foreground h-4 w-4" />}
      </CardHeader>
      <CardContent>
        <Timer />
      </CardContent>
    </Card>
  )
}

function Wrapper({ title, children, icon: Icon }) {
  return (
    <div className="rounded-lg border border-zinc-700 p-4">
      <div className="flex items-center justify-between">
        <Subheading>{title}</Subheading>
        <Button outline className="cursor-pointer text-sm">
          <Icon className="h-4 w-4 text-zinc-500" />
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-6">{children}</div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading>Good afternoon, Erica</Heading>
        <ModeToggle />
      </div>

      {/* Date dropdown */}
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overview</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div>
      </div>

      <main className="flex flex-1 flex-col gap-4 pt-4 md:gap-8 md:pt-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+3189</div>
              <p className="text-muted-foreground text-xs">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-muted-foreground text-xs">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+134</div>
              <p className="text-muted-foreground text-xs">+19% from last month</p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
              <Activity className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+23</div>
              <p className="text-muted-foreground text-xs">+20 since last hour</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <div class="mt-4 grid gap-4 lg:grid-cols-10">
        {/* Stats for employee and customer total  */}
        <div class="grid gap-y-4 lg:col-span-6 lg:grid-cols-1">
          {/* Tasks */}

          <div className="grid grid-cols-2 gap-4">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Task Summary</CardTitle>
                <DocumentIcon className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent className="mt-3 grid gap-4">
                <TaskSummary
                  label="Send email to George Bush"
                  description="4 October, 2024 at 13:09pm"
                  status="completed"
                />
                <TaskSummary
                  label="Respond to Queen Elizabeth"
                  description="24 September, 2024 at 15:09pm"
                  status="canceled"
                />
                <TaskSummary
                  label="Send email to Anthony Joshua"
                  description="14 August, 2024 at 11:00pm"
                  status="completed"
                />
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reminders</CardTitle>
                <PlusIcon className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardContent className="mt-3 grid gap-4">
                <Reminder label="Meeting with the board" description="4 October, 2024 at 13:09pm" />
                <Reminder label="Meeting with the board" description="24 September, 2024 at 15:09pm" />
                <Reminder label="Meeting with the board" description="14 August, 2024 at 11:00pm" />
              </CardContent>
            </Card>
          </div>

          <Invoice />
        </div>

        <div class="flex flex-col gap-4 lg:col-span-4">
          <ClockInOut title="Clock In / Out" icon={ClockIcon} value="5" change="+15%" text="from yesterday" />
          <CalendarComp />
        </div>
      </div>

      {/* <Subheading className="mt-14">All Employees</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Start date</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.idNo} href={order.url} title={`Order #${order.idNo}`}>
              <TableCell>{order.idNo}</TableCell>
              <TableCell className="text-zinc-500">{order.startDate}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.emailAddress}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar src={order.event.thumbUrl} className="size-6" />
                  <span>{order.event.name}</span>
                </div>
              </TableCell>
              <TableCell>{order.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </>
  )
}
