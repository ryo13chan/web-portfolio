import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import Avatar from 'primevue/avatar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
  // BUTTON
  nuxtApp.vueApp.component('Button', Button)
  // OVERLAY
  nuxtApp.vueApp.component('Sidebar', Sidebar)
  // MISC
  nuxtApp.vueApp.component('Avatar', Avatar)
})
