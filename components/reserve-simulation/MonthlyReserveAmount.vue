<script setup lang="ts">
const targetAmount = ref<number>(100)
const accumulationPeriod = ref<number>(1)
const annualYield = ref<number>(1)

const monthlyReserveAmount = ref<number>(0)
const monthlyReserveAmountLabel = computed(() =>
  monthlyReserveAmount.value.toLocaleString()
)

const data = ref()

const calculate = () => {
  const { result, chartData } = calculateMonthlyReserveAmount(
    targetAmount.value,
    accumulationPeriod.value,
    annualYield.value
  )
  monthlyReserveAmount.value = result
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
      <div class="mb-4">毎月積立金額</div>
      <div>
        <span class="font-bold text-4xl">{{ monthlyReserveAmountLabel }}</span>
        円
      </div>
    </div>
  </div>
  <ReserveSimulationResultChart v-if="data" :data="data" />
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';

.input {
  @include styleclass('flex align-items-center h-4rem');
}
</style>
