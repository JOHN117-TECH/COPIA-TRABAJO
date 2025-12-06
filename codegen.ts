import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/graphql/schema-clean.graphql",
  documents: "src/graphql/**/*.{graphql,gql}",
  generates: {
    "src/graphql/generated/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.ts",
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "src/graphql/generated/types.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
