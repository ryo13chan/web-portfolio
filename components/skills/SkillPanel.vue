<script setup lang="ts">
import { Skill } from '~/components/SkillChip.vue'
type Props = {
  title: string
  skills: Skill[]
}
withDefaults(defineProps<Props>(), {
  title: '',
  skills: () => [],
})
</script>

<template>
  <Panel :header="title">
    <div class="panel-body">
      <SkillChip v-for="skill in skills" :key="skill.key" :skill="skill" />
    </div>
  </Panel>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';

.panel-body {
  @include styleclass('flex flex-wrap');

  gap: 1rem;
}
</style>
