<script setup lang="ts">
type event = {
  title: string
  date: string
  descriptions: string[]
}
const events = ref<event[]>([
  {
    title: '誕生',
    date: '1992年',
    descriptions: [],
  },
  {
    title: '大学',
    date: '2011-2015年',
    descriptions: ['授業でプログラミングを学び、エンジニアに興味を持つ'],
  },
  {
    title: '就職',
    date: '2015年',
    descriptions: ['都内の金融系SIerへ入社'],
  },
  {
    title: '転職',
    date: '2017年',
    descriptions: ['元々興味があったWeb開発へ'],
  },
  {
    title: '独立',
    date: '2018年',
    descriptions: ['自分らしい生き方を模索し、個人事業主に'],
  },
  {
    title: '北海道へUターン',
    date: '2021年',
    descriptions: ['札幌でリモートワーク中心に活動中'],
  },
])
</script>

<template>
  <Card>
    <template #content>
      <Timeline :value="events" align="alternate">
        <template #opposite="{ item }">
          <small class="p-text-secondary">{{ item.date }}</small>
        </template>
        <template #content="{ item }">
          <Card class="mb-4 border-solid border-200">
            <template #subtitle>
              {{ item.title }}
            </template>
            <template #content>
              <div
                v-for="(description, i) in item.descriptions"
                :key="i"
                class="text-sm"
              >
                {{ description }}
              </div>
            </template>
          </Card>
        </template>
      </Timeline>
    </template>
  </Card>
</template>

<style scoped lang="scss"></style>
