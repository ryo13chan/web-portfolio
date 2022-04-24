import { defineStore } from 'pinia'
import axios from 'axios'

type User = {
  id: number
  name: string
}

const instance = axios.create({
  baseURL: 'https://api.github.com/',
})

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    test: null,
  }),
  getters: {
    getUserCount: (state): number => state.users.length,
    getTest: (state): any => state.test,
  },
  actions: {
    async getUsers() {
      await new Promise((s) => setTimeout(s, 1500))
      this.users = [
        { id: 1, name: 'ryo' },
        { id: 2, name: 'john' },
      ]
      // const { data } = await instance.get(
      //   'repos/ryo13chan/mobile-portfolio/commits/master'
      // )
      // console.log(data)
      // const { data: git } = await useFetch(
      //   'repos/ryo13chan/mobile-portfolio/commits/master',
      //   {
      //     method: 'GET',
      //     baseURL: 'https://api.github.com/',
      //   }
      // )
      // this.test = git
      const { data } = await apiClient.get(
        'repos/ryo13chan/web-portfolio/commits/master'
      )
      this.test = data
    },
  },
})
