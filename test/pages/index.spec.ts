import { mount } from '@vue/test-utils'
import { test, expect, vi, describe } from 'vitest'
import Home from '../../pages/index.vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'

vi.stubGlobal('useHead', () => {})

describe('Home画面', () => {
  const wrapper = mount(Home, {
    global: {
      components: { Avatar, Button },
    },
  })

  test('見出しが表示されること', () => {
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe("Welcome to Ryo's Portfolio!")
  })
  describe('アイコン', () => {
    const icon = wrapper.findComponent(Avatar)
    test('表示されること', () => {
      expect(icon.exists()).toBe(true)
    })
    test('アイコン画像が指定されていること', () => {
      expect(
        icon.find('img').attributes().src.endsWith('/assets/images/icon.jpg')
      ).toBe(true)
    })
  })
  describe('自己紹介ボタン', () => {
    const button = wrapper
      .findAllComponents(Button)
      .find((c) => c.text() === '自己紹介')
    test('表示されること', () => {
      expect(button?.exists()).toBe(true)
    })
    test.skip('クリックでAbout画面に遷移すること', () => {})
  })
  describe('作品集ボタン', () => {
    const button = wrapper
      .findAllComponents(Button)
      .find((c) => c.text() === '作品集')
    test('表示されること', () => {
      expect(button?.exists()).toBe(true)
    })
    test.skip('クリックでWorks画面に遷移すること', () => {})
  })
})
