import { shallowMount } from '@vue/test-utils'
import { test, expect, vi, describe } from 'vitest'
import Article from '~/pages/blog/article/index.vue'
import BlogList from '~/components/blog/BlogList.vue'

vi.stubGlobal('useHead', () => {})

describe('Blog画面', () => {
  const wrapper = shallowMount(Article, {
    global: {
      components: { BlogList },
    },
  })

  describe('見出し', () => {
    const h2 = wrapper.find('h2')

    test('表示されること', () => {
      expect(h2.text()).toBe('Blog')
    })
  })

  describe('ブログ一覧', () => {
    const blogList = wrapper.findComponent(BlogList)

    test('表示されること', () => {
      expect(blogList.exists()).toBeTruthy()
    })
  })
})
