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

type Props = {
  prev?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  prev: false,
})

const newComicStore = useNewComicStore()
const { comicsListGroupByDate, labels, prevComicsListGroupByDate, prevLabels } =
  storeToRefs(newComicStore)
const comicsList = computed(() =>
  props.prev ? prevComicsListGroupByDate : comicsListGroupByDate
)
const labelList = computed(() => (props.prev ? prevLabels : labels))
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
  const comicList = comicsList.value.value.find(
    (obj) => obj.date === `${date.month + 1}月${date.day}日`
  )
  if (!comicList) return ''
  const filterdComicList = comicList.list.filter((c) => isSelectedLabelComic(c))
  if (!filterdComicList.length) return ''
  return `(${filterdComicList.length})`
}

const calendar = ref()
onMounted(async () => {
  props.prev
    ? await newComicStore.getPrevComics()
    : await newComicStore.getNewComics()

  if (!comicsList.value.value || comicsList.value.value.length === 0) {
    return
  }
  // 取得月
  const month = comicsList.value.value[0].date.charAt(0)
  // 月の後半は翌月の分を取得するのでカレンダーも翌月にずらす
  if (month !== calendar.value.currentMonth + 1) {
    calendar.value.currentMonth++
  }
})

const copyComics = () => {
  // 一覧作成
  const comics = comicsList.value.value
    .filter(
      (obj) =>
        isSelectedReleaseDate(obj.date) &&
        obj.list.some((comic) => isSelectedLabelComic(comic))
    )
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
  <Card>
    <template #content>
      <DataView :value="comicsList.value" data-key="date">
        <template #header>
          <div class="condition-row">
            <Calendar
              id="icon"
              ref="calendar"
              v-model="releaseDate"
              show-icon
              show-button-bar
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
              :options="labelList.value"
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
                isSelectedLabelComic(comic) && isSelectedReleaseDateComic(comic)
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
    </template>
  </Card>
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
