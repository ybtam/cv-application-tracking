'use client'

import DeleteApplicationAction from '@/app/_actions/delete-application-action'
import { Button } from '@nextui-org/react'
import { JobApplicationStatus } from 'codegen-web/src/graphql'

interface Props {
  id: string
}

export default function DeleteButton({ id }: Props) {
  return (
    <Button color={'danger'} onClick={async () => DeleteApplicationAction(id)}>
      Delete
    </Button>
  )
}
