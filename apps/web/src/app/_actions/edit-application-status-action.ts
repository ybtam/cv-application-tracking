"use server"

import {JobApplicationStatus} from "codegen-web/src/graphql";
import {revalidatePath} from "next/cache";

export default async function EditApplicationStatusAction(id: string, status: JobApplicationStatus) {
  console.log(id, status);

  revalidatePath("/")
}
