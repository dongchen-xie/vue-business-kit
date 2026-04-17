import { graphic } from "echarts"
import type { CallbackDataParams } from "echarts/types/dist/shared"
import { castArray, isNumber, isObject, map } from "lodash-es"
import type { BaselineConfig, SparklineInternalProps, EChartsOption, SeriesOption } from "../types"
import { formatNumber } from "../../../utils"

export const useLineTrend = (
  props: SparklineInternalProps,
  data: { name: string; value: number }[],
  baseline: BaselineConfig | BaselineConfig[],
  isDetail: boolean = false
): EChartsOption => {
  const series: SeriesOption[] = [
    {
      name: "Value",
      type: "line",
      data,
      smooth: props.smooth && !isDetail,
      symbolSize: (_value: number, params: CallbackDataParams) =>
        isDetail ? 14 : params.dataIndex === data!.length - 1 ? 6 : 0,
      symbol: "circle",
      itemStyle: {
        color: props.color
      },
      lineStyle: {
        color: props.color,
        width: 2
      },
      label: {
        show: isDetail,
        formatter: (params: any) => formatNumber(params.value, props.valueFormat)
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
                color: "rgba(255, 255, 255, 0)"
              }
            ])
          }
        : undefined,
      emphasis: {
        itemStyle: {
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: props.color!
              },
              {
                offset: 0.4,
                color: props.color!
              },
              {
                offset: 0.5,
                color: "rgba(255, 255, 255, 0)"
              },
              {
                offset: 0.7,
                color: "rgba(255, 255, 255, 0)"
              },
              {
                offset: 0.8,
                color: "rgba(255, 255, 255, 0)"
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, 0)"
              }
            ]
          },
          borderColor: props.color!,
          borderWidth: 2
        }
      }
    }
  ]

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

  return {
    series,
    xAxis: {
      type: "category",
      show: isDetail,
      data: map(data, "name"),
      boundaryGap: isDetail,
      axisLine: {
        lineStyle: {
          color: "#b0b0b0",
          width: 2
        }
      },
      axisLabel: {
        color: "#636363",
        fontSize: 12
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      show: isDetail,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#b0b0b0",
          width: 2
        }
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
      valueFormatter: (value: any) => formatNumber(value, props.valueFormat)
    }
  }
}
