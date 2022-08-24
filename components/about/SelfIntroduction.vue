<script setup lang="ts">
const introductionCode = `const 作者 = {
  名前: 'Ryo（りょう）',
  性別: '男',
  生年月日: '1992/10/20',
  出身地: '北海道',
  居住地: '北海道',
  好きなもの: [
    'お笑い',  '漫画',  'ラジオ',  'YouTube',  '散歩',  'サウナ'
  ],
  仕事: {
    職業: 'Webエンジニア',
    得意: 'フロントエンド開発',
    業務形態： [
      'フリーランス',  'リモートワーク ',  '週5日稼働'
    ]
  }
}`
</script>

<template>
  <highlightjs language="javascript" :code="introductionCode" />
</template>

<style scoped lang="scss">
pre {
  margin: 0;
}

::v-deep .hljs {
  padding: 1.5rem;
  font-size: 0.85rem;
  line-height: 1.5rem;
  white-space: pre-wrap;
  background: #282c34;
  border-radius: 15px;
}
</style>
