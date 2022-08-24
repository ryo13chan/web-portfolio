<script setup lang="ts">
import { Skill } from '~/components/SkillChip.vue'
withDefaults(
  defineProps<{
    title: string
    skills: Skill[]
  }>(),
  {
    title: '',
    skills: () => [],
  }
)
</script>

<template>
  <Panel :header="title">
    <div class="panel-body">
      <SkillChip v-for="skill in skills" :key="skill.key" :skill="skill" />
    </div>
  </Panel>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

::v-deep .p-panel-header {
  @include styleclass('border-round-top-2xl');
}

::v-deep .p-panel-content {
  @include styleclass('border-round-bottom-2xl');
}

.panel-body {
  @include styleclass('flex flex-wrap');

  gap: 1rem;
}
</style>
