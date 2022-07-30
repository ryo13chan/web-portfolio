import { mount } from '@vue/test-utils'
import { test, expect, describe, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import AppHeader from '~/components/AppHeader.vue'
import GitLatestCommit from '~/components/GitLatestCommit.vue'
import Avatar from 'primevue/avatar'

vi.stubGlobal('useRoute', () => {
  return { path: [] }
})

describe('ヘッダー', () => {
  const wrapper = mount(AppHeader, {
    global: {
      components: { Avatar, GitLatestCommit },
      plugins: [createTestingPinia()],
    },
  })

  describe('Git最新コミット', () => {
    const gitLatestCommit = wrapper.findComponent(GitLatestCommit)

    test('表示されること', () => {
      expect(gitLatestCommit.exists()).toBeTruthy()
    })
  })

  describe('グローバルナビ', () => {
    const menuList = wrapper.find('ul')

    test('表示されること', () => {
      expect(menuList.exists()).toBeTruthy()
    })
    test('メニュー数が正しいこと', () => {
      expect(menuList.findAll('li').length).toBe(5)
    })

    describe('Home', () => {
      const home = menuList.findAll('li').at(0)

      test('表示されること', () => {
        expect(home?.text()).toBe('Home')
      })
      test('Home画面に遷移すること', () => {
        expect(home?.find('nuxt-link').attributes().to).toBe('/')
      })
    })

    describe('About', () => {
      const about = menuList.findAll('li').at(1)

      test('表示されること', () => {
        expect(about?.text()).toBe('About')
      })
      test('About画面に遷移すること', () => {
        expect(about?.find('nuxt-link').attributes().to).toBe('/about')
      })
    })

    describe('Skills', () => {
      const skills = menuList.findAll('li').at(2)

      test('表示されること', () => {
        expect(skills?.text()).toBe('Skills')
      })
      test('Skills画面に遷移すること', () => {
        expect(skills?.find('nuxt-link').attributes().to).toBe('/skills')
      })
    })

    describe('Works', () => {
      const works = menuList.findAll('li').at(3)

      test('表示されること', () => {
        expect(works?.text()).toBe('Works')
      })
      test('Works画面に遷移すること', () => {
        expect(works?.find('nuxt-link').attributes().to).toBe('/works')
      })
    })

    describe('Blog', () => {
      const works = menuList.findAll('li').at(4)

      test('表示されること', () => {
        expect(works?.text()).toBe('Blog')
      })
      test('Blog画面に遷移すること', () => {
        expect(works?.find('nuxt-link').attributes().to).toBe('/blog/article')
      })
    })
  })
})
