<script setup lang="ts">
import { Skill } from '~/components/skills/SkillPanel.vue'
import WorkCard from '~~/components/works/WorkCard.vue'

const webPortfolioImageUrl = computed(
  () => new URL('../assets/images/web-portfolio.png', import.meta.url).href
)
const webPortfolioSkills = ref<Skill[]>([
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'nuxtjs',
    label: 'Nuxt.js',
  },
])

const mobilePortfolioImageUrl = computed(
  () => new URL('../assets/images/mobile-portfolio.png', import.meta.url).href
)
const mobilePortfolioSkills = ref<Skill[]>([
  {
    key: 'dart',
    label: 'Dart',
  },
  {
    key: 'flutter',
    label: 'Flutter',
  },
])

const tsumitateSimulationImageUrl = computed(
  () => new URL('../assets/images/mobile-portfolio.png', import.meta.url).href
)
const tsumitateSimulationSkills = ref<Skill[]>([
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'nuxtjs',
    label: 'Nuxt.js',
  },
])
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>Works</h2>
    <div class="grid">
      <div class="col-12 lg:col-6">
        <WorkCard
          :image="webPortfolioImageUrl"
          title="Web Portfolio"
          href="https://ryo13chan.github.io/web-portfolio/"
          :skills="webPortfolioSkills"
          description="当サイトです。"
        />
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          :image="mobilePortfolioImageUrl"
          title="Mobile Portfolio"
          href="https://ryo13chan.github.io/mobile-portfolio/"
          :skills="mobilePortfolioSkills"
          description="モバイルエンジニアとしてのポートフォリオサイトです。"
        />
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          :image="tsumitateSimulationImageUrl"
          title="積立シミュレーション"
          to="/reserve-simulation/"
          :skills="tsumitateSimulationSkills"
          description="積立シミュレーション"
        />
      </div>
    </div>
  </div>
</template>
