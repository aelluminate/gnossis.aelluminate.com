import { defineCollection } from "@content-collections/core"
import { createMetaSchema } from "@fumadocs/content-collections/configuration"

export const lecturesMeta = defineCollection({
  name: "lecturesMeta",
  directory: "content/lectures",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
})