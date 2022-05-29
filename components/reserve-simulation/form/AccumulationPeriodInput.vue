<script setup lang="ts">
const period = ref<number>(1)
</script>

<template>
  <ReserveSimulationFormInputSlider
    v-model="period"
    title="積立期間"
    suffix="年"
    :min="1"
    :max="50"
    :show-slider="false"
  />
</template>
