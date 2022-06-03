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
  <ReserveSimulationResultChart v-if="data" :data="data">
    <template #notice>
      <div>※金額の小数点以下は切り上げ</div>
      <div>※年始に１度再投資した複利で計算</div>
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
