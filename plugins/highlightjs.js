import { defineNuxtPlugin } from '#app'
import vuePlugin from '@highlightjs/vue-plugin'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('json', json)

  nuxtApp.vueApp.use(hljs)
  nuxtApp.vueApp.use(vuePlugin)
})
