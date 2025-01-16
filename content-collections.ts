import { defineConfig } from "@content-collections/core"
import { lecturesMeta } from "./lib/colletions/metas"
import { lectures } from "./lib/colletions/pages"

export default defineConfig({
  collections: [lecturesMeta, lectures],
})