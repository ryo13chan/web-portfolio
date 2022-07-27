<script setup lang="ts">
import { RouteRecordName } from 'vue-router'
import { blogTagData } from '~/composables/blogTagData'

const tags = ref(blogTagData)

type Toc = {
  depth: number
  id: string
  text: string
  children: {
    depth: number
    id: string
    text: string
  }[]
}[]
const toc = ref<Toc>([])
const fetchToc = async (name: RouteRecordName | undefined | null) => {
  if (name !== 'blog-article-slug') {
    toc.value = []
    return
  }
  const content = await queryContent(useRoute().path).findOne()
  toc.value = content.body.toc.links
}
onBeforeMount(async () => await fetchToc(useRoute().name))
watch(
  () => useRoute().name,
  async (name) => await fetchToc(name)
)
</script>

<template>
  <div class="lg:flex">
    <div class="lg:flex-1">
      <nuxt-child />
    </div>
    <!-- サイドメニュー -->
    <div class="side-menu">
      <!-- 目次 -->
      <div v-if="toc.length" class="mb-4">
        <div class="flex align-items-center mb-3">
          <i class="pi pi-list mr-1"></i>
          <div class="text-xl font-bold">目次</div>
        </div>
        <!-- 見出し2 -->
        <div v-for="content in toc" :key="content.id">
          <div class="content">
            <a :href="`#${content.id}`">{{ content.text }}</a>
          </div>
          <!-- 見出し3 -->
          <div
            v-for="childContent in content.children"
            :key="childContent.id"
            class="ml-3 content"
          >
            <a :href="`#${childContent.id}`">{{ childContent.text }}</a>
          </div>
        </div>
      </div>
      <!-- タグ一覧 -->
      <div v-if="tags.length">
        <div class="flex align-items-center">
          <i class="pi pi-tags mr-1"></i>
          <div class="text-xl font-bold">タグ</div>
        </div>
        <div class="tags">
          <BlogTag v-for="tag in tags" :key="tag.key" :tag="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

.side-menu {
  @include styleclass('p-2 mt-4 lg:mt-0 sticky h-full');

  top: 6rem;

  @media screen and (min-width: 992px) {
    width: 20rem;
    max-width: 20rem;
  }

  .tags {
    @include styleclass('flex flex-wrap gap-2 pt-3');
  }

  .content {
    @include styleclass('px-2 py-1 text-sm');

    a {
      color: var(--text-color);

      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
