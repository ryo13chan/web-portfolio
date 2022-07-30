import { mount } from '@vue/test-utils'
import { test, expect, vi, describe } from 'vitest'
import About from '~/pages/about.vue'
import SelfIntroduction from '~/components/about/SelfIntroduction.vue'
import Timeline from '~/components/about/Timeline.vue'
import Career from '~/components/about/Career.vue'

vi.stubGlobal('useHead', () => {})

describe('About画面', () => {
  const wrapper = mount(About, {
    global: {
      components: { SelfIntroduction, Timeline, Career },
    },
  })

  describe('見出し', () => {
    const h2 = wrapper.find('h2')

    test('表示されること', () => {
      expect(h2.text()).toBe('About')
    })
  })

  describe('自己紹介', () => {
    const selfIntroduction = wrapper.findComponent(SelfIntroduction)

    test('表示されること', () => {
      expect(selfIntroduction.exists()).toBeTruthy()
    })
  })

  describe('タイムライン', () => {
    const timeline = wrapper.findComponent(Timeline)

    test('表示されること', () => {
      expect(timeline.exists()).toBeTruthy()
    })
  })

  describe('経歴', () => {
    const career = wrapper.findComponent(Career)

    test('表示されること', () => {
      expect(career.exists()).toBeTruthy()
    })
  })
})
