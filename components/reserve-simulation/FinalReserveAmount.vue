<script setup lang="ts">
const monthlyReserveAmount = ref<number>(1)
const accumulationPeriod = ref<number>(1)
const annualYield = ref<number>(1)

const finalReserveAmount = ref<number>(0)
const finalReserveAmountLabel = computed(() =>
  finalReserveAmount.value.toLocaleString()
)

const data = ref()

const calculate = () => {
  const { result, chartData } = calculateFinalReserveAmount(
    monthlyReserveAmount.value,
    accumulationPeriod.value,
    annualYield.value
  )
  finalReserveAmount.value = result
  data.value = chartData
}
</script>

<template>
  <div class="grid">
    <div class="col">
      <ReserveSimulationFormMonthlyReserveAmountInput
        v-model="monthlyReserveAmount"
        class="flex align-items-center h-4rem"
      />
      <ReserveSimulationFormAccumulationPeriodInput
        v-model="accumulationPeriod"
        class="flex align-items-center h-4rem"
      />
      <ReserveSimulationFormAnnualYieldInput
        v-model="annualYield"
        class="flex align-items-center h-4rem"
      />
    </div>
    <div
      class="col-fixed w-15rem flex flex-column align-items-center justify-content-center"
    >
      <Button label="計算する" class="mb-4" @click="calculate" />
      <div class="mb-4">最終積立金額</div>
      <div>
        <span class="font-bold text-4xl">{{ finalReserveAmountLabel }}</span>
        万円
      </div>
    </div>
  </div>
  <ReserveSimulationResultChart v-if="data" :data="data" />
</template>
