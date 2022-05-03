<script setup lang="ts">
const introductionCode = `const 作者 = {
  名前: 'Ryo（りょう）',
  性別: '男',
  生年月日: '1992-10-20',
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

    ],
    苦手なこと: [

    ],
    心掛けていること: [

    ],
  }
}`
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>About</h2>
    <div class="grid">
      <div class="col-12 xl:col-6">
        <highlightjs language="javascript" :code="introductionCode" />
      </div>
      <div class="col-12 xl:col-6">
        <!-- TODO: タイムライン -->
      </div>
      <!-- TODO: 経歴を一覧表示 -->
    </div>
  </div>
</template>

<style scoped lang="scss">
::v-deep .hljs {
  padding: 1.5rem;
  font-size: 0.85rem;
  line-height: 1.5rem;
  white-space: pre-wrap;
  background: #282c34;
}
</style>
