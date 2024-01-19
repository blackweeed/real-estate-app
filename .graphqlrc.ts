import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://real-estate.local/graphql",
  overwrite: true,
  ignoreNoDocuments: true,
  documents: "src/graphql/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        defaultScalarType: "unknown",
        skipTypename: true,
        documentMode: "string",
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
