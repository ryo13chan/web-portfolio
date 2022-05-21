<script setup lang="ts">
type Project = {
  title: string
  startDate: string
  endDate?: string
  works: string[]
  skills: string[]
}

const projects = ref<Project[]>([
  {
    title: '飲食向け受発注システム開発',
    startDate: '2021/01',
    works: ['あああああ', 'あああああ'],
    skills: ['あああああ', 'あああああ'],
  },
  {
    title: '飲食向け受発注システム開発',
    startDate: '2021/01',
    endDate: '2021/01',
    works: ['あああああ', 'あああああ'],
    skills: ['あああああ', 'あああああ'],
  },
  {
    title: '飲食向け受発注システム開発',
    startDate: '2021/01',
    endDate: '2021/01',
    works: ['あああああ', 'あああああ'],
    skills: ['あああああ', 'あああああ'],
  },
])

const projectDuration = (project: Project) => {
  if (!project.endDate) return `${project.startDate} -`
  return `${project.startDate} - ${project.endDate}`
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
          <h4>担当業務</h4>
          <ul class="pl-4">
            <li v-for="(work, wi) in project.works" :key="wi">{{ work }}</li>
          </ul>
          <h4>主な使用技術</h4>
          <ul class="pl-4">
            <li v-for="(skill, si) in project.skills" :key="si">{{ skill }}</li>
          </ul>
        </AccordionTab>
      </Accordion>
    </template>
  </Card>
</template>
