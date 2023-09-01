<template>
  <div class="container">
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="col-12 p-3 bg-success rounded-1 box-shadow">
      <h2 class="fw-bold text-center text-light m-0">
        {{ $t('Reservations') }}
      </h2>
    </div>
    <div class="mt-4 p-3 bg-light rounded-1 box-shadow">
      <h2 class="mb-3 fw-bold">
        <font-awesome-icon :icon="['fa', 'calendar-check']" class="icon me-3" size="2x" />{{
          $t('MyCurrentReservation')
        }}
      </h2>
      <div class="divider-fluid col-12 col-sm-6"></div>
      <router-link class="text-decoration-none" :to="{ name: 'parkings' }">
        <button class="btn btn-success" type="button" href="#">
          {{ $t('NewReservation') }}
        </button>
      </router-link>
      <div v-if="!getParams.isLoading.value" class="mt-4" v-for="(reservation, index) in props.currentReservation"
        :key="index">
        <form class="border-1 rounded p-1">
          <div class="row g-3">
            <div class="col-12 col-lg-10 col-xxl-8">
              <div class="input-group">
                <div class="form-control border-0 bg-transparent fs-5">
                  <span class="fw-medium">{{ reservation.parkingName }}</span>
                  <span class="ms-2 fw-light">({{ moment(reservation.startDate).format('DD.MM.YYYY') }} -
                    {{ moment(reservation.endDate).format('DD.MM.YYYY') }})</span>
                </div>
                <button type="button" class="btn btn-link text-decoration-none text-success fs-6 transition collapsed"
                  data-bs-toggle="collapse" :data-bs-target="'#reservationTarget' + index"
                  :aria-controls="'reservationTarget' + index" aria-expanded="false" aria-label="Toggle navigation">
                  <font-awesome-icon :icon="['fa', 'arrow-up']" class="icon me-3 fs-4" size="1x" />
                </button>
              </div>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <div class="container">
                <div class="collapse navbar-collapse" :id="'reservationTarget' + index">
                  <span>{{ $t('Address') }}:</span>
                  <p class="fw-medium ms-2">{{ reservation.parkingAddress }}</p>
                  <span>{{ $t('Vehicle') }}:</span>
                  <p class="fw-medium ms-2">{{ reservation.vehicleDetails }}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="mt-4 p-3 bg-light rounded-1 box-shadow">
      <h2 class="mb-3 fw-bold">
        <font-awesome-icon :icon="['fa', 'calendar']" class="icon me-3" size="2x" />{{
          $t('MyCompletedReservation')
        }}
      </h2>
      <div class="divider-fluid col-12 col-sm-6"></div>
      <div v-if="!getParams.isLoading.value" class="mt-4" v-for="(reservation, index) in props.pastReservation"
        :key="index">
        <form class="border-1 rounded p-1">
          <div class="row g-3">
            <div class="col-12 col-lg-10 col-xxl-8">
              <div class="input-group">
                <div class="form-control border-0 bg-transparent fs-5">
                  <span class="fw-medium">{{ reservation.parkingName }}</span>
                  <span class="ms-2 fw-light">({{ moment(reservation.startDate).format('DD.MM.YYYY') }} -
                    {{ moment(reservation.endDate).format('DD.MM.YYYY') }})</span>
                </div>
                <button type="button" class="btn btn-link text-decoration-none text-success fs-6 transition collapsed"
                  data-bs-toggle="collapse" :data-bs-target="'#reservationPastTarget' + index"
                  :aria-controls="'reservationPastTarget' + index" aria-expanded="false" aria-label="Toggle navigation">
                  <font-awesome-icon :icon="['fa', 'arrow-up']" class="icon me-3 fs-4" size="1x" />
                </button>
              </div>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <div class="container">
                <div class="collapse navbar-collapse ms-2" :id="'reservationPastTarget' + index">
                  <span>{{ $t('Address') }}:</span>
                  <p class="fw-medium ms-2">{{ reservation.parkingAddress }}</p>
                  <span>{{ $t('Vehicle') }}:</span>
                  <p class="fw-medium ms-2">{{ reservation.vehicleDetails }}</p>
                  <div class="col-12 my-3">
                    <button type="submit" class="btn btn-outline-success">
                      {{ $t('Delete') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import { useReservationStore } from '@/appModules/reservation/store/ReservationStore'
import moment from 'moment'
import type { PropType } from 'vue'
import ReservationDto from '@/appModules/reservation/domain/dto/Reservation'
components: {
  LoadBarComp
}
const props = defineProps({
  pastReservation: {
    type: Array as PropType<Array<ReservationDto>>,
    required: true
  },
  currentReservation: {
    type: Array as PropType<Array<ReservationDto>>,
    required: true
  }
})
const reservationStore = useReservationStore()
const { getParams } = storeToRefs(reservationStore)
</script>

<style scoped>
.parking-img {
  object-fit: cover;
  height: 150px;
  width: 100%;
}

.parking {
  border-radius: 10px;
}

input:focus {
  border-color: none !important;
  box-shadow: none !important;
}

input {
  font-size: 1.25rem;
}

.border-1 {
  border-color: rgb(226, 226, 226);
  border-style: solid;
}

.transition {
  transition: linear, 0.4s;
}

.collapsed {
  transform: rotate(180deg) translate(14px, 4px);
}
</style>
