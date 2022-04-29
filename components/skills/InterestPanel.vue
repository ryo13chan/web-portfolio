<script setup lang="ts">
import SkillPanel, { Skill } from '~/components/skills/SkillPanel.vue'
const skills = ref<Skill[]>([
  {
    key: 'dart',
    label: 'Dart',
  },
  {
    key: 'flutter',
    label: 'Flutter',
  },
  {
    key: 'react',
    label: 'React.js',
  },
  {
    key: 'googlecloud',
    label: 'GCP',
  },
])
</script>

<template>
  <SkillPanel title="興味がある・学習中" :skills="skills" />
</template>
