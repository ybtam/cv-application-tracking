import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '../../apps/api/schema.graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/': {
      preset: 'client',
      documents: [
          '../../apps/api/test/**/*.ts',
      ]
    }
  }
}
export default config
