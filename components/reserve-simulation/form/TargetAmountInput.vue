<script setup lang="ts">
const amount = ref<number>(100)
</script>

<template>
  <ReserveSimulationFormInputSlider
    v-model="amount"
    title="目標金額"
    suffix="万円"
    :min="100"
    :max="10000"
    :step="100"
    :show-slider="false"
  />
</template>
