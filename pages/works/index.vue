<script setup lang="ts">
import { Skill } from '~/components/SkillChip.vue'
import WorkCard from '~/components/works/WorkCard.vue'

const title = ref('Works')
useHead({
  title: title.value,
})

const webPortfolioImageUrl = computed(
  () => new URL('../../assets/images/web-portfolio.png', import.meta.url).href
)
const webPortfolioSkills = ref<Skill[]>([
  {
    key: 'nuxtjs',
    label: 'Nuxt3',
  },
  {
    key: 'vuejs',
    label: 'Vue Composition API',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'primevue',
    label: 'PrimeVUE',
    noIcon: true,
  },
  {
    key: 'primeflex',
    label: 'PrimeFlex',
    noIcon: true,
  },
  {
    key: 'pinia',
    label: 'Pinia',
    noIcon: true,
  },
  {
    key: 'netlify',
    label: 'Netlify',
    noIcon: true,
  },
  {
    key: 'vitest',
    label: 'Vitest',
    noIcon: true,
  },
])

const mobilePortfolioImageUrl = computed(
  () =>
    new URL('../../assets/images/mobile-portfolio.png', import.meta.url).href
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
  {
    key: 'flutter',
    label: 'Flutter Web',
  },
  {
    key: 'github',
    label: 'Github Actions',
  },
  {
    key: 'github',
    label: 'Github Pages',
  },
])

const reserveSimulationImageUrl = computed(
  () =>
    new URL('../../assets/images/reserve-simulation.png', import.meta.url).href
)
const reserveSimulationSkills = ref<Skill[]>([
  {
    key: 'nuxtjs',
    label: 'Nuxt3',
  },
  {
    key: 'vuejs',
    label: 'Vue Composition API',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'primevue',
    label: 'PrimeVUE',
    noIcon: true,
  },
  {
    key: 'primeflex',
    label: 'PrimeFlex',
    noIcon: true,
  },
])

const newComicsImageUrl = computed(
  () => new URL('../../assets/images/new-comics.png', import.meta.url).href
)
const newComicsSkills = ref<Skill[]>([
  {
    key: 'nuxtjs',
    label: 'Nuxt3',
  },
  {
    key: 'vuejs',
    label: 'Vue Composition API',
  },
  {
    key: 'typescript',
    label: 'TypeScript',
  },
  {
    key: 'primevue',
    label: 'PrimeVUE',
    noIcon: true,
  },
  {
    key: 'primeflex',
    label: 'PrimeFlex',
    noIcon: true,
  },
])
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <div class="grid">
      <div class="col-12 lg:col-6">
        <WorkCard
          :image="webPortfolioImageUrl"
          title="Web Portfolio"
          to="/"
          :skills="webPortfolioSkills"
          description="当サイトです。"
        />
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          :image="mobilePortfolioImageUrl"
          title="Mobile Portfolio"
          href="https://ryo13chan.github.io/mobile-portfolio/"
          target="_blank"
          :skills="mobilePortfolioSkills"
          description="モバイルエンジニアとしてのポートフォリオサイトです。"
        />
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          :image="reserveSimulationImageUrl"
          title="積立シミュレーション"
          to="/works/reserve-simulation/"
          :skills="reserveSimulationSkills"
        >
          <template #content>
            <div>
              数値を入力して<span class="font-bold">最終積立金額</span>、<span
                class="font-bold"
                >積立期間</span
              >、<span class="font-bold">毎月積立金額</span
              >をシミュレートできます。
            </div>
            <div>積立の推移はチャートで確認できます。</div>
          </template>
        </WorkCard>
      </div>
      <div class="col-12 lg:col-6">
        <WorkCard
          :image="newComicsImageUrl"
          title="新刊コミック一覧"
          to="/works/new-comics/"
          :skills="newComicsSkills"
        >
          <template #content>
            <div>近日発売予定のコミックを確認できます。</div>
            <div>楽天の新刊コミックAPIを使用しています。</div>
          </template>
        </WorkCard>
      </div>
    </div>
  </div>
</template>
