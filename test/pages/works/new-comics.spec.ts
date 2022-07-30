import { mount } from '@vue/test-utils'
import { test, expect, vi, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import NewComics from '~/pages/works/new-comics.vue'
import ComicList from '~/components/new-comics/comicList.vue'
import TabPanel from 'primevue/tabpanel'

vi.stubGlobal('useHead', () => {})

describe('新刊コミック一覧画面', () => {
  const wrapper = mount(NewComics, {
    global: {
      components: { ComicList, TabPanel },
      plugins: [createTestingPinia()],
    },
  })

  describe('見出し', () => {
    const h2 = wrapper.find('h2')

    test('表示されること', () => {
      expect(h2.text()).toBe('新刊コミック一覧')
    })
  })

  describe('一覧', () => {
    const tabPanels = wrapper.findAllComponents(TabPanel)

    test('タブ数が正しいこと', () => {
      expect(tabPanels.length).toBe(2)
    })

    describe('前月', () => {
      const prevComicTabPanel = tabPanels.at(0)

      test('タブが表示されること', () => {
        expect(prevComicTabPanel?.vm.$props.header).toBe('前月')
      })
      test('一覧が表示されること', () => {
        const prevComicList = prevComicTabPanel?.findComponent(ComicList)

        expect(prevComicList?.exists()).toBeTruthy()
      })
    })

    describe('最新', () => {
      const newComicTabPanel = tabPanels.at(1)

      test('タブが表示されること', () => {
        expect(newComicTabPanel?.vm.$props.header).toBe('最新')
      })
      test('一覧が表示されること', () => {
        const newComicList = newComicTabPanel?.findComponent(ComicList)

        expect(newComicList?.exists()).toBeTruthy()
      })
    })
  })
})
