'use client'

import AddApplicationAction from '@/app/_forms/add-new-application-form/action'
import SubmitButton from '@/components/form/submit-button'
import { Input } from '@nextui-org/react'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

interface Props {
  openState: [boolean, (value: ((prevState: boolean) => boolean) | boolean) => void]
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
    <form action={formAction} className={'flex flex-wrap gap-4 p-4'}>
      <Input
        errorMessage={formState?.fields?.title}
        isInvalid={(formState?.fields?.title?.length ?? 0) > 0}
        label={'Title'}
        name={'title'}
      />
      <Input
        errorMessage={formState?.fields?.url}
        isInvalid={(formState?.fields?.url?.length ?? 0) > 0}
        label={'Url'}
        name={'url'}
      />
      <SubmitButton label={'Add Application'} />
      {formState?.message &&
        formState.message.map((message, index) => <p key={index}>{message}</p>)}
    </form>
  )
}
