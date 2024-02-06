"use server"

import {z} from "zod";
import {getClient} from "@/lib/apollo/server-client";
import {graphql} from "codegen-web";
import {JobApplicationStatus} from "codegen-web/src/graphql";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {ApolloError} from "@apollo/client";

export default async function AddApplicationAction(prevData: any, formData: FormData) {

  const parsedData = z.object({
    url: z.string().url(),
    title: z.string({}).min(1),
  }).safeParse(Object.fromEntries(formData));

  if (!parsedData.success) return {fields: parsedData.error.flatten().fieldErrors}

  const {url, title} = parsedData.data;

  try {
    const {data} = await getClient().mutate({
      mutation: graphql(`
        mutation AddApplication($input: CreateJobApplicationInput!) {
          createJobApplication(input: $input) {
            id
          }
        }
      `),
      variables: {
        input: {
          url,
          status: JobApplicationStatus.Pending,
          title
        },
      },
    })
  } catch (e: unknown) {
    if (e instanceof ApolloError) {
      const message = e.graphQLErrors.map((error) => {
        return error.message
      })

      return {message: message}
    }
  }

  revalidatePath("/")

  return { status: "success" }
}
