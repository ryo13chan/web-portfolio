import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt', '@nuxtjs/dayjs'],
  // components: ['~/components', '~/components/test/'],
  css: [
    'normalize.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    '@/assets/css/app.scss',
    '~/node_modules/highlight.js/styles/vs2015.css',
  ],
  ssr: false,
  typescript: {
    strict: true,
  },
  vite: {
    base: '/_nuxt/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.scss";',
        },
      },
    },
  },
})
