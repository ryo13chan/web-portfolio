<script setup lang="ts">
import ComicList from '~/components/new-comics/comicList.vue'

const title = ref('新刊コミック一覧')
useHead({
  title: title.value,
})
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <TabView :active-index="1">
      <TabPanel header="前月">
        <ComicList prev />
      </TabPanel>
      <TabPanel header="最新">
        <ComicList />
      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

::v-deep .p-tabview-nav-content {
  @include styleclass('border-round-top-2xl');
}

::v-deep .p-card {
  @include styleclass('border-round-bottom-2xl');
}

::v-deep .p-tabview-panels {
  @include styleclass('p-0');
}
</style>
