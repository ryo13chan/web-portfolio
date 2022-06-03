<script setup lang="ts">
const targetAmount = ref<number>(100)
const monthlyReserveAmount = ref<number>(1)
const annualYield = ref<number>(1)

const accumulationPeriod = ref<number>(0)
const accumulationPeriodLabel = computed(() =>
  accumulationPeriod.value.toLocaleString()
)

const data = ref()

const calculate = () => {
  const { result, chartData } = calculateAccumulationPeriod(
    targetAmount.value,
    monthlyReserveAmount.value,
    annualYield.value
  )
  accumulationPeriod.value = result
  data.value = chartData
}
</script>

<template>
  <div class="grid">
    <div class="col">
      <ReserveSimulationFormTargetAmountInput
        v-model="targetAmount"
        class="input"
      />
      <ReserveSimulationFormMonthlyReserveAmountInput
        v-model="monthlyReserveAmount"
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
      <div class="mb-4">積立期間</div>
      <div>
        <span class="font-bold text-4xl">{{ accumulationPeriodLabel }}</span>
        年
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
