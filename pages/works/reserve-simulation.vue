<script setup lang="ts">
import AccumulationPeriod from '~/components/reserve-simulation/AccumulationPeriod.vue'
import FinalReserveAmount from '~/components/reserve-simulation/FinalReserveAmount.vue'
import MonthlyReserveAmount from '~/components/reserve-simulation/MonthlyReserveAmount.vue'

const title = ref('積立シミュレーション')
useHead({
  title: title.value,
})
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <TabView>
      <TabPanel header="最終積立金額">
        <FinalReserveAmount />
      </TabPanel>
      <TabPanel header="積立期間">
        <AccumulationPeriod />
      </TabPanel>
      <TabPanel header="毎月積立金額">
        <MonthlyReserveAmount />
      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

::v-deep .p-tabview-nav-content {
  @include styleclass('border-round-top-2xl');
}

::v-deep .p-tabview-panels {
  @include styleclass('border-round-bottom-2xl');
}
</style>
