import { apolloClient } from '@/lib/apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

export const { getClient } = registerApolloClient(() => {
  return apolloClient()
})
