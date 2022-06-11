<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Web Portfolio` : 'Web Portfolio'
  },
})
</script>
<template>
  <AppHeader />
  <main>
    <slot></slot>
  </main>
  <ScrollTop />
  <AppFooter />
</template>

<style scoped lang="scss">
main {
  flex: 1;
  padding: 1rem;
}
</style>
