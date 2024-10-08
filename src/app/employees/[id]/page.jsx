import { Avatar } from '@/components/catalyst/avatar';
import { Badge } from '@/components/catalyst/badge';
import { Button } from '@/components/catalyst/button';
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/catalyst/description-list';
import { Divider } from '@/components/catalyst/divider';
import { Heading, Subheading } from '@/components/catalyst/heading';
import { Link } from '@/components/catalyst/link';
import { getEmployees } from '@/data';
import { CalendarIcon, ChevronLeftIcon } from '@heroicons/react/16/solid';
import { notFound } from 'next/navigation';

export async function getStaticProps({ params }) {
  let employee = await getEmployees(params.idNo);

  if (!employee) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      employee,
    },
  };
}

export default function EmployeeDetails({ employee }) {
  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/employees" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Back to Employees
        </Link>
      </div>
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center gap-4">
          <Heading>{employee.name}</Heading>
          <Badge color="green">{employee.role}</Badge>
        </div>
        <div className="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <CalendarIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
              <span>Start Date: {employee.startDate}</span>
            </span>
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <span>Email: {employee.emailAddress}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Subheading>Employee Information</Subheading>
        <Divider className="mt-4" />
        <DescriptionList>
          <DescriptionTerm>Name</DescriptionTerm>
          <DescriptionDetails>
            <Link href={`employees/${employee.idNo}`} className="flex items-center gap-2">
              <Avatar src='/public/users/erica.jpg' className="size-6" />
              <span>{employee.event.name}</span>
            </Link>
          </DescriptionDetails>
          <DescriptionTerm>Role</DescriptionTerm>
          <DescriptionDetails>{employee.role}</DescriptionDetails>
          <DescriptionTerm>Start Date</DescriptionTerm>
          <DescriptionDetails>{employee.startDate}</DescriptionDetails>
          <DescriptionTerm>Email Address</DescriptionTerm>
          <DescriptionDetails>{employee.emailAddress}</DescriptionDetails>
        </DescriptionList>
      </div>
      <div className="mt-12">
        <Button>Edit Employee</Button>
      </div>
    </>
  );
}
