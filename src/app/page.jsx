import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Checkbox, CheckboxField, CheckboxGroup } from '@/components/checkbox'
import { Description, Fieldset, Label } from '@/components/fieldset'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import Timer from '@/components/timer'
import { ClipboardDocumentListIcon, ClockIcon, PlusCircleIcon, PlusIcon, UserGroupIcon } from '@heroicons/react/16/solid'

function TaskSummary({ label, description }) {
  return (
    <CheckboxGroup>
      <CheckboxField>
        <Checkbox name="task summary" value={description} defaultChecked />
        <Label>{label}</Label>
        <Description>{description}</Description>
      </CheckboxField>
    </CheckboxGroup>
  )
}

function QuickAction({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-4 w-4 text-zinc-500" />}
      <span>{title}</span>
    </div>
  )
}

{/* <Navbar>
  <NavbarSection>
    <NavbarItem href="/search" aria-label="Search">
      <MagnifyingGlassIcon />
    </NavbarItem>
    <NavbarItem href="/inbox" aria-label="Inbox">
      <InboxIcon />
    </NavbarItem>
  </NavbarSection>
</Navbar> */}

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
    <div className="rounded-lg border border-zinc-700 p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg/6 font-medium sm:text-sm/6">{title}</div>
        {Icon && <Icon className="mr-2 h-4 w-4 text-zinc-500" />}
      </div>

      <Timer />
    </div>
  )
}

function Wrapper({ title, children, icon: Icon }) {
  return (
    <div className="rounded-lg border border-zinc-700 p-4">
      <div className="flex items-center justify-between">
        <Subheading>{title}</Subheading>
        <Button outline className="text-sm cursor-pointer">
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
    <div className="flex justify-between items-center">
      <Heading>Good afternoon, Erica</Heading>
      <QuickAction icon={PlusCircleIcon} />
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

      {/* Stats for employee and customer total  */}
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <ClockInOut title="Clock In/Out" icon={ClockIcon} value="5" change="+15%" text="from yesterday" />
        <Stat title="Total Employees" icon={UserGroupIcon} value="122" change="+0%" text="from last month" />
        <Stat title="Total Customers" icon={UserGroupIcon} value="455" change="-15%" text="from last week" />
        <Stat
          title="Total Tasks Opened"
          icon={ClipboardDocumentListIcon}
          value="5"
          change="+15%"
          text="from yesterday"
        />
      </div>

      {/* Tasks */}
      <div className="mt-4">
        {/* <Subheading>Daily Schedules</Subheading> */}

        <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <Wrapper title="Task Summary" icon={PlusIcon}>
            <Fieldset>
              <TaskSummary label="Send email to George Bush" description="4 October, 2024 at 13:09pm" />
              <TaskSummary label="Respond to Queen Elizabeth" description="24 September, 2024 at 15:09pm" />
              <TaskSummary label="Send email to Anthony Joshua" description="14 August, 2024 at 11:00pm" />
            </Fieldset>
          </Wrapper>

          <Wrapper title="Invoice Overview" icon={PlusIcon}>
            <Fieldset>
              <TaskSummary label="Meeting with the board" description="4 October, 2024 at 13:09pm" />
              <TaskSummary label="Meeting with the board" description="24 September, 2024 at 15:09pm" />
              <TaskSummary label="Meeting with the board" description="14 August, 2024 at 11:00pm" />
            </Fieldset>
          </Wrapper>

          <Wrapper title="Reminders" icon={PlusIcon}>
            <Fieldset>
              <TaskSummary label="Meeting with the board" description="4 October, 2024 at 13:09pm" />
              <TaskSummary label="Meeting with the board" description="24 September, 2024 at 15:09pm" />
              <TaskSummary label="Meeting with the board" description="14 August, 2024 at 11:00pm" />
            </Fieldset>
          </Wrapper>
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
