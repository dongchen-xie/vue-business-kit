<script setup lang="ts">
import { ref, computed } from "vue"
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { LineChart } from "echarts/charts"
import { TitleComponent, TooltipComponent, GridComponent } from "echarts/components"
import VChart from "vue-echarts"
import { formatNumber } from "../../utils/formatNumber"
import type { SparklineInstance, SparklineInternalProps } from "./types"
import { type EChartsOption } from "echarts"
import { isArray, isNumber, isObject, map } from "lodash-es"
import { BkIcon } from "../icon"
import { getLineTrendSeries } from "./composables/useLineTrend"
import { getColumnDeviationSeries } from "./composables/useColumnDeviation"

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, GridComponent])

defineOptions({
  name: "Sparkline",
  inheritAttrs: false
})

const props = withDefaults(defineProps<SparklineInternalProps>(), {
  layout: "vertical",
  chartHeight: "100%",
  chartWidth: "100%",
  showChart: true,
  animation: true,
  smooth: true,
  color: "#409eff",
  autoresize: true,
  showTooltip: false
})

const chartRef = ref<InstanceType<typeof VChart>>()

const chartOption = computed<EChartsOption>(() => {
  const data = (props.data || []).map((v, index) => {
    return isObject(v) ? v : { name: String(index), value: v }
  }) as { name: string; value: number }[]
  const baseline: any = props.baseline
    ? isArray(props.baseline)
      ? props.baseline.map((v) => (isObject(v) ? v : { value: v }))
      : isObject(props.baseline)
      ? props.baseline
      : { value: props.baseline }
    : []

  let series: any[] = []
  let yAxis = {}

  switch (props.chartType) {
    case "line-trend":
      series = getLineTrendSeries(props, data, baseline)
      break
    case "column-deviation":
      series = getColumnDeviationSeries(props, data, baseline)
      const max = Math.max(
        ...data!.map((item) => {
          const value = isNumber(item) ? item : item.value
          return Math.abs(value)
        })
      )
      yAxis = {
        min: -max,
        max
      }
      break
  }

  return {
    animation: props.animation,
    grid: {
      top: 3,
      left: 3,
      right: 3,
      bottom: 3
    },
    xAxis: {
      type: "category",
      show: false,
      data: map(data, "name"),
      boundaryGap: false
    },
    yAxis: {
      show: false,
      boundaryGap: false,
      ...yAxis
    },
    series,
    tooltip: {
      show: props.showTooltip,
      trigger: "axis",
      axisPointer: {
        type: "line"
      }
    }
  } as EChartsOption
})

const getInstance = () => {
  return (chartRef.value as any)?.getInstance()
}

const refresh = () => {
  const instance = getInstance()
  if (instance) {
    instance.clear()
    instance.setOption(chartOption.value)
  }
}

const setOption = (option: any, notMerge?: boolean, lazyUpdate?: boolean) => {
  const instance = getInstance()
  if (instance) {
    instance.setOption(option, notMerge, lazyUpdate)
  }
}

const resize = () => {
  const instance = getInstance()
  if (instance) {
    instance.resize()
  }
}

defineExpose<SparklineInstance>({
  getInstance,
  refresh,
  setOption,
  resize
})
</script>

<template>
  <div class="bk-sparkline" :class="`bk-sparkline--${layout}`">
    <div class="bk-sparkline-main">
      <div v-if="title || subtitle" class="bk-sparkline-titles">
        <h3 class="bk-sparkline-title">{{ title }}</h3>
        <p class="bk-sparkline-subtitle">{{ subtitle }}</p>
      </div>

      <div class="bk-sparkline-value">
        <span class="bk-sparkline-value-main">
          {{ formatNumber(value as number | string, valueFormat) }}
        </span>
        <span v-if="auxiliaryValue" class="bk-sparkline-value-auxiliary">
          ({{ formatNumber(auxiliaryValue, auxiliaryValueFormat) }})
        </span>
      </div>

      <div class="bk-sparkline-footer">
        <span v-if="changeValue" class="bk-sparkline-change" :style="{ color: changeValueColor }">
          {{ formatNumber(changeValue, changeValueFormat) }}
          <bk-icon :icon="changeValueIcon" v-if="changeValueIcon" size="14" />
        </span>
        <span v-if="description" class="bk-sparkline-description">
          {{ description }}
        </span>
      </div>
    </div>

    <div v-if="showChart" class="bk-sparkline-chart-wrapper">
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
      </v-chart>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bk-sparkline {
  width: 100%;
  display: flex;
  gap: 16px;

  &--vertical {
    flex-direction: column;
    gap: 8px;
    position: relative;

    .bk-sparkline-main {
      display: flex;
      flex-direction: column;
      gap: 4px;
      position: relative;
      z-index: 2;
    }

    .bk-sparkline-chart-wrapper {
      position: absolute;
      z-index: 1;
    }
  }

  &--horizontal {
    flex-direction: row;
    align-items: center;

    .bk-sparkline-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .bk-sparkline-chart-wrapper {
      flex: 1;
    }
  }

  &-titles {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &-title {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: var(--el-text-color-regular);
  }

  &-subtitle {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    color: var(--el-text-color-regular);
  }

  &-value {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  &-value-main {
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &-value-auxiliary {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.5%;
    color: var(--el-text-color-regular);
  }

  &-footer {
    display: flex;
    align-items: center;
    gap: 12px;
    line-height: 20px;
    font-size: 12px;
    font-weight: bold;
    color: var(--el-text-color-regular);
  }

  &-change {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &-change-up {
    color: var(--el-color-success);
  }

  &-change-down {
    color: var(--el-color-danger);
  }
}
</style>
