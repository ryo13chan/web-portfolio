import { mount } from '@vue/test-utils'
import { test, expect, vi, describe } from 'vitest'
import Skills from '~/pages/skills.vue'
import FrontendPanel from '~/components/skills/FrontendPanel.vue'
import BackendPanel from '~/components/skills/BackendPanel.vue'
import DBInfraPanel from '~/components/skills/DBInfraPanel.vue'
import ToolPanel from '~/components/skills/ToolPanel.vue'
import InterestPanel from '~/components/skills/InterestPanel.vue'

vi.stubGlobal('useHead', () => {})

describe('Skills画面', () => {
  const wrapper = mount(Skills, {
    global: {
      components: {
        FrontendPanel,
        BackendPanel,
        DBInfraPanel,
        ToolPanel,
        InterestPanel,
      },
    },
  })

  describe('見出し', () => {
    const h2 = wrapper.find('h2')

    test('表示されること', () => {
      expect(h2.text()).toBe('Skills')
    })
  })

  describe('フロントエンド', () => {
    const frontendPanel = wrapper.findComponent(FrontendPanel)

    test('表示されること', () => {
      expect(frontendPanel.exists()).toBeTruthy()
    })
  })

  describe('バックエンド', () => {
    const backendPanel = wrapper.findComponent(BackendPanel)

    test('表示されること', () => {
      expect(backendPanel.exists()).toBeTruthy()
    })
  })

  describe('DB・インフラ', () => {
    const dbInfraPanel = wrapper.findComponent(DBInfraPanel)

    test('表示されること', () => {
      expect(dbInfraPanel.exists()).toBeTruthy()
    })
  })

  describe('ツール', () => {
    const toolPanel = wrapper.findComponent(ToolPanel)

    test('表示されること', () => {
      expect(toolPanel.exists()).toBeTruthy()
    })
  })

  describe('興味がある・学習中', () => {
    const interestPanel = wrapper.findComponent(InterestPanel)

    test('表示されること', () => {
      expect(interestPanel.exists()).toBeTruthy()
    })
  })
})
