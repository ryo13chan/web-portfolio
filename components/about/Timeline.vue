<script setup lang="ts">
type event = {
  title: string
  date: string
  descriptions?: string[]
}
const events = ref<event[]>([
  {
    title: '誕生',
    date: '1992年',
    descriptions: [
      '千葉県にて誕生',
      'すぐ北海道に移住したので、北海道出身ということにしている',
    ],
  },
  {
    title: '大学',
    date: '2011-2015年',
    descriptions: [
      '道内の大学に進学し、一人暮らし開始',
      '授業でプログラミングを学び、エンジニアに興味を持つ',
    ],
  },
  {
    title: '就職',
    date: '2015年',
    descriptions: [
      '道内の金融系SIerへ入社',
      '研修のため4月から上京することに',
      '以降都内の多くの現場に常駐し、開発経験を積む',
    ],
  },
  {
    title: '転職',
    date: '2017年',
    descriptions: [
      '元々興味があったWeb業界へ進む決意',
      '独学でWebアプリ開発を学ぶ',
      '自社サービス開発のエンジニアとして転職',
    ],
  },
  {
    title: '独立',
    date: '2018年',
    descriptions: [
      '自分らしい生き方を模索し、個人事業主になる',
      'Webアプリ開発をメインに定め、学習を本格的に開始',
      '業務委託のエンジニアとして、Webアプリ開発に携わる',
    ],
  },
  {
    title: '移住',
    date: '2021年',
    descriptions: ['以前からの夢だった札幌へ移住', 'フルリモートで活動中'],
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
              <span class="font-bold">{{ item.title }}</span>
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
