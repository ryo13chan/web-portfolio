<script setup lang="ts">
const percent = ref<number>(1)
</script>

<template>
  <ReserveSimulationFormInputSlider
    v-model="percent"
    title="利回り（年率）"
    suffix="％"
    :min="1"
    :max="100"
    :show-slider="false"
  />
</template>
