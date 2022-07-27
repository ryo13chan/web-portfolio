<script setup lang="ts">
import dayjs from 'dayjs'
import { blogTagData } from '~/composables/blogTagData'

type Props = {
  path: string
  where?: { [key: string]: any }
  sort?: { [key: string]: any }
}
withDefaults(defineProps<Props>(), {
  where: () => {
    return {}
  },
  sort: () => {
    return { createdAt: -1 }
  },
})

// const thumbnailImageUrl = computed(
//   () => (thumbnail: string) =>
//     new URL(`../../assets/images/${thumbnail || 'icon.jpg'}`, import.meta.url)
//       .href
// )
const createdAt = (date: Date) => dayjs(date).format('YYYY-MM-DD')
const blogTag = (key: string) => blogTagData.find((tag) => tag.key === key)
</script>

<template>
  <ContentQuery v-slot="{ data }" :path="path" :where="where" :sort="sort">
    <ContentRenderer :value="data">
      <div
        v-for="article in data"
        :key="article._path"
        class="flex py-3 border-bottom-1 border-300"
      >
        <!-- <nuxt-link :to="article._path">
          <img :src="thumbnailImageUrl(article.thumbnail)" class="thumbnail" />
        </nuxt-link> -->
        <div>
          <div class="flex align-items-center">
            <i class="pi pi-calendar mr-2"></i>
            <div>{{ createdAt(article.createdAt) }}</div>
          </div>
          <nuxt-link :to="article._path" class="title">{{
            article.title
          }}</nuxt-link>
          <div class="flex align-items-center mt-3">
            <i class="pi pi-tags mr-1"></i>
            <div class="tags">
              <BlogTag
                v-for="tag in article.tags"
                :key="tag"
                :tag="blogTag(tag)"
              />
            </div>
          </div>
          <!-- <h2>{{ article }}</h2> -->
        </div>
      </div>
    </ContentRenderer>
  </ContentQuery>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.thumbnail {
  @include styleclass('w-5rem h-5rem mr-3');

  object-fit: cover;
}

.title {
  @include styleclass('text-2xl font-bold');

  &:hover {
    @include styleclass('underline');
  }
}

.tags {
  @include styleclass('flex flex-wrap gap-2');
}
</style>
