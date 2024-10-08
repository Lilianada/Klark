import { Avatar } from '@/components/catalyst/avatar'
import { Button } from '@/components/catalyst/button'
import { Heading } from '@/components/catalyst/heading'
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/catalyst/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/catalyst/table'
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
            <TableHeader>Role</TableHeader>
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
              <TableCell>{employee.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="mt-6">
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">65</PaginationPage>
          <PaginationPage href="?page=66">66</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>
    </>
  )
}
