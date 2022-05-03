<script setup lang="ts">
import SelfIntroduction from '../components/about/SelfIntroduction.vue'
import Timeline from '../components/about/Timeline.vue'
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>About</h2>
    <div class="grid">
      <div class="col-12 xl:col-6">
        <SelfIntroduction />
      </div>
      <div class="col-12 xl:col-6">
        <Timeline />
      </div>
      <!-- TODO: 経歴を一覧表示 -->
    </div>
  </div>
</template>
