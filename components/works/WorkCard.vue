<script setup lang="ts">
import { Skill } from '~/components/SkillChip.vue'

defineProps<{
  image: string
  title: string
  href?: string
  to?: string
  target?: string
  skills: Skill[]
  description?: string
}>()
</script>

<template>
  <Card class="border-round-2xl">
    <template #header>
      <nuxt-link :href="href" :to="to" :target="target">
        <img v-lazy="image" class="p-2" />
      </nuxt-link>
    </template>
    <template #title>
      <nuxt-link :href="href" :to="to" :target="target" class="title">{{
        title
      }}</nuxt-link>
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
@import 'primeflex/primeflex';

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
