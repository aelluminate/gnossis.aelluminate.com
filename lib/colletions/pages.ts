import { defineCollection } from "@content-collections/core"
import { createDocSchema, transformMDX } from "@fumadocs/content-collections/configuration"

export const coding = defineCollection({
  name: "coding",
  directory: "content/coding",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX,
})

export const computerScience = defineCollection({
  name: "computerScience",
  directory: "content/computer-science",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX,
})
