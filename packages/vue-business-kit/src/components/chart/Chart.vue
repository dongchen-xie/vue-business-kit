<script lang="ts" setup>
import type { EChartsOption } from "echarts"
import { computed, useSlots } from "vue"
import type { Slots } from "vue"
import type { ChartInternalProps } from "./types"
import VChart from "vue-echarts"
import { isArray, isObject, map } from "lodash-es"
import { formatNumber } from "../../utils"
import { CanvasRenderer } from "echarts/renderers"
import { GridComponent, TitleComponent, TooltipComponent } from "echarts/components"
import { BarChart, LineChart } from "echarts/charts"
import { use } from "echarts/core"
import { getBarSeries } from "./composables"

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

const slots: Readonly<Slots> = useSlots()

const chartOption = computed<EChartsOption>(() => {
  const {
    title = {},
    grid = {},
    tooltip = {},
    xAxis = {},
    yAxis = {},
    series = []
  } = props.config as EChartsOption
  const data = (props.data || []).map((item, index) => {
    return isObject(item) ? item : { name: String(index), value: item }
  }) as { name: string; value: number }[]
  const baseline: any = props.baseline
    ? isArray(props.baseline)
      ? props.baseline.map((item) => (isObject(item) ? item : { value: item }))
      : isObject(props.baseline)
        ? props.baseline
        : { value: props.baseline }
    : []

  let seriesData: any[] = []

  switch (props.chartType) {
    case "bar":
      seriesData = getBarSeries(props, data, baseline)
      break
  }
  return {
    animation: props.animation,
    title: {
      ...title
    },
    grid: {
      top: 12,
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
        formatter: (value: string) => formatNumber(value, props.valueFormat)
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
      valueFormatter: (value: string) => formatNumber(value, props.valueFormat),
      ...tooltip
    }
  } as EChartsOption
})
</script>

<template>
  <v-chart
    class="bk-sparkline-chart"
    :style="{
      height: typeof chartHeight === 'number' ? `${chartHeight}px` : chartHeight,
      width: typeof chartWidth === 'number' ? `${chartWidth}px` : chartWidth
    }"
    :option="chartOption"
    v-bind="$attrs"
  >
    <template v-for="name in Object.keys(slots)" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </v-chart>
</template>
<style lang="scss" scoped></style>
