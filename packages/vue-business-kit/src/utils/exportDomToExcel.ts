import * as XLSX from "xlsx-js-style"

/** 单元格填充样式 */
interface CellFill {
  patternType: "solid"
  fgColor: { rgb: string }
}

/** 单元格字体样式 */
interface CellFont {
  bold?: boolean
  italic?: boolean
  color?: { rgb: string }
  sz?: number
}

/** 单元格对齐样式 */
interface CellAlignment {
  horizontal?: "left" | "center" | "right"
  vertical?: "top" | "center" | "bottom"
  wrapText?: boolean
}

interface CellBorderSide {
  style: string
  color: { rgb: string }
}

/** 单元格边框样式 */
interface CellBorder {
  top?: CellBorderSide
  bottom?: CellBorderSide
  left?: CellBorderSide
  right?: CellBorderSide
}

interface CellStyle {
  fill?: CellFill
  font?: CellFont
  alignment?: CellAlignment
  border?: CellBorder
}

export interface ExportDomToExcelOptions {
  /**
   * 是否解析并应用DOM中的样式（背景色、字体颜色/粗细/大小、对齐方式、边框）
   * @default true
   */
  includeStyle?: boolean
}

/**
 * 将DOM元素导出为Excel文件（支持解析背景色、字体、对齐、边框等样式）
 * @param dom       要导出的DOM元素，通常是表格元素
 * @param filename  导出文件名（不需要扩展名）
 * @param sheetName 页名
 * @param options   导出配置项
 */
export function exportDomToExcel(
  dom: HTMLElement,
  filename: string,
  sheetName = "Sheet1",
  options: ExportDomToExcelOptions = {}
) {
  if (!dom) {
    throw new Error("DOM element is required")
  }

  if (!filename) {
    throw new Error("Filename is required")
  }

  const { includeStyle = true } = options

  const wb = XLSX.utils.book_new()

  const ws = XLSX.utils.table_to_sheet(dom)

  if (includeStyle) {
    applyDomStyles(dom, ws)
  }

  XLSX.utils.book_append_sheet(wb, ws, sheetName)

  XLSX.writeFile(wb, `${filename}.xlsx`)
}

/**
 * 遍历表格DOM，解析每个单元格的计算样式并写入worksheet对应单元格的 `s` 属性
 * 同时正确处理 colspan/rowspan 导致的列偏移
 */
function applyDomStyles(dom: HTMLElement, ws: XLSX.WorkSheet) {
  const rows = Array.from(dom.querySelectorAll("tr"))

  // 记录已被上方单元格 rowspan 占用的网格位置
  const occupied: boolean[][] = []

  const isOccupied = (r: number, c: number) => occupied[r]?.[c] === true

  const markOccupied = (r: number, c: number) => {
    if (!occupied[r]) occupied[r] = []
    occupied[r][c] = true
  }

  rows.forEach((tr, rowIndex) => {
    const cells = Array.from(tr.querySelectorAll("th, td"))
    let colIndex = 0

    cells.forEach((cell) => {
      const el = cell as HTMLElement
      const colSpan = Number(el.getAttribute("colspan")) || 1
      const rowSpan = Number(el.getAttribute("rowspan")) || 1

      // 跳过被上方 rowspan 占用的列
      while (isOccupied(rowIndex, colIndex)) {
        colIndex++
      }

      const style = getCellStyle(el)
      if (style) {
        const cellRef = XLSX.utils.encode_cell({ r: rowIndex, c: colIndex })
        if (!ws[cellRef]) {
          // 占位空单元格，确保样式也能应用到空白单元格上
          ws[cellRef] = { t: "z", v: undefined }
        }
        ;(ws[cellRef] as any).s = style
      }

      for (let r = rowIndex; r < rowIndex + rowSpan; r++) {
        for (let c = colIndex; c < colIndex + colSpan; c++) {
          markOccupied(r, c)
        }
      }

      colIndex += colSpan
    })
  })
}

/**
 * 根据DOM元素的计算样式生成对应的Excel单元格样式
 */
function getCellStyle(el: HTMLElement): CellStyle | undefined {
  const computed = window.getComputedStyle(el)
  const style: CellStyle = {}

  // 背景色
  const bgColor = rgbToHex(computed.backgroundColor)
  if (bgColor) {
    style.fill = {
      patternType: "solid",
      fgColor: { rgb: bgColor }
    }
  }

  // 字体
  const font: CellFont = {}
  const fontColor = rgbToHex(computed.color)
  if (fontColor) font.color = { rgb: fontColor }

  const fontWeight = computed.fontWeight
  if (fontWeight === "bold" || Number(fontWeight) >= 600) {
    font.bold = true
  }

  if (computed.fontStyle === "italic") {
    font.italic = true
  }

  const fontSize = Number.parseFloat(computed.fontSize)
  if (!Number.isNaN(fontSize)) {
    // px -> pt
    font.sz = Math.round(fontSize * 0.75)
  }

  if (Object.keys(font).length) {
    style.font = font
  }

  // 对齐方式
  const alignment: CellAlignment = {}
  const textAlign = computed.textAlign
  if (textAlign === "center" || textAlign === "left" || textAlign === "right") {
    alignment.horizontal = textAlign
  }

  const verticalAlign = computed.verticalAlign
  if (verticalAlign === "middle") {
    alignment.vertical = "center"
  } else if (verticalAlign === "top" || verticalAlign === "bottom") {
    alignment.vertical = verticalAlign
  }

  if (computed.whiteSpace === "normal" || computed.whiteSpace === "pre-wrap") {
    alignment.wrapText = true
  }

  if (Object.keys(alignment).length) {
    style.alignment = alignment
  }

  // 边框
  const border: CellBorder = {}
  const sides: Array<["top" | "bottom" | "left" | "right", string]> = [
    ["top", computed.borderTopStyle],
    ["bottom", computed.borderBottomStyle],
    ["left", computed.borderLeftStyle],
    ["right", computed.borderRightStyle]
  ]

  sides.forEach(([side, borderStyle]) => {
    if (borderStyle && borderStyle !== "none") {
      const colorPropName = `border${side.charAt(0).toUpperCase()}${side.slice(1)}Color`
      const colorValue = (computed as any)[colorPropName] as string
      const color = rgbToHex(colorValue) || "000000"
      border[side] = { style: "thin", color: { rgb: color } }
    }
  })

  if (Object.keys(border).length) {
    style.border = border
  }

  return Object.keys(style).length ? style : undefined
}

/**
 * 将 rgb/rgba 颜色字符串转换为不带 # 前缀的十六进制颜色值
 * 透明背景（alpha为0）返回 undefined
 */
function rgbToHex(color: string): string | undefined {
  if (!color) return undefined

  if (color.startsWith("#")) {
    return color.replace("#", "").toUpperCase()
  }

  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
  if (!match) return undefined

  const [, r, g, b, a] = match

  if (a !== undefined && Number(a) === 0) return undefined

  const toHex = (value: string) => Number(value).toString(16).padStart(2, "0")

  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}
