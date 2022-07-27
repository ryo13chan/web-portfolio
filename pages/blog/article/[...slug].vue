<script setup lang="ts">
import dayjs from 'dayjs'

const title = ref('Blog')
useHead({
  title: title.value,
})

const thumbnailImageUrl = computed(
  () => (thumbnail: string) =>
    new URL(
      `../../../assets/images/${thumbnail || 'icon.jpg'}`,
      import.meta.url
    ).href
)
const tags = (tags: string[]) =>
  tags.map((tag: string) => blogTagData.find((tagData) => tagData.key === tag))

const createdAt = (date: Date) => dayjs(date).format('YYYY-MM-DD')
</script>

<template>
  <div class="mx-2 lg:px-8">
    <ContentDoc>
      <template #default="{ doc }">
        <div class="flex align-items-center mt-2">
          <i class="pi pi-calendar mr-2"></i>
          <div>{{ createdAt(doc.createdAt) }}</div>
        </div>
        <h1 class="mt-1">{{ doc.title }}</h1>
        <div v-if="doc.tags" class="flex align-items-center my-3">
          <i class="pi pi-tags mr-1"></i>
          <div class="tags">
            <BlogTag v-for="tag in tags(doc.tags)" :key="tag?.key" :tag="tag" />
          </div>
        </div>
        <img
          v-if="doc.thumbnail"
          :src="thumbnailImageUrl(doc.thumbnail)"
          class="thumbnail"
        />
        <ContentRenderer :value="doc" />
      </template>
      <template #empty />
      <template #not-found />
    </ContentDoc>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.thumbnail {
  @include styleclass('w-full max-h-25rem');

  object-fit: contain;
}

.tags {
  @include styleclass('flex flex-wrap gap-2');
}

::v-deep h2,
::v-deep h3,
::v-deep h4,
::v-deep h5 {
  a {
    color: var(--text-color);
  }
}

::v-deep pre {
  @include styleclass('p-2 surface-200 border-round-md');
}

::v-deep p > code {
  @include styleclass('px-2 py-1 surface-200 border-round-md');
}
</style>
