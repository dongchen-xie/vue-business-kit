import { graphic, type CustomSeriesRenderItemParams } from "echarts"
import { castArray, isNumber, isObject } from "lodash-es"
import type { BaselineConfig, SparklineInternalProps } from "../types"

export const getLineTrendSeries = (
  props: SparklineInternalProps,
  data: { name: string; value: number }[],
  baseline: BaselineConfig | BaselineConfig[]
) => {
  const series = [
    {
      type: "line",
      data,
      smooth: props.smooth,
      symbolSize: (_value: number, params: CustomSeriesRenderItemParams) =>
        params.dataIndex === data!.length - 1 ? 6 : 0,
      symbol: "circle",
      itemStyle: {
        color: props.color
      },
      lineStyle: {
        color: props.color,
        width: 2
      },
      areaStyle: props.showArea
        ? {
            color: new graphic.LinearGradient(0, 0, 0, 0.99, [
              {
                offset: 0,
                color: props.color as string
              },
              {
                offset: 1,
                color: "#FFFFFF"
              }
            ])
          }
        : undefined
    }
  ]

  castArray(baseline).map((v: any) => {
    series.push({
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
