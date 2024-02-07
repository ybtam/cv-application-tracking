'use server'

import DeleteButton from '@/app/_components/application-list/delete-button'
import EditStatusButton from '@/app/_components/application-list/edit-status-button'
import { getClient } from '@/lib/apollo/server-client'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react'
import { graphql } from 'codegen-web'
import { JobApplicationStatus } from 'codegen-web/src/graphql'
import Link from 'next/link'

export default async function ApplicationList() {
  const { data } = await getClient().query({
    query: graphql(`
      query ApplicationsList {
        jobApplications {
          id
          title
          url
          status
        }
      }
    `),
  })

  const statusColor = (status: JobApplicationStatus) => {
    switch (status) {
      case JobApplicationStatus.Applied:
        return 'primary'
      case JobApplicationStatus.Pending:
        return 'warning'
      case JobApplicationStatus.Rejected:
        return 'danger'
      case JobApplicationStatus.Replied:
        return 'success'
    }
  }

  return (
    <div className={'grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
      {data.jobApplications.map(application => (
        <Card fullWidth key={application.id}>
          <CardHeader className={'flex justify-between'}>
            <h2>{application.title}</h2>{' '}
            <Chip color={statusColor(application.status)}>{application.status}</Chip>
          </CardHeader>
          <CardFooter className={'flex gap-2'}>
            <Button as={Link} href={application.url} target={'_blank'}>
              View
            </Button>
            <EditStatusButton currentStatus={application.status} id={application.id} />
            <DeleteButton id={application.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
