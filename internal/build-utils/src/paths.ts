import { resolve } from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const projRoot = resolve(__dirname, "..", "..", "..")

// Docs
export const docsDirName = "docs"
export const docRoot = resolve(projRoot, docsDirName)
