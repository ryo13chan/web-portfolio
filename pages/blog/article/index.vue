<script setup lang="ts">
import BlogList from '~/components/blog/BlogList.vue'

const title = ref('Blog')
useHead({
  title: title.value,
})
</script>

<template>
  <div class="ml-2 lg:pl-8 lg:pr-4">
    <h2>{{ title }}</h2>
    <BlogList path="/blog" />
  </div>
</template>
