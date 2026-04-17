import { add, isNumber, subtract } from "lodash-es"
import type { BaselineConfig, EChartsOption, SparklineInternalProps, SeriesOption } from "../types"
import { formatNumber } from "../../../utils"

export const useBarStick = (
  props: SparklineInternalProps,
  data: { name: string; value: number }[],
  baseline: BaselineConfig,
  isDetail: boolean = false
): EChartsOption => {
  const processedData = data!.map((val) => ({
    ...val,
    value: subtract(val.value, baseline.value)
  }))
  const series: SeriesOption[] = [
    {
      name: baseline?.name,
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
      name: "Value",
      type: "bar",
      data: processedData,
      barWidth: 5,
      itemStyle: {
        color: "#d9d9d9"
      },
      label: {
        show: isDetail,
        formatter: (params: any) =>
          formatNumber(add(params.value, baseline.value), props.valueFormat),
        position: "top"
      }
    }
  ]

  const max = Math.max(
    ...data!.map((item) => {
      const value = isNumber(item) ? item : item.value
      return Math.abs(value)
    })
  )
  return {
    series,
    xAxis: {
      type: "category",
      show: false
    },
    yAxis: {
      type: "value",
      min: -max,
      max,
      show: false,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    tooltip: {
      show: isDetail,
      trigger: "axis",
      axisPointer: {
        type: "line"
      },
      valueFormatter: (value: any) => formatNumber(add(value, baseline.value), props.valueFormat)
    }
  }
}
