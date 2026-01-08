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
  value: number
  lineStyle?: LineStyleOption
}
declare type Values<T> = T[keyof T]
export interface ChartInternalProps {
  chartType: "line" | "bar"
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

export interface SparklineInternalProps {
  chartType: "line-trend" | "column-deviation"
  title?: string
  subtitle?: string
  value?: number | string
  valueFormat?: FormatNumberOptions
  auxiliaryValue?: number | string
  auxiliaryValueFormat?: FormatNumberOptions
  changeValue?: number | string
  changeValueColor?: string
  changeValueIcon?: string
  changeValueFormat?: FormatNumberOptions
  description?: string
  data?: number[] | Values<RegisteredSeriesOption>[]
  layout?: "vertical" | "horizontal"
  chartHeight?: number | string
  chartWidth?: number | string
  showChart?: boolean
  animation?: boolean
  smooth?: boolean
  color?: string
  showArea?: boolean
  showTooltip?: boolean
  baseline?: number | BaselineConfig | number[] | BaselineConfig[]
}

export interface SparklineProps extends SparklineInternalProps, VChartProps {}

export interface SparklineInstance {
  getInstance: () => any
  refresh: () => void
  setOption: (option: EChartsOption, notMerge?: boolean, lazyUpdate?: boolean) => void
  resize: () => void
}

export type { EChartsOption } from "echarts"
