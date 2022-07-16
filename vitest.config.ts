/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'

import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '~/pages': resolve(__dirname, './pages'),
      '~/components': resolve(__dirname, './components'),
      '~/composables': resolve(__dirname, './composables'),
      '~/store': resolve(__dirname, './store'),
    },
  },
})
