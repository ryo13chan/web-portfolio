<script setup lang="ts">
import { Skill } from '~/components/skills/SkillPanel.vue'
type Props = {
  image: string
  title: string
  href?: string
  to?: string
  skills: Skill[]
  description?: string
}
defineProps<Props>()
</script>

<template>
  <Card>
    <template #header>
      <NuxtLink :href="href" :to="to" target="_blank">
        <img :src="image" class="p-2" />
      </NuxtLink>
    </template>
    <template #title>
      <NuxtLink :href="href" :to="to" target="_blank" class="title">{{
        title
      }}</NuxtLink>
    </template>
    <template #subtitle>
      <div class="skill-area">
        <SkillChip v-for="skill in skills" :key="skill.key" :skill="skill" />
      </div>
    </template>
    <template #content>
      <slot name="content">
        <div>{{ description }}</div>
      </slot>
    </template>
  </Card>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';

.title {
  &:hover {
    text-decoration: underline;
  }
}

.skill-area {
  @include styleclass('flex flex-wrap');

  gap: 1rem;
}
</style>
