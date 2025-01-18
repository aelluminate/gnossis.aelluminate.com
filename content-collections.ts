import { defineConfig } from "@content-collections/core"
import { meta } from "./lib/colletions/metas"
import { docs} from "./lib/colletions/docs"


export default defineConfig({
  collections: [meta, docs],
})