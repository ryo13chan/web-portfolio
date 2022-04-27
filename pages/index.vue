<template>
  <div class="home">
    <div class="md:mr-5">
      <h1>Welcome to Ryo's Portfolio!</h1>
      <div>
        <p>はじめまして。</p>
        <p>
          Webエンジニアの<span class="font-bold text-xl">Ryo</span>と申します。
        </p>
        <p>当サイトはWebエンジニアとしてのポートフォリオです。</p>
        <p>是非ご覧下さい！</p>
      </div>
    </div>
    <Avatar
      image="assets/images/icon.jpg"
      class="mr-3 w-15rem h-15rem md:w-15rem md:h-15rem"
      shape="circle"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';

.home {
  @include styleclass(
    'flex align-items-center justify-content-center flex-column md:flex-row'
  );

  height: calc(100vh - 170px);
}
</style>
