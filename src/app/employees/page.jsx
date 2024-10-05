import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getEmployees } from '@/data'

export const metadata = {
  title: 'Employees',
}

export default async function Employees() {
  let employees = await getEmployees()

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Employees</Heading>
        <Button className="-my-0.5">Add employee</Button>
      </div>
      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>ID No</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email Address</TableHeader>
            <TableHeader>Start Date</TableHeader>
            <TableHeader className="text-right">Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.idNo} href={employee.url} title={`Order #${employee.idNo}`}>
              <TableCell>{employee.idNo}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar src="/users/erica.jpg" className="size-6" />
                  <span>{employee.name}</span>
                </div>
              </TableCell>
              <TableCell>{employee.emailAddress}</TableCell>
              <TableCell className="text-zinc-500">{employee.startDate}</TableCell>
              <TableCell className="text-right">{employee.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
