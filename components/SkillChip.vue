<script setup lang="ts">
type Skill = {
  key: string
  label: string
  iconUrl?: string
}
type Props = {
  skill: Skill
}
defineProps<Props>()

const iconUrl = (skill: Skill): string => {
  if (skill.iconUrl) return skill.iconUrl
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.key}/${skill.key}-original.svg`
}
</script>

<template>
  <Chip>
    <div class="p-1 flex align-items-center">
      <img :src="iconUrl(skill)" />
      <span>{{ skill.label }}</span>
    </div>
  </Chip>
</template>
