<script setup lang="ts">
import BlogList from '~/components/blog/BlogList.vue'
import { blogTagData } from '~/composables/blogTagData'

const tag = useRoute().path.match('[^/]+$')
const tagData = blogTagData.find((t) => t.key === tag![0])
const title = ref(tagData?.label)
useHead({
  title: title.value,
})

const where = {
  tags: { $contains: [tagData?.key] },
}
</script>

<template>
  <div class="ml-2 lg:pl-8 lg:pr-4">
    <h2>{{ title }}</h2>
    <BlogList path="/blog" :where="where" />
  </div>
</template>
