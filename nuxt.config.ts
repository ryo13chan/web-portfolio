import { defineNuxtConfig } from 'nuxt'

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
    server: {
      proxy: {
        '/rakuten': {
          target: 'https://books.rakuten.co.jp',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/rakuten/, ''),
        },
      },
    },
  },
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Welcome to Ryo's Portfolio!",
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Ryo's Portfolio",
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ryo-portfolio.netlify.app',
      },
      { hid: 'og:title', property: 'og:title', content: "Ryo's Portfolio" },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Welcome to Ryo's Portfolio!",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ryo-portfolio.netlify.app/_nuxt/icon.c1de94d3.jpg',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@ryo_chan_13' },
    ],
  },
})
