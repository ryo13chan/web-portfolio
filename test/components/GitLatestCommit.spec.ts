import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import GitLatestCommit from '~/components/GitLatestCommit.vue'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import { useGitStore } from '~/store/git'
import dayjs from 'dayjs'

describe('Git最新コミット', () => {
  const wrapper = mount(GitLatestCommit, {
    global: {
      components: { Avatar, Tag, GitLatestCommit },
      plugins: [
        createTestingPinia({
          initialState: {
            html_url: '',
            commit: {
              message: '',
              author: {
                date: '',
              },
            },
          },
        }),
      ],
    },
  })

  const store = useGitStore()
  store.$state.data = {
    html_url:
      'https://github.com/ryo13chan/web-portfolio/commit/fa4016805e46bc436250163c757ff1da51772501',
    commit: {
      message: 'first commit',
      author: {
        date: dayjs().subtract(1, 'w').format('YYYY-MM-DD'),
      },
    },
  }

  describe('コミット日時', () => {
    const commitDate = wrapper.find('span')

    test('表示されること', () => {
      expect(commitDate.text()).toBe(
        dayjs().subtract(1, 'w').format('YYYY-MM-DD')
      )
    })
  })

  describe('新着ラベル', () => {
    describe('コミット日時が1週間より前', () => {
      test('表示されないこと', () => {
        const newLabel = wrapper.findComponent(Tag)

        expect(newLabel.exists()).toBeFalsy()
      })
    })

    describe('コミット日時が1週間以内', () => {
      const wrapper = mount(GitLatestCommit, {
        global: {
          components: { Avatar, Tag, GitLatestCommit },
          plugins: [
            createTestingPinia({
              initialState: {
                html_url: '',
                commit: {
                  message: '',
                  author: {
                    date: '',
                  },
                },
              },
            }),
          ],
        },
      })

      const store = useGitStore()
      store.$state.data = {
        html_url:
          'https://github.com/ryo13chan/web-portfolio/commit/fa4016805e46bc436250163c757ff1da51772501',
        commit: {
          message: 'first commit',
          author: {
            date: dayjs().format('YYYY-MM-DD'),
          },
        },
      }

      test('表示されること', () => {
        const newLabel = wrapper.findComponent(Tag)

        expect(newLabel.text()).toBe('New')
        expect(newLabel.exists()).toBeTruthy()
      })
    })
  })
})
