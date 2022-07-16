<script setup lang="ts">
import FrontendPanel from '~/components/skills/FrontendPanel.vue'
import BackendPanel from '~/components/skills/BackendPanel.vue'
import DBInfraPanel from '~/components/skills/DBInfraPanel.vue'
import ToolPanel from '~/components/skills/ToolPanel.vue'
import InterestPanel from '~/components/skills/InterestPanel.vue'

const title = ref('Skills')
useHead({
  title,
})
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <FrontendPanel class="mb-5" />
    <BackendPanel class="mb-5" />
    <DBInfraPanel class="mb-5" />
    <ToolPanel class="mb-5" />
    <InterestPanel />
  </div>
</template>
