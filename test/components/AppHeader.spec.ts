import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import AppHeader from '~/components/AppHeader.vue'
import GitLastCommit from '~/components/GitLastCommit.vue'
import Avatar from 'primevue/avatar'

describe('ヘッダー', () => {
  const wrapper = mount(AppHeader, {
    global: {
      components: { Avatar, GitLastCommit },
      plugins: [createTestingPinia()],
    },
  })

  describe('Git最新コミット', () => {
    const gitLastCommit = wrapper.findComponent(GitLastCommit)

    test('表示されること', () => {
      expect(gitLastCommit.exists()).toBe(true)
    })
  })

  describe('グローバルナビ', () => {
    const menuList = wrapper.find('ul')

    test('表示されること', () => {
      expect(menuList.exists()).toBe(true)
    })
    test('メニュー数が正しいこと', () => {
      expect(menuList.findAll('li').length).toBe(4)
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
  })
})
