<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Web Portfolio` : 'Web Portfolio'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: "Welcome to Ryo's Portfolio!",
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: "Ryo's Portfolio",
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://ryo-portfolio.netlify.app',
    },
    { hid: 'og:title', property: 'og:title', content: "Ryo's Portfolio" },
    {
      hid: 'og:description',
      property: 'og:description',
      content: "Welcome to Ryo's Portfolio!",
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://ryo-portfolio.netlify.app/_nuxt/icon.c1de94d3.jpg',
    },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@ryo_chan_13' },
  ],
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
