'use server'
import { apolloClient } from '@/lib/apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

export const { getClient } = registerApolloClient(() => {
  return apolloClient()
})
