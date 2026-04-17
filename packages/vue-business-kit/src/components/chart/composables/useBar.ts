import { castArray, isNumber, isObject } from "lodash-es"
import type { BaselineConfig, ChartInternalProps } from "../types"
import type { BarSeriesOption } from "echarts"
import { formatNumber } from "../../../utils"

export const getBarSeries = (
  props: ChartInternalProps,
  data: { name: string; value: number }[],
  baseline: BaselineConfig | BaselineConfig[]
) => {
  const series = [
    {
      name: "Value",
      type: "bar",
      data,
      itemStyle: {
        color: props.color,
        borderWidth: 1,
        borderColor: "#707070"
      },
      label: {
        show: true,
        formatter: (params: any) => formatNumber(params.value, props.valueFormat),
        position: "top"
      },
      barWidth: "25%"
    }
  ] as BarSeriesOption[]

  castArray(baseline).map((v: any) => {
    series.push({
      name: v?.name,
      type: "line",
      data: new Array(data!.length).fill(isNumber(v) ? v : v?.value),
      symbol: "none",
      lineStyle: {
        color: "#636363",
        type: "dashed",
        width: 1.4,
        ...(isObject(v) && "lineStyle" in v ? (v as any).lineStyle : {})
      }
    } as any)
  })

  return series
}
