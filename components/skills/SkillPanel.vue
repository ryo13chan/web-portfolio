<script setup lang="ts">
export type Skill = {
  key: string
  label: string
  iconUrl?: string
}
type Props = {
  title: string
  skills: Skill[]
}
withDefaults(defineProps<Props>(), {
  title: '',
  skills: () => [],
})

const iconUrl = (skill: Skill): string => {
  if (skill.iconUrl) return skill.iconUrl
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.key}/${skill.key}-original.svg`
}
</script>

<template>
  <Panel :header="title">
    <div class="panel-body">
      <Chip v-for="skill in skills" :key="skill.key">
        <div class="p-1 flex align-items-center">
          <img :src="iconUrl(skill)" />
          <span>{{ skill.label }}</span>
        </div>
      </Chip>
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
