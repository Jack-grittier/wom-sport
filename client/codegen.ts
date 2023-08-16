import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://womempsports.local/graphql",
  documents: "lib/api.ts",
  ignoreNoDocuments: true,
  generates: {
    "lib/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        // disable fragment masking for the moment,
        // as example api is written in a single file
        fragmentMasking: false
        // prevents ESLint complaining about React hooks
        // fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      },
    }, 
  },
  config: {
    documentMode: 'string',
  }
};

export default config;
