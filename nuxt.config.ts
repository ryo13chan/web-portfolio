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
})
