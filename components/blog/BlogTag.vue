<script setup lang="ts">
import { BlogTag } from '~/composables/blogTagData'

type Props = {
  tag: BlogTag | undefined
}
defineProps<Props>()
</script>

<template>
  <Chip v-if="tag" class="blog-tag">
    <nuxt-link :to="`/blog/tag/${tag.key}`" class="p-1 text-color">
      <slot :tag="tag">{{ tag.label }}</slot>
    </nuxt-link>
  </Chip>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.blog-tag {
  &:hover {
    @include styleclass('bg-gray-400');
  }
}
</style>
