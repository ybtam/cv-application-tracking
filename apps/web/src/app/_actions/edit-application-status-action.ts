"use server"

import {JobApplicationStatus} from "codegen-web/src/graphql";
import {revalidatePath} from "next/cache";
import {getClient} from "@/lib/apollo/server-client";
import {graphql} from "codegen-web";

export default async function EditApplicationStatusAction(id: string, status: JobApplicationStatus) {

  try {
    await getClient().mutate({
      mutation: graphql(`
        mutation EditApplicationStatus($input: UpdateJobApplicationInput!) {
          updateJobApplication(input: $input) {
            id
            status
          }
        }
      `),
      variables: {
        input: {
          id,
          status,
        }
      }
    })
    } catch (e: unknown) {
      console.error(e);
  }

  revalidatePath("/");
}
