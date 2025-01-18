import { defineCollection } from "@content-collections/core"
import { createDocSchema, transformMDX } from "@fumadocs/content-collections/configuration"

export const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX,
})