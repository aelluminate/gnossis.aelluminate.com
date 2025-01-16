import { defineCollection } from "@content-collections/core"
import { createDocSchema, transformMDX } from "@fumadocs/content-collections/configuration"

export const lectures = defineCollection({
  name: "lectures",
  directory: "content/lectures",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX,
})
