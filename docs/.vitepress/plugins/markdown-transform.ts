import fs from "fs"
import path from "path"
import { camelize } from "@vue/shared"

import type { Plugin } from "vitepress"

export function MarkdownTransform(): Plugin {
  return {
    name: "vue-ep-toolkit-md-transform",
    enforce: "pre",
    async transform(code, id) {
      if (!id.endsWith(".md")) return

      const componentId = path.basename(id, ".md")
      const scriptSetups = getExampleImports(componentId)

      if (scriptSetups.length === 0) return code

      const scriptSetup = `\n<script setup>\n${scriptSetups.join("\n")}\n</script>\n`

      const frontmatterEnds = code.indexOf("---\n\n")
      const firstHeader = code.search(/\n#{1,6}\s.+/)
      const sliceIndex =
        firstHeader < 0 ? (frontmatterEnds < 0 ? 0 : frontmatterEnds + 4) : firstHeader

      return code.slice(0, sliceIndex) + scriptSetup + code.slice(sliceIndex)
    }
  }
}

const getExampleImports = (componentId: string) => {
  const examplePath = path.resolve(__dirname, "../../examples", componentId)

  if (!fs.existsSync(examplePath)) return []
  const files = fs.readdirSync(examplePath)
  const imports: string[] = []

  for (const item of files) {
    if (!/\.vue$/.test(item)) continue
    const file = item.replace(/\.vue$/, "")
    const name = camelize(`Ex-${componentId}-${file}`)
    imports.push(`import ${name} from '../../../examples/${componentId}/${file}.vue'`)
  }

  return imports
}
