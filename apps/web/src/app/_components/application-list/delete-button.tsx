"use client"

import {JobApplicationStatus} from "codegen-web/src/graphql";
import {Button} from "@nextui-org/react";
import DeleteApplicationAction from "@/app/_actions/delete-application-action";

interface Props{
  id: string
}

export default function DeleteButton({id}: Props) {
  return (
    <Button color={"danger"} onClick={async () => DeleteApplicationAction(id)}>
      Delete
    </Button>
  )
}
