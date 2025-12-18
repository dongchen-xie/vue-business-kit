import { defineConfig } from "vite"
import { resolve } from "path"
import Vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    Vue(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true,
      rollupTypes: true,
      outDir: "dist"
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        utils: resolve(__dirname, "src/utils.ts")
      },
      name: "VueEpToolkit",
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "index.css"
          }
          return assetInfo.name!
        }
      }
    }
  }
})
