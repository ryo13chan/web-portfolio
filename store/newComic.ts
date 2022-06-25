import { defineStore } from 'pinia'
// 「ID」列のキー
export const idKey = 0
// 「タイトル」列のキー
export const titleKey = 5
// 「著者」列のキー
export const authorKey = 7
// 「レーベル」列のキー
export const labelKey = 10
// 「日付」列のキー
export const dateKey = 20

export type Comic = { [dateKey]: string; [labelKey]: string }
type ComicListGroupByDate = {
  date: string
  list: Comic[]
}
export type Label = {
  key: string
  name: string
  count: number
}

export const useNewComicStore = defineStore('newComic', {
  state: () => ({
    comics: [] as Comic[],
  }),
  getters: {
    comicsListGroupByDate: (state): ComicListGroupByDate[] => {
      // 日付でグルーピングしたコミック一覧
      return state.comics.reduce(
        (result: ComicListGroupByDate[], current: Comic) => {
          // 該当日のオブジェクトを取得
          const comicListObject = result.find(
            (obj) => obj.date === current[dateKey]
          )
          if (comicListObject) {
            // ある場合はコミックを追加
            comicListObject.list.push(current)
          } else {
            // ない場合は該当日のオブジェクトを追加
            result.push({ date: current[dateKey], list: [current] })
          }
          return result
        },
        []
      )
    },
    labels: (state): Label[] => {
      // レーベル一覧
      return (
        state.comics
          .reduce((result: Label[], current: Comic) => {
            // レーベルを取得
            const label = result.find((obj) => obj.key === current[labelKey])
            if (label) {
              // ある場合はカウント増やす
              label.count++
            } else {
              // ない場合はレーベルを追加
              result.push({
                key: current[labelKey],
                name: current[labelKey],
                count: 1,
              })
            }
            return result
          }, [])
          // 多い順でソート
          .sort((a, b) => b.count - a.count)
      )
    },
  },
  actions: {
    async getNewComics() {
      const { list }: { list: Comic[] } = await $fetch(
        '/rakuten/event/book/comic/calendar/js/booklist.json'
      )
      this.comics = list
    },
  },
})
