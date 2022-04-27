<script setup lang="ts"></script>
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
}
</style>
