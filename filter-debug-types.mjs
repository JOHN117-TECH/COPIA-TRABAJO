import { mapSchema, MapperKind } from "@graphql-tools/utils";

/**
 * Elimina tipos y campos que contienen "__debug" del esquema.
 *
 * @param {import('graphql').GraphQLSchema} schema
 * @returns {import('graphql').GraphQLSchema}
 */
export default function filterDebugTypes(schema) {
  return mapSchema(schema, {
    [MapperKind.TYPE]: (type) => {
      if (type.name.includes("__debug")) {
        return null;
      }
      return type;
    },
    [MapperKind.OBJECT_FIELD]: (fieldConfig, fieldName) => {
      if (fieldName.includes("__debug") || fieldName === "__debug") {
        return null;
      }
      return fieldConfig;
    },
  });
}
