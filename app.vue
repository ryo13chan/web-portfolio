<script setup lang="ts">
import { useUserStore } from './store/user'
import CCCccc from './components/test/CCCccc.vue'
import InputText from 'primevue/inputtext'
import { storeToRefs } from 'pinia'

const a = ref<string>('aaaaaaaaa')
// const b = { a: 'a', b: 'aaa' }

const userStore = useUserStore()
const { users, getUserCount, getTest } = storeToRefs(userStore)

// const fn = (args) => {
//   console.log(args)
// }
// function greeting(name) {
//   return `Hello ${name}!`
// }

const isLoading = ref<boolean>(false)

onBeforeMount(async () => {
  isLoading.value = true
  await userStore.getUsers()
  isLoading.value = false
})
</script>

<template>
  <div v-if="!isLoading" class="aaa">
    <!-- <NuxtWelcome /> -->
    <span class="ccc">
      {{ a }}
    </span>
    <span class="">
      {{ a }}
    </span>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
    <div>
      {{ getUserCount }}
    </div>
    <div>
      {{ getTest }}
    </div>
    <!-- <input @keydown.enter="submit" /> -->
  </div>
  <Button label="aaa" type="submit" />
  <InputText />
  <BBBbbb />
  <TestCCCccc />
  <CCCccc />
  <template />
</template>

<style scoped lang="scss">
.aaa {
  font-weight: bold;

  .ccc {
    background-color: chartreuse;
  }
}
</style>
