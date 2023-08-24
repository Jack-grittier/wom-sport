import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://womempsports.local/graphql',
  documents: 'lib/api.ts',
  ignoreNoDocuments: true,
  generates: {
    'lib/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        // disable fragment masking as api is in a single file
        // TODO: refactor api into co-located framgments and components
        fragmentMasking: false,
        // prevents ESLint complaining about React hooks
        // fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      },
    },
  },
  config: {
    documentMode: 'string',
  },
}

export default config
