import { mount } from '@vue/test-utils'
import { test, expect, vi, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import ReserveSimulation from '~/pages/works/reserve-simulation.vue'
import FinalReserveAmount from '~/components/reserve-simulation/FinalReserveAmount.vue'
import AccumulationPeriod from '~/components/reserve-simulation/AccumulationPeriod.vue'
import MonthlyReserveAmount from '~/components/reserve-simulation/MonthlyReserveAmount.vue'
import TabPanel from 'primevue/tabpanel'

vi.stubGlobal('useHead', () => {})

describe('新刊コミック一覧画面', () => {
  const wrapper = mount(ReserveSimulation, {
    global: {
      components: {
        FinalReserveAmount,
        AccumulationPeriod,
        MonthlyReserveAmount,
        TabPanel,
      },
      plugins: [createTestingPinia()],
    },
  })

  describe('見出し', () => {
    const h2 = wrapper.find('h2')

    test('表示されること', () => {
      expect(h2.text()).toBe('積立シミュレーション')
    })
  })

  describe('一覧', () => {
    const tabPanels = wrapper.findAllComponents(TabPanel)

    test('タブ数が正しいこと', () => {
      expect(tabPanels.length).toBe(3)
    })

    describe('最終積立金額', () => {
      const finalReserveAmountTabPanel = tabPanels.at(0)

      test('タブが表示されること', () => {
        expect(finalReserveAmountTabPanel?.vm.$props.header).toBe(
          '最終積立金額'
        )
      })
      test('一覧が表示されること', () => {
        const finalReserveAmount =
          finalReserveAmountTabPanel?.findComponent(FinalReserveAmount)

        expect(finalReserveAmount?.exists()).toBeTruthy()
      })
    })

    describe('積立期間', () => {
      const accumulationPeriodTabPanel = tabPanels.at(1)

      test('タブが表示されること', () => {
        expect(accumulationPeriodTabPanel?.vm.$props.header).toBe('積立期間')
      })
      test('一覧が表示されること', () => {
        const accumulationPeriod =
          accumulationPeriodTabPanel?.findComponent(AccumulationPeriod)

        expect(accumulationPeriod?.exists()).toBeTruthy()
      })
    })

    describe('毎月積立金額', () => {
      const monthlyReserveAmountTabPanel = tabPanels.at(2)

      test('タブが表示されること', () => {
        expect(monthlyReserveAmountTabPanel?.vm.$props.header).toBe(
          '毎月積立金額'
        )
      })
      test('一覧が表示されること', () => {
        const monthlyReserveAmount =
          monthlyReserveAmountTabPanel?.findComponent(MonthlyReserveAmount)

        expect(monthlyReserveAmount?.exists()).toBeTruthy()
      })
    })
  })
})
