import { subtract } from "lodash-es"
import type { BaselineConfig, SparklineInternalProps } from "../types"

export const getColumnDeviationSeries = (
  _props: SparklineInternalProps,
  data: { name: string; value: number }[],
  baseline: BaselineConfig
) => {
  const processedData = data!.map((val) => ({
    ...val,
    value: subtract(val.value, baseline.value)
  }))

  return [
    {
      type: "line",
      data: Array(processedData.length).fill(0),
      symbol: "none",
      lineStyle: {
        color: "#f0f0f0",
        width: 1,
        ...baseline.lineStyle
      }
    },
    {
      type: "bar",
      data: processedData,
      barWidth: 5,
      itemStyle: {
        color: "#d9d9d9"
      },
      label: { show: false }
    }
  ]
}
