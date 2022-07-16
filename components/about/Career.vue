<script setup lang="ts">
import dayjs from 'dayjs'
import { Project, projectData } from '~/composables/projectData'

const projects = ref(projectData)

const projectDuration = (project: Project) => {
  const startDate = dayjs(project.startDate).format('YYYY年MM月')
  if (!project.endDate) {
    return `${startDate} - （現在）`
  }
  const endDate = dayjs(project.endDate).endOf('month').format('YYYY年MM月')
  return `${startDate} - ${endDate}`
}

const activeIndexes = ref<number[]>([])
const open = () => {
  activeIndexes.value = projects.value.map((_, i) => i)
}
const close = () => {
  activeIndexes.value = []
}
</script>

<template>
  <Card>
    <template #content>
      <div class="flex align-items-center justify-content-between mb-3">
        <h3 class="my-0">経歴</h3>
        <div>
          <Button label="開く" class="p-button-text" @click="open" />
          <Button
            label="閉じる"
            class="p-button-secondary p-button-text"
            @click="close"
          />
        </div>
      </div>
      <Accordion :multiple="true" :active-index="activeIndexes">
        <AccordionTab v-for="(project, pi) in projects" :key="pi" class="mb-4">
          <template #header>
            <div class="flex flex-column">
              <div class="font-normal mb-2 text-sm">
                {{ projectDuration(project) }}
              </div>
              <div>{{ project.title }}</div>
            </div>
          </template>
          <h4 class="mt-3 mb-2">担当業務</h4>
          <ul class="pl-4">
            <li v-for="(work, wi) in project.works" :key="wi" class="pb-2">
              {{ work }}
            </li>
          </ul>
          <h4 class="mt-3 mb-2">主な使用技術</h4>
          <ul class="pl-4">
            <li v-for="(skill, si) in project.skills" :key="si" class="pb-2">
              {{ skill }}
            </li>
          </ul>
        </AccordionTab>
      </Accordion>
    </template>
  </Card>
</template>
