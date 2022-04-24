<script setup lang="ts">
type menuItem = {
  key: string
  label: string
  to: string
}
const menus = ref<menuItem[]>([
  {
    key: 'home',
    label: 'Home',
    to: '/',
  },
  {
    key: 'about',
    label: 'About',
    to: '/about',
  },
  {
    key: 'skills',
    label: 'Skills',
    to: '/skills',
  },
  {
    key: 'works',
    label: 'Works',
    to: '/works',
  },
])

const visibleMenu = ref<boolean>(false)
const show = () => (visibleMenu.value = true)
</script>

<template>
  <header class="top-0 left-0 sticky bg-white w-full shadow-1 px-4 py-2">
    <div class="flex justify-content-between align-items-center">
      <div class="flex align-items-center">
        <Avatar
          image="assets/images/icon.jpg"
          class="mr-3"
          size="xlarge"
          shape="circle"
        />
        <!-- TODO: git更新履歴 -->
        <div>aaaaaaaa</div>
      </div>
      <nav class="flex align-items-center">
        <!-- PC用メニュー -->
        <ul class="hidden lg:flex list-none">
          <li v-for="menu in menus" :key="menu.key" class="menu-item px-3">
            <NuxtLink :to="menu.to">{{ menu.label }}</NuxtLink>
          </li>
        </ul>
        <!-- SP用メニューアイコン -->
        <Button
          icon="pi pi-bars"
          class="p-button-outlined p-button-secondary lg:hidden"
          @click="show"
        />
        <!-- SP用メニュー -->
        <Sidebar v-model:visible="visibleMenu" position="right">
          <ul class="list-none">
            <li v-for="menu in menus" :key="menu.key" class="menu-item my-4">
              <NuxtLink :to="menu.to">{{ menu.label }}</NuxtLink>
            </li>
          </ul>
        </Sidebar>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';

.menu-item {
  @include styleclass('px-3 cursor-pointer');

  a {
    color: var(--text-color);

    &:hover {
      color: $primary-color;
      transition: color 0.5s;
    }

    &.router-link-active {
      padding-bottom: 5px;
      color: $primary-color;
      border-bottom: 1px solid;
    }
  }
}
</style>
