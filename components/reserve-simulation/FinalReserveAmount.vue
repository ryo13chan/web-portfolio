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
        class="input"
      />
      <ReserveSimulationFormAccumulationPeriodInput
        v-model="accumulationPeriod"
        class="input"
      />
      <ReserveSimulationFormAnnualYieldInput
        v-model="annualYield"
        class="input"
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
  <ReserveSimulationResultChart v-if="data" :data="data">
    <template #notice>
      <div>※金額の小数点以下は切り捨て</div>
      <div>※年末に１度再投資した複利で計算</div>
      <div>※税、手数料などは非考慮</div>
    </template>
  </ReserveSimulationResultChart>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';

.input {
  @include styleclass('flex align-items-center h-4rem');
}
</style>
