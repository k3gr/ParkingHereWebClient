<template>
  <div :class="[getParkings.length === 0 ? 'search-bar-view' : 'light-view']">
    <div class="container-xxl p-0">
      <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
      <ReservationFormComp class="my-4" />
      <div
        class="d-flex justify-content-center"
        v-for="(parking, index) in getParkings"
        :key="index"
      >
        <ParkingComp :parking="parking" />
      </div>
      <SpotComp />
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useParkingStore } from '../store/ParkingStore'
import ParkingComp from '../component/ParkingComp.vue'
import ReservationFormComp from '@/appModules/reservation/component/ReservationFormComp.vue'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import SpotComp from '../component/SpotComp.vue'

components: {
  ParkingComp
  ReservationFormComp
  LoadBarComp
  SpotComp
}
const store = useParkingStore()
const { getParkings, getParams } = storeToRefs(store)
</script>

<style scoped>
.show {
  right: 0;
}

.spot-background {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100vw;
}

.spot-comp {
  max-width: 400px;
  width: 100%;
}
</style>
