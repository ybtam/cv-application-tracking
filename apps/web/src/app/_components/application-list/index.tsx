"use server"

import {getClient} from "@/lib/apollo/server-client";
import {graphql} from "codegen-web";
import {Button, Card, CardBody, CardFooter, CardHeader, Chip} from "@nextui-org/react";
import Link from "next/link";
import {JobApplicationStatus} from "codegen-web/src/graphql";
import EditStatusButton from "@/app/_components/application-list/edit-status-button";

export default async function ApplicationList() {
  const {data} = await getClient().query({
    query: graphql(`
      query ApplicationsList{
        jobApplications {
          id
          title
          url
          status
        }
      }
    `)
  })

  const statusColor = (status: JobApplicationStatus) => {
    switch (status) {
     case JobApplicationStatus.Applied:
        return "primary"
      case JobApplicationStatus.Pending:
        return "warning"
      case JobApplicationStatus.Rejected:
        return "danger"
      case JobApplicationStatus.Replied:
        return "success"
    }
  }

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"}>
      {data.jobApplications.map((application) => (
        <Card key={application.id} fullWidth>
          <CardHeader className={"flex justify-between"}>
            <h2>{application.title}</h2> <Chip color={statusColor(application.status)} >{application.status}</Chip>
          </CardHeader>
          <CardFooter className={"flex gap-2"}>
            <Button as={Link} href={application.url} target={"_blank"}>View</Button>
            <EditStatusButton currentStatus={application.status} id={application.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
