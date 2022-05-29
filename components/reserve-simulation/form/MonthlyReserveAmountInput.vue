<script setup lang="ts">
const amount = ref<number>(1)
</script>

<template>
  <ReserveSimulationFormInputSlider
    v-model="amount"
    title="毎月積立金額"
    suffix="万円"
    :min="1"
    :max="100"
    :show-slider="false"
  />
</template>
