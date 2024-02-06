"use server"

import {getClient} from "@/lib/apollo/server-client";
import {graphql} from "codegen-web";
import {Button, Card, CardBody} from "@nextui-org/react";
import Link from "next/link";

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

  return (
    <div className={"grid grid-cols-2 gap-4 w-full"}>
      {data.jobApplications.map((application) => (
        <Card key={application.id} className={"w-full"}>
          <CardBody className={"flex gap-4"}>
            <h2>{application.title}</h2>
            <Button as={Link} href={application.url} target={"_blank"}>View</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}
