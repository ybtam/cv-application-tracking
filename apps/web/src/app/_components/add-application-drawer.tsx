'use client'

import AddNewApplicationForm from '@/app/_forms/add-new-application-form'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

export default function AddApplicationDrawer() {
  const openState = useState(false)
  const [open, setOpen] = openState

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button>Add Application</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Fill out the details</DrawerTitle>
        </DrawerHeader>
        <AddNewApplicationForm openState={openState} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
