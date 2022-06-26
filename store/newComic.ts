import dayjs from 'dayjs'
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

export type Comic = {
  [titleKey]: string
  [authorKey]: string
  [dateKey]: string
  [labelKey]: string
}
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
    prevComics: [] as Comic[],
  }),
  getters: {
    comicsListGroupByDate: (state): ComicListGroupByDate[] =>
      groupComicsByDate(state.comics),
    prevComicsListGroupByDate: (state): ComicListGroupByDate[] =>
      groupComicsByDate(state.prevComics),
    labels: (state): Label[] => getLabels(state.comics),
    prevLabels: (state): Label[] => getLabels(state.prevComics),
  },
  actions: {
    async getNewComics() {
      const { list }: { list: Comic[] } = await $fetch(
        '/rakuten/event/book/comic/calendar/js/booklist.json'
      )
      this.comics = list
    },
    async getPrevComics() {
      // 月の前半は当月、後半は前月を指定
      const yearMonth =
        dayjs().date() < 16
          ? dayjs().format('YYYY/MM')
          : dayjs().subtract(1, 'day').format('YYYY/MM')
      const { list }: { list: Comic[] } = await $fetch(
        `/rakuten/event/book/comic/calendar/${yearMonth}/js/booklist.json`
      )
      this.prevComics = list
    },
  },
})

// 日付でグルーピングしたコミック一覧
const groupComicsByDate = (comics: Comic[]) =>
  comics.reduce((result: ComicListGroupByDate[], current: Comic) => {
    // 該当日のオブジェクトを取得
    const comicListObject = result.find((obj) => obj.date === current[dateKey])
    if (comicListObject) {
      // ある場合はコミックを追加
      comicListObject.list.push(current)
    } else {
      // ない場合は該当日のオブジェクトを追加
      result.push({ date: current[dateKey], list: [current] })
    }
    return result
  }, [])

// コミック一覧からレーベル一覧を取得
const getLabels = (comics: Comic[]) =>
  comics
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
