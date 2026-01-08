export interface FormatNumberOptions {
  prec?: boolean | number
  unit?: "%" | "k" | "M" | "none" | string
  separator?: boolean
  showUnit?: boolean
}

/**
 * 数值格式化函数
 * @param value 要格式化的数值
 * @param options 格式化选项
 * @returns 格式化后的字符串
 * @example
 * formatNumber(1234567.89) // "1,234,567.89"
 * formatNumber(1234567.89, { prec: true }) // "1,234,567.9"
 * formatNumber(1234567.89, { prec: 2 }) // "1,234,567.89"
 * formatNumber(0.75, { unit: "%", showUnit: true }) // "75%"
 * formatNumber(1234567, { unit: "k", showUnit: true }) // "1,234.567k"
 * formatNumber(1234567, { unit: "M", showUnit: true }) // "1.234567M"
 */
export function formatNumber(value: number | string, options: FormatNumberOptions = {}): string {
  const { prec = false, unit = "none", separator = true, showUnit = false } = options

  let num = typeof value === "string" ? parseFloat(value) : value

  if (isNaN(num)) return "0"

  // 单位转换
  switch (unit) {
    case "%":
      num = num * 100
      break
    case "k":
      num = num / 1000
      break
    case "M":
      num = num / 1000000
      break
  }

  // 保留小数位数
  let result: string
  if (prec && num !== Math.floor(num)) {
    result = num.toFixed(prec === true ? 1 : prec)
  } else {
    result = num.toString()
  }

  // 添加千分位符号
  if (separator) {
    const parts = result.split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    result = parts.join(".")
  }

  // 显示单位文字
  if (showUnit && unit !== "none") {
    result += unit
  }

  return result
}
