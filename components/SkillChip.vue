<script setup lang="ts">
export type Skill = {
  key: string
  label: string
  iconUrl?: string
  noIcon?: boolean
}
type Props = {
  skill: Skill
}
withDefaults(defineProps<Props>(), {
  skill: (): Skill => {
    return { key: '', label: '', iconUrl: '', noIcon: false }
  },
})

const iconUrl = (skill: Skill): string => {
  if (skill.iconUrl) return skill.iconUrl
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.key}/${skill.key}-original.svg`
}
</script>

<template>
  <Chip>
    <div class="p-1 flex align-items-center">
      <img v-if="!skill.noIcon" :src="iconUrl(skill)" />
      <span>{{ skill.label }}</span>
    </div>
  </Chip>
</template>

<style scoped lang="scss">
.p-chip {
  height: 2rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
