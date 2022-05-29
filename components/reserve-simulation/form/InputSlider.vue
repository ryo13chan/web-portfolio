<script setup lang="ts">
type Props = {
  modelValue: number
  title: string
  suffix: string
  min: number
  max: number
  step?: number
  showSlider?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  step: 1,
  showSlider: true,
})

type Emits = {
  (e: 'update:modelValue', modelValue: number): void
}
const emits = defineEmits<Emits>()

const handleInput = (value: number) => {
  emits('update:modelValue', value)
}
const increase = (value: number) => {
  if (value >= props.max) return
  emits('update:modelValue', value + props.step)
}
const decrease = (value: number) => {
  if (value <= props.min) return
  emits('update:modelValue', value - props.step)
}
</script>

<template>
  <div class="flex align-items-center h-4rem">
    <div
      class="flex align-items-center justify-content-center font-bold h-full w-10rem"
    >
      {{ title }}
    </div>
    <div class="flex align-items-center h-full">
      <div class="mr-4 flex align-items-center">
        <InputNumber
          :model-value="modelValue"
          :min="props.min"
          :max="props.max"
          :allow-empty="false"
          class="mr-1"
          @update:model-value="handleInput"
        />
        <div class="w-2rem">{{ suffix }}</div>
      </div>
      <div
        :class="{
          flex: showSlider,
          'align-items-center': showSlider,
          'lg:flex': !showSlider,
          'lg:align-items-center': !showSlider,
          hidden: !showSlider,
        }"
      >
        <Button
          icon="pi pi-minus"
          class="p-button-rounded p-button-text mr-2"
          @click="decrease(modelValue)"
        />
        <div class="">
          <Slider
            :model-value="modelValue"
            :min="props.min"
            :max="props.max"
            :step="props.step"
            class="w-15rem mb-2"
            @update:model-value="handleInput"
          />
          <div class="flex justify-content-between">
            <span>{{ min }}</span>
            <span>{{ max }}</span>
          </div>
        </div>
        <Button
          icon="pi pi-plus"
          class="p-button-rounded p-button-text ml-2"
          @click="increase(modelValue)"
        />
      </div>
    </div>
  </div>
</template>
