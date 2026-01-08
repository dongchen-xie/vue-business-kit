<script lang="ts" setup>
import { type EChartsOption } from "echarts"
import { computed } from "vue"
import type { ChartInternalProps } from "./types"
import VChart from "vue-echarts"
import { isArray, isObject, map } from "lodash-es"
import { formatNumber } from "../../utils"
import { getBarSeries } from "./composables/useBar"
import { CanvasRenderer } from "echarts/renderers"
import { GridComponent, TitleComponent, TooltipComponent } from "echarts/components"
import { BarChart, LineChart } from "echarts/charts"
import { use } from "echarts/core"

use([CanvasRenderer, LineChart, BarChart, TitleComponent, TooltipComponent, GridComponent])

defineOptions({
  name: "Chart",
  inheritAttrs: false
})

const props = withDefaults(defineProps<ChartInternalProps>(), {
  config: () => ({}),
  chartHeight: "100%",
  chartWidth: "100%",
  animation: true,
  color: "#409eff",
  autoresize: true,
  showTooltip: true
})

const chartOption = computed<EChartsOption>(() => {
  const {
    grid = {},
    tooltip = {},
    xAxis = {},
    yAxis = {},
    series = []
  } = props.config as EChartsOption
  const data = ((props.data || []) as { name: string; value: number }[]).map((v, index) => {
    return isObject(v)
      ? { ...v, value: formatNumber(v.value, props.valueFormat) }
      : { name: String(index), value: formatNumber(v, props.valueFormat) }
  })
  const baseline: any = props.baseline
    ? isArray(props.baseline)
      ? props.baseline.map((v) => (isObject(v) ? v : { value: formatNumber(v, props.valueFormat) }))
      : isObject(props.baseline)
      ? props.baseline
      : { value: formatNumber(props.baseline!, props.valueFormat) }
    : []

  let seriesData: any[] = []

  switch (props.chartType) {
    case "bar":
      seriesData = getBarSeries(props, data, baseline)
      break
  }
  return {
    animation: props.animation,
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      ...grid
    },
    xAxis: {
      type: "category",
      data: map(data, "name"),
      axisLabel: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#636363"
        }
      },
      ...xAxis
    },
    yAxis: {
      axisLabel: {
        formatter: (value: string) => {
          return `${value}${props.valueFormat?.unit}`
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#636363"
        }
      },
      ...yAxis
    },
    series: [...seriesData, ...(isArray(series) ? series : [series])],
    tooltip: {
      show: props.showTooltip,
      trigger: "axis",
      axisPointer: {
        type: "line"
      },
      ...tooltip
    }
  } as EChartsOption
})
</script>

<template>
  <v-chart
    ref="chartRef"
    class="bk-sparkline-chart"
    :style="{
      height: typeof chartHeight === 'number' ? `${chartHeight}px` : chartHeight,
      width: typeof chartWidth === 'number' ? `${chartWidth}px` : chartWidth
    }"
    :option="chartOption"
    v-bind="$attrs"
  >
    <template v-for="name in Object.keys($slots)" :key="name" #[name]="scope">
      <slot :name="name" v-bind="scope" />
    </template>
  </v-chart>
</template>
<style lang="scss" scoped></style>
