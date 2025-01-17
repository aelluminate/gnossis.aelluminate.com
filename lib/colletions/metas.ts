import { defineCollection } from "@content-collections/core"
import { createMetaSchema } from "@fumadocs/content-collections/configuration"

export const codingMeta = defineCollection({
  name: "codingMeta",
  directory: "content/coding",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
})

export const computerScienceMeta = defineCollection({
  name: "computerScienceMeta",
  directory: "content/computer-science",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
})