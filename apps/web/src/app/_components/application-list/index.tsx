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
    <div className={"grid grid-cols-4 gap-4 w-full"}>
      {data.jobApplications.map((application) => (
        <Card key={application.id} className={"w-full"}>
          <CardHeader>
            <h2>{application.title}</h2>
          </CardHeader>
          <CardBody className={"flex gap-4"}>
            <Chip color={statusColor(application.status)} >{application.status}</Chip>
          </CardBody>
          <CardFooter>
            <Button as={Link} href={application.url} target={"_blank"}>View</Button>
            <EditStatusButton currentStatus={application.status} id={application.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
