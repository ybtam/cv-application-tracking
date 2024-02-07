'use server'

import { getClient } from '@/lib/apollo/server-client'
import { graphql } from 'codegen-web'

export default async function DeleteApplicationAction(id: string) {
  try {
    await getClient().mutate({
      mutation: graphql(`
        mutation DeleteApplication($id: String!) {
          deleteJobApplication(id: $id)
        }
      `),
      variables: { id },
    })
  } catch (e) {
    console.error(e)
  }
}
