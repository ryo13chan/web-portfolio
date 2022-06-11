<script setup lang="ts">
import SkillPanel from '~/components/skills/SkillPanel.vue'
import { Skill } from '~/components/Skillchip.vue'
const skills = ref<Skill[]>([
  {
    key: 'mysql',
    label: 'MySQL',
  },
  {
    key: 'oracle',
    label: 'Oracle',
  },

  {
    key: 'firebase',
    label: 'Firebase',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    key: 'amazonwebservices',
    label: 'AWS',
  },
  {
    key: 'docker',
    label: 'Docker',
  },
  {
    key: 'vagrant',
    label: 'Vagrant',
  },
  {
    key: 'apache',
    label: 'Apache',
  },
  {
    key: 'nginx',
    label: 'Nginx',
  },
  {
    key: 'redis',
    label: 'Redis',
  },
  {
    key: 'jenkins',
    label: 'Jenkins',
  },
])
</script>

<template>
  <SkillPanel title="DB・インフラ" :skills="skills" />
</template>
