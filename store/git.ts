import { defineStore } from 'pinia'

export const useGitStore = defineStore('git', {
  state: () => ({
    data: {
      html_url: '',
      commit: {
        message: '',
        author: {
          date: '',
        },
      },
    },
  }),
  getters: {
    commitUrl: (state) => {
      return state.data.html_url
    },
    commitMessage: (state): string => {
      return state.data.commit.message
    },
    commitDate: (state): string => {
      return state.data.commit.author.date
    },
  },
  actions: {
    async getCommit() {
      this.data = await $fetch(
        'https://api.github.com/repos/ryo13chan/web-portfolio/commits/master'
      )
    },
  },
})
