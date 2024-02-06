"use client"

import {JobApplicationStatus} from "codegen-web/src/graphql";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import EditApplicationStatusAction from "@/app/_actions/edit-application-status-action";

interface Props{
  currentStatus: JobApplicationStatus,
  id: string
}

export default function EditStatusButton({currentStatus, id}: Props) {

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isDisabled>
          Edit Status
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Possible status"
        items={Object.entries(JobApplicationStatus).filter(([key, value])=> value !== currentStatus)}
      >
        {([key, value]) => (
            <DropdownItem
              key={value}
              onClick={async () => EditApplicationStatusAction(id, value)}
            >
              {key}
            </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>

  )
}
