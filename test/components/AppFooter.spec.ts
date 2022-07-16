import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import AppFooter from '../../components/AppFooter.vue'
import GitLastCommit from '../../components/GitLastCommit.vue'
import Avatar from 'primevue/avatar'

describe('フッター', () => {
  const wrapper = mount(AppFooter, {
    global: {
      components: { Avatar, GitLastCommit },
    },
  })

  describe('リンク', () => {
    const linkList = wrapper.findAll('nuxt-link')

    test('リンク数が正しいこと', () => {
      expect(linkList.length).toBe(2)
    })

    describe('Github', () => {
      const github = linkList.at(0)

      test('表示されること', () => {
        expect(github?.find('button').attributes().icon).toBe('pi pi-github')
      })

      test('外部リンクで開くこと', () => {
        expect(github?.attributes().href).toBe('https://github.com/ryo13chan')
        expect(github?.attributes().target).toBe('_blank')
      })
    })

    describe('Twitter', () => {
      const twitter = linkList.at(1)

      test('表示されること', () => {
        expect(twitter?.find('button').attributes().icon).toBe('pi pi-twitter')
      })

      test('外部リンクで開くこと', () => {
        expect(twitter?.attributes().href).toBe(
          'https://twitter.com/ryo_chan_13'
        )
        expect(twitter?.attributes().target).toBe('_blank')
      })
    })
  })

  describe('コピーライト', () => {
    test('表示されること', () => {
      expect(wrapper.text()).toBe('© Ryo 2022')
    })
  })
})
