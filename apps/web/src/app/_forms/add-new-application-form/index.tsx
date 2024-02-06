"use client"

import {Input} from "@nextui-org/react";
import SubmitButton from "@/components/form/submit-button";
import AddApplicationAction from "@/app/_forms/add-new-application-form/action";
import { useFormState } from "react-dom";
import {useEffect} from "react";

interface Props {
  openState: [boolean, (value: (((prevState: boolean) => boolean) | boolean)) => void]
}

export default function AddNewApplicationForm({ openState }: Props) {
  const [formState, formAction] = useFormState(AddApplicationAction, null)
  const [open, setOpen] = openState

  useEffect(() => {
    if (formState?.status === 'success') {
      setOpen(false)
    }
  }, [formState])

  return (
    <form action={formAction} className={"flex flex-wrap gap-4 p-4"}>
      <Input
        name={"title"}
        label={'Title'}
        isInvalid={(formState?.fields?.title?.length ?? 0) > 0}
        errorMessage={formState?.fields?.title}
      />
      <Input
        name={"url"}
        label={'Url'}
        isInvalid={(formState?.fields?.url?.length ?? 0) > 0}
        errorMessage={formState?.fields?.url}
      />
      <SubmitButton label={"Add Application"}/>
      {formState?.message && formState.message.map((message, index) => <p key={index}>{message}</p>)}
    </form>
  )
}
