import fs from "fs";
import path from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { printSchema } from "graphql";
import { JsonFileLoader } from "@graphql-tools/json-file-loader";
import filterDebugTypes from "../../filter-debug-types.mjs";

const inputPath = path.resolve("src/graphql/schema.json");
const outputPath = path.resolve("src/graphql/schema-clean.graphql");

const schema = loadSchemaSync(inputPath, {
  loaders: [new JsonFileLoader()],
});

const filteredSchema = filterDebugTypes(schema);

fs.writeFileSync(outputPath, printSchema(filteredSchema), "utf-8");

console.log("✅ Esquema limpio generado en:", outputPath);
