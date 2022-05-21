<script setup lang="ts">
const introductionCode = `const 作者 = {
  名前: 'Ryo（りょう）',
  性別: '男',
  生年月日: '1992/10/20',
  出身地: '北海道',
  居住地: '北海道',
  好きなもの: [
    'お笑い',  '漫画',  'ゲーム',  'ラジオ',  'サッカー',  'YouTube',  '散歩',  'サウナ'
  ],
  仕事: {
    職業: 'Webエンジニア',
    業務形態： [
      'フリーランス',  'リモートワーク ',  '週5日稼働'
    ],
    得意なこと: [
      'フロントエンド開発',  'デザインカンプのコード化',  '少人数チームでのアジャイル開発'
    ],
    苦手なこと: [
      'インフラ領域',  'チームマネジメント',  '顧客折衝'
    ],
    心掛けていること: [
      '自走',  '即レス',  '情報のインプット',  '未経験技術へのチャレンジ',  '継続的な改善提案'
    ],
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
}
</style>
