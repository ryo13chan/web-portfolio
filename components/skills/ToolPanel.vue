<script setup lang="ts">
import SkillPanel, { Skill } from '~/components/skills/SkillPanel.vue'
const skills = ref<Skill[]>([
  {
    key: 'git',
    label: 'Git',
  },
  {
    key: 'github',
    label: 'Github',
  },
  {
    key: 'bitbucket',
    label: 'Bitbucket',
  },

  {
    key: 'slack',
    label: 'Slack',
  },
  {
    key: 'jira',
    label: 'Jira',
  },
  {
    key: 'confluence',
    label: 'Confluence',
  },
  {
    key: 'vscode',
    label: 'VSCode',
  },
  {
    key: 'trello',
    label: 'Trello',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
  },
  {
    key: 'sourcetree',
    label: 'SourceTree',
  },
  {
    key: 'figma',
    label: 'Figma',
  },
])
</script>

<template>
  <SkillPanel title="ツール" :skills="skills" />
</template>
