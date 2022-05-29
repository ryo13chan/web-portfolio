<script setup lang="ts"></script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>積立シミュレーション</h2>
    <TabView>
      <TabPanel header="最終積立金額">
        <ReserveSimulationFinalReserveAmount />
      </TabPanel>
      <TabPanel header="積立期間">
        <ReserveSimulationAccumulationPeriod />
      </TabPanel>
      <TabPanel header="毎月積立金額">
        <ReserveSimulationMonthlyReserveAmount />
      </TabPanel>
    </TabView>
  </div>
</template>
