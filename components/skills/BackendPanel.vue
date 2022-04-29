<script setup lang="ts">
import SkillPanel, { Skill } from '~/components/skills/SkillPanel.vue'
const skills = ref<Skill[]>([
  {
    key: 'php',
    label: 'PHP',
  },
  {
    key: 'laravel',
    label: 'Laravel',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
  {
    key: 'php',
    label: 'FuelPHP',
  },
  {
    key: 'phalcon',
    label: 'Phalcon',
  },
  {
    key: 'ruby',
    label: 'Ruby',
  },
  {
    key: 'rails',
    label: 'Ruby on Rails',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  },
  {
    key: 'java',
    label: 'Java',
  },
])
</script>

<template>
  <SkillPanel title="バックエンド" :skills="skills" />
</template>
