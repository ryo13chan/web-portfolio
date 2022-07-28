import { mount } from '@vue/test-utils'
import { test, expect, vi, describe } from 'vitest'
import Works from '~/pages/works/index.vue'
import WorkCard from '~/components/works/WorkCard.vue'

vi.stubGlobal('useHead', () => {})

describe('Works画面', () => {
  const wrapper = mount(Works, {
    global: {
      components: { WorkCard },
    },
  })

  describe('見出し', () => {
    const h2 = wrapper.find('h2')

    test('表示されること', () => {
      expect(h2.text()).toBe('Works')
    })
  })

  describe('Web Portfolio', () => {
    const webPortfolioCard = wrapper.findAllComponents(WorkCard).at(0)

    test('表示されること', () => {
      expect(webPortfolioCard?.vm.title).toBe('Web Portfolio')
    })
    test('ホーム画面に遷移すること', () => {
      expect(webPortfolioCard?.vm.to).toBe('/')
    })
  })

  describe('Mobile Portfolio', () => {
    const mobilePortfolioCard = wrapper.findAllComponents(WorkCard).at(1)

    test('表示されること', () => {
      expect(mobilePortfolioCard?.vm.title).toBe('Mobile Portfolio')
    })
    test('外部リンクで開くこと', () => {
      expect(mobilePortfolioCard?.vm.href).toBe(
        'https://ryo13chan.github.io/mobile-portfolio/'
      )
      expect(mobilePortfolioCard?.vm.target).toBe('_blank')
    })
  })

  describe('積立シミュレーション', () => {
    const reserveSimulationCard = wrapper.findAllComponents(WorkCard).at(2)

    test('表示されること', () => {
      expect(reserveSimulationCard?.vm.title).toBe('積立シミュレーション')
    })
    test('積立シミュレーション画面に遷移すること', () => {
      expect(reserveSimulationCard?.vm.to).toBe('/works/reserve-simulation/')
    })
  })

  describe('新刊コミック一覧', () => {
    const newComicsCard = wrapper.findAllComponents(WorkCard).at(3)

    test('表示されること', () => {
      expect(newComicsCard?.vm.title).toBe('新刊コミック一覧')
    })
    test('新刊コミック一覧画面に遷移すること', () => {
      expect(newComicsCard?.vm.to).toBe('/works/new-comics/')
    })
  })

  describe('Blog', () => {
    const blogCard = wrapper.findAllComponents(WorkCard).at(4)

    test('表示されること', () => {
      expect(blogCard?.vm.title).toBe('Blog')
    })
    test('Blog画面に遷移すること', () => {
      expect(blogCard?.vm.to).toBe('/blog/article')
    })
  })
})
