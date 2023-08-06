<template>
  <div class="light view">
    <div class="container-xxl">
      <ReservationFormComp class="my-4" />
      <div
        v-if="getParkings.length > 0"
        class="d-flex justify-content-center"
        v-for="(parking, index) in getParkings"
        :key="index"
      >
        <ParkingComp :parking="parking" />
      </div>
      <div
        v-if="!getParams.isLoading.value && getParkings.length === 0"
        class="col-10 col-md-8 col-lg-9 p-3 box-shadow bg-light text-dark mx-auto rounded"
      >
        <div v-if="getReservationFormFlag === 2" class="text-center fs-3">
          <font-awesome-icon :icon="['fa', 'road-circle-xmark']" class="icon me-1 me-2" size="1x" />
          <span>{{ $t('NoParkingFound') }}</span>
        </div>
        <div v-if="getReservationFormFlag === 0" class="text-center fs-3">
          <font-awesome-icon :icon="['fa', 'magnifying-glass']" class="icon me-1 me-2" size="1x" />
          <span>{{ $t('SearchForTheCarParkYouAreInterestedIn') }}</span>
        </div>
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
import { useReservationStore } from '@/appModules/reservation/store/ReservationStore'

components: {
  ParkingComp
  ReservationFormComp
  LoadBarComp
  SpotComp
}

const parkingStore = useParkingStore()
const { getParkings, getParams } = storeToRefs(parkingStore)

const reservationStore = useReservationStore()
const { getReservationFormFlag } = storeToRefs(reservationStore)
</script>

<style scoped>
.show {
  right: 0;
}

.spot-comp {
  max-width: 400px;
  width: 100%;
}

.light {
  background-color: rgba(222, 222, 222, 0.95);
}

.view {
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 80px);
}
</style>
