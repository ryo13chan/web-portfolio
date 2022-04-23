<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'proaaaps!',
})
console.log(props.text)
</script>

<template>
  <div class="aaa">{{ text }}</div>
</template>
