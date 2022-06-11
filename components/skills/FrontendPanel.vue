<script setup lang="ts">
import SkillPanel from '~/components/skills/SkillPanel.vue'
import { Skill } from '~/components/Skillchip.vue'
const skills = ref<Skill[]>([
  {
    key: 'javascript',
    label: 'JavaScript',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'vuejs',
    label: 'Vue.js',
  },
  {
    key: 'vuetify',
    label: 'Vuetify',
  },
  {
    key: 'nuxtjs',
    label: 'Nuxt.js',
  },
  {
    key: 'jquery',
    label: 'jQuery',
  },
  {
    key: 'html5',
    label: 'HTML',
  },
  {
    key: 'css3',
    label: 'CSS',
  },
  {
    key: 'sass',
    label: 'SCSS/SASS',
  },
  {
    key: 'bootstrap',
    label: 'Bootstrap',
  },
  {
    key: 'materialui',
    label: 'Material-UI',
  },
  {
    key: 'eslint',
    label: 'ESLint',
  },
])
</script>

<template>
  <SkillPanel title="フロントエンド" :skills="skills" />
</template>
