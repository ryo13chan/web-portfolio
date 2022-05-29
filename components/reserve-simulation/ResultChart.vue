<script setup lang="ts">
type Props = {
  data: Object
}
defineProps<Props>()

const options = ref({
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          return `${
            tooltipItem.dataset.label
          }：${tooltipItem.formattedValue.toLocaleString()}万円`
        },
        footer: (tooltipItems: any) => {
          // 合計
          const total =
            tooltipItems.length === 1
              ? tooltipItems[0].formattedValue
              : tooltipItems
                  .reduce(
                    (a: any, b: any) =>
                      a.dataset.data[a.dataIndex] + b.dataset.data[b.dataIndex]
                  )
                  .toLocaleString()
          // 前年度からの増加分
          const increase =
            tooltipItems.length === 1
              ? tooltipItems[0].dataIndex === 0
                ? 0
                : tooltipItems[0].dataset.data[tooltipItems[0].dataIndex] -
                  tooltipItems[0].dataset.data[tooltipItems[0].dataIndex - 1]
              : tooltipItems
                  .reduce(
                    (a: any, b: any) =>
                      a.dataset.data[a.dataIndex] -
                      (a.dataIndex === 0
                        ? 0
                        : a.dataset.data[a.dataIndex - 1]) +
                      b.dataset.data[b.dataIndex] -
                      (b.dataIndex === 0 ? 0 : b.dataset.data[b.dataIndex - 1])
                  )
                  .toLocaleString()
          return `${total}万円\n（+${increase}万円）`
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      ticks: {
        callback: (value: number) => {
          return `${value.toLocaleString()}万円`
        },
      },
    },
  },
})
</script>

<template>
  <Chart type="bar" :data="data" :options="options" />
  <div class="text-sm text-500">※金額の小数点以下は切り捨て</div>
  <div class="text-sm text-500">※１年に１度再投資した複利で計算</div>
  <div class="text-sm text-500">※税、手数料などは非考慮</div>
</template>
