<script setup lang="ts">
import SelfIntroduction from '~/components/about/SelfIntroduction.vue'
import Timeline from '~/components/about/Timeline.vue'
import Career from '~/components/about/Career.vue'

const title = ref('About')
useHead({
  title: title.value,
})
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <div class="grid">
      <div class="col-12">
        <SelfIntroduction />
      </div>
      <div class="col-12">
        <Timeline />
      </div>
      <div class="col-12">
        <Career />
      </div>
    </div>
  </div>
</template>
