#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const COMPONENTS_DIR = path.join(__dirname, "../src/components")
const OUTPUT_FILE = path.join(__dirname, "../types/global.d.ts")

interface ComponentInfo {
  name: string
  props?: string
  emits?: string
  instance?: string
}

function getComponentName(folderName: string): string {
  const capitalized = folderName.charAt(0).toUpperCase() + folderName.slice(1)
  return `Ep${capitalized}`
}

function readComponentTypes(componentDir: string): ComponentInfo | null {
  const typesFile = path.join(componentDir, "types.ts")

  if (!fs.existsSync(typesFile)) {
    return null
  }

  const content = fs.readFileSync(typesFile, "utf-8")
  const componentName = path.basename(componentDir)
  const epName = getComponentName(componentName)

  const info: ComponentInfo = {
    name: epName
  }

  // 查找该组件对应的 EpXxxProps（精确匹配）
  // 例如：EpTableProps, EpButtonProps, 但不匹配 EpTableColumnProps
  const targetPropsName = `${epName}Props`
  const propsRegex = new RegExp(`export\\s+interface\\s+${targetPropsName}\\s+`)
  const propsMatch = content.match(propsRegex)
  if (propsMatch) {
    info.props = targetPropsName
  }

  // 查找 Emits（对应 EpXxxEmits）
  const targetEmitsName = `${epName}Emits`
  const emitsRegex = new RegExp(`export\\s+interface\\s+${targetEmitsName}\\s+`)
  const emitsMatch = content.match(emitsRegex)
  if (emitsMatch) {
    info.emits = targetEmitsName
  }

  // 查找 Instance（对应 EpXxxInstance）
  const targetInstanceName = `${epName}Instance`
  const instanceRegex = new RegExp(`export\\s+interface\\s+${targetInstanceName}\\s+`)
  const instanceMatch = content.match(instanceRegex)
  if (instanceMatch) {
    info.instance = targetInstanceName
  }

  return info
}

function generateTypeDeclaration(info: ComponentInfo): string {
  const { name, props, emits, instance } = info

  if (!props) {
    return `    ${name}: DefineComponent<{}>`
  }

  const propsArg = props || "{}"
  const instanceArg = instance || "{}"

  if (emits) {
    return `    ${name}: DefineComponent<${propsArg}, ${instanceArg}, {}, {}, {}, {}, string, ${emits}>`
  }

  return `    ${name}: DefineComponent<${propsArg}, ${instanceArg}>`
}

function getComponentFolders(): string[] {
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.warn(`Components directory not found: ${COMPONENTS_DIR}`)
    return []
  }

  return fs.readdirSync(COMPONENTS_DIR).filter((file) => {
    const fullPath = path.join(COMPONENTS_DIR, file)
    return fs.statSync(fullPath).isDirectory() && file !== "node_modules" && !file.startsWith(".")
  })
}

function generateGlobalDtsContent(components: ComponentInfo[]): string {
  if (components.length === 0) {
    console.warn("No components found!")
    return ""
  }

  // 提取所有需要导入的类型
  const imports = new Set<string>()
  components.forEach((comp) => {
    if (comp.props) imports.add(comp.props)
    if (comp.emits) imports.add(comp.emits)
    if (comp.instance) imports.add(comp.instance)
  })

  const importList = Array.from(imports).sort()

  let content = `
import type { DefineComponent } from "vue"
import type {
  ${importList.join(",\n  ")}
} from "vue-ep-toolkit"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
`

  components.forEach((comp) => {
    content += generateTypeDeclaration(comp) + "\n"
  })

  content += `  }
}
`

  return content
}

async function main() {
  try {
    const folders = getComponentFolders()
    console.log(`Found ${folders.length} components:`, folders)

    const components: ComponentInfo[] = []
    for (const folder of folders) {
      const componentDir = path.join(COMPONENTS_DIR, folder)
      const info = readComponentTypes(componentDir)
      if (info) {
        components.push(info)
        console.log(`✓ Found types for: ${info.name}`)
      } else {
        console.warn(`✗ No types.ts found in: ${folder}`)
      }
    }

    // 按名称排序
    components.sort((a, b) => a.name.localeCompare(b.name))

    // 生成内容
    const content = generateGlobalDtsContent(components)

    // 写入文件
    fs.writeFileSync(OUTPUT_FILE, content, "utf-8")
    console.log(`\n✓ Generated: ${OUTPUT_FILE}`)
    console.log(`✓ Total components: ${components.length}`)
  } catch (error) {
    console.error("Error generating component types:", error)
    process.exit(1)
  }
}

main()
