import { defineConfig } from "@content-collections/core"
import { codingMeta, computerScienceMeta } from "./lib/colletions/metas"
import { coding, computerScience } from "./lib/colletions/pages"

const meta = [
  codingMeta,
  computerScienceMeta
]

const pages = [
  coding,
  computerScience
]

export default defineConfig({
  collections: [...meta, ...pages],
})