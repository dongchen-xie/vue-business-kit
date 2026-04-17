import type { FormatNumberOptions } from "@/utils"
import type { EChartsOption, RegisteredSeriesOption } from "echarts"
import type { LineStyleOption } from "echarts/types/src/util/types.js"

export type VChartProps = {
  initOptions?: {
    renderer?: "canvas" | "svg"
    width?: number | string
    height?: number | string
  }
  updateOptions?: {
    notMerge?: boolean
    lazyUpdate?: boolean
    silent?: boolean
  }
  autoresize?: boolean
}

export interface BaselineConfig {
  name?: string
  value: number
  lineStyle?: LineStyleOption
}
declare type Values<T> = T[keyof T]
export interface ChartInternalProps {
  chartType?: "line" | "bar"
  config?: EChartsOption
  title?: string
  subtitle?: string
  valueFormat?: FormatNumberOptions
  data?: number[] | Values<RegisteredSeriesOption>[]
  chartHeight?: number | string
  chartWidth?: number | string
  animation?: boolean
  color?: string
  showTooltip?: boolean
  baseline?: number | BaselineConfig | number[] | BaselineConfig[]
}

export interface ChartProps extends ChartInternalProps, VChartProps {}

export interface SparklineValue {
  value: number
  color?: string
  icon?: string
  valueFormat?: FormatNumberOptions
}

export interface SparklineInternalProps {
  chartType?: "line-trend" | "bar-trend" | "bar-stick"
  config?: Pick<EChartsOption, "grid">
  title?: string
  subtitle?: string
  value?: number
  valueFormat?: FormatNumberOptions
  subvalue?: number | Omit<SparklineValue, "color" | "icon">
  trend?: number | SparklineValue
  description?: string
  data?: number[] | Values<RegisteredSeriesOption>[]
  layout?: "vertical" | "horizontal"
  showChart?: boolean
  chartHeight?: number | string
  chartWidth?: number | string
  showDetail?: boolean
  detailTitle?: string
  animation?: boolean
  smooth?: boolean
  color?: string
  showArea?: boolean
  baseline?: number | BaselineConfig | number[] | BaselineConfig[]
}

export interface SparklineProps extends SparklineInternalProps, VChartProps {}

export type { EChartsOption, SeriesOption } from "echarts"
