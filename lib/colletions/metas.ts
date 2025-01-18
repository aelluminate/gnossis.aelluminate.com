import { defineCollection } from "@content-collections/core"
import { createMetaSchema } from "@fumadocs/content-collections/configuration"

export const meta = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
})