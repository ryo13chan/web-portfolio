<script setup lang="ts">
import dayjs from 'dayjs'
import { storeToRefs } from 'pinia'
import {
  Label,
  Comic,
  useNewComicStore,
  idKey,
  titleKey,
  authorKey,
  labelKey,
  dateKey,
} from '~/store/newComic'

const title = ref('新刊コミック一覧')
useHead({
  title,
})

const newComicStore = useNewComicStore()
const { comicsListGroupByDate, labels } = storeToRefs(newComicStore)
const label = ref<Label[]>()
// 選択したレーベルのコミックか
const isSelectedLabelComic = (comic: Comic) => {
  if (!label.value || label.value.length === 0) return true
  return label.value.findIndex((p) => p.key === comic[labelKey]) > -1
}

const releaseDate = ref()
const isSelectedReleaseDate = (date: string): boolean => {
  if (!releaseDate.value || releaseDate.value.length === 0) return true
  return (
    releaseDate.value.findIndex((d: Date) => {
      return dayjs(d).format('M月D日') === date
    }) > -1
  )
}
const isSelectedReleaseDateComic = (comic: Comic): boolean => {
  if (!releaseDate.value || releaseDate.value.length === 0) return true
  return (
    releaseDate.value.findIndex((d: Date) => {
      return dayjs(d).format('M月D日') === comic[dateKey]
    }) > -1
  )
}

const dailyComicCount = (date: any) => {
  const comicList = comicsListGroupByDate.value.find(
    (obj) => obj.date === `${date.month + 1}月${date.day}日`
  )
  if (!comicList) return ''
  const filterdComicList = comicList.list.filter((c) => isSelectedLabelComic(c))
  if (!filterdComicList.length) return ''
  return `(${filterdComicList.length})`
}

const calendar = ref()
onMounted(async () => {
  await newComicStore.getNewComics()
  if (
    !comicsListGroupByDate.value ||
    comicsListGroupByDate.value.length === 0
  ) {
    return
  }
  // 取得月
  const month = comicsListGroupByDate.value[0].date.charAt(0)
  // 月の後半は翌月の分を取得するのでカレンダーも翌月にずらす
  if (month !== calendar.value.currentMonth + 1) {
    calendar.value.currentMonth++
  }
})

const copyComics = () => {
  // TODO: 一覧作成
  // const comics = 'comics'
  const comics = comicsListGroupByDate.value
    .filter((obj) => isSelectedReleaseDate(obj.date))
    .map(
      (obj) =>
        `【${obj.date}】\n` +
        `${obj.list
          .filter((comic) => isSelectedLabelComic(comic))
          .map(
            (comic) =>
              `「${comic[titleKey]}」\n${comic[authorKey]}\n${comic[labelKey]}\n`
          )
          .join('\n')}`
    )
    .join('\n')

  // クリップボードにコピー
  navigator.clipboard.writeText(comics)
}
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <Card>
      <template #content>
        <DataView :value="comicsListGroupByDate" data-key="date">
          <template #header>
            <div class="condition-row">
              <Calendar
                id="icon"
                ref="calendar"
                v-model="releaseDate"
                show-icon
                date-format="yy-mm-dd"
                selection-mode="multiple"
                placeholder="発売日を選択"
              >
                <template #date="slotProps">
                  <div
                    class="flex flex-column justify-content-center align-items-center"
                  >
                    <div>
                      {{ slotProps.date.day }}
                    </div>
                    <div class="text-xs">
                      {{ dailyComicCount(slotProps.date) }}
                    </div>
                  </div>
                </template>
              </Calendar>
              <MultiSelect
                v-model="label"
                :options="labels"
                option-label="name"
                placeholder="レーベルを選択"
                display="chip"
              >
                <template #option="slotProps">{{
                  `${slotProps.option.name}(${slotProps.option.count})`
                }}</template>
              </MultiSelect>
              <Button
                v-tooltip="'一覧をクリップボードにコピー'"
                icon="pi pi-copy"
                class="p-button-secondary"
                @click="copyComics"
              />
            </div>
          </template>
          <template #list="slotProps">
            <div
              v-show="isSelectedReleaseDate(slotProps.data.date)"
              class="col-12 p-3"
            >
              <div :id="slotProps.data.date" class="mb-3 text-lg">
                {{ `${slotProps.data.date}` }}
              </div>
              <div
                v-for="comic in slotProps.data.list"
                v-show="
                  isSelectedLabelComic(comic) &&
                  isSelectedReleaseDateComic(comic)
                "
                :key="comic[idKey]"
                class="mb-3 pl-7 pb-3 border-bottom-1 border-300"
              >
                <NuxtLink
                  :href="`https://www.amazon.co.jp/s?k=${comic[titleKey]}`"
                  target="_blank"
                  class="comic-title"
                >
                  {{ comic[titleKey] }}
                </NuxtLink>
                <div class="flex justify-content-between mt-2">
                  <div>{{ comic[authorKey] }}</div>
                  <div>{{ comic[labelKey] }}</div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </template></Card
    >
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex.scss';

.condition-row {
  @include styleclass(
    'md:flex lg:justify-content-between lg:align-items-center mb-2'
  );

  column-gap: 1rem;

  ::v-deep .p-calendar {
    @include styleclass('md:w-6 w-full');
  }

  .p-multiselect {
    @include styleclass('md:w-6 w-full');
  }
}

::v-deep .p-dataview-content {
  @include styleclass('overflow-y-scroll h-screen');
}

.comic-title {
  @include styleclass('font-bold text-lg');

  &:hover {
    text-decoration: underline;
  }
}
</style>
