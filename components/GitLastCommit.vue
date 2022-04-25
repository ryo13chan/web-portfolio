<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGitStore } from '~/store/git'

const gitStore = useGitStore()
const { commitDate, commitMessage, commitUrl } = storeToRefs(gitStore)

gitStore.getCommit()
</script>

<template>
  <div>
    <div>
      {{ commitDate }}
    </div>
    <div>
      {{ commitMessage }}
    </div>
    <div>
      {{ commitUrl }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';
</style>
