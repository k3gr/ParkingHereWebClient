<template>
  <div class="col-10 col-md-8 col-lg-9 mx-auto mb-4">
    <form class="rounded border border-4 border-success w-100 box-shadow">
      <div class="d-flex col-12 flex-wrap form-section">
        <div class="enter-location col-12 col-xl-5 position-relative py-4">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="icon text-success" />
          <input
            class="bg-transparent col-12"
            type="search"
            id="parkings"
            name="parkings"
            placeholder=" "
            v-model="getReservationParams.city"
          />
          <label for="parkings">{{ $t('EnterParkingLocation') }}</label>
        </div>
        <div class="date col-12 col-md-5 border-success col-xl-3 position-relative">
          <label>{{ $t('StartDate') }}</label>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="icon text-success" />
          <input
            id="startDate"
            class="date-picker bg-transparent"
            type="date"
            v-model="getReservationParams.startDate"
          />
        </div>
        <div class="date col-12 col-md-5 border-success col-xl-3 position-relative">
          <label>{{ $t('EndDate') }}</label>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="icon text-success" />
          <input
            id="endDate"
            class="date-picker bg-transparent"
            type="date"
            max="2199-12-31"
            v-model="getReservationParams.endDate"
          />
        </div>
        <router-link
          class="col-12 col-md-2 col-xl-1 px-2 search-btn d-flex justify-content-center align-items-center bg-success text-decoration-none"
          type="submit"
          :to="{ name: 'parkings' }"
          @click="fetchParkings"
        >
          <span class="text-light">{{ $t('Search') }}</span>
        </router-link>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useParkingStore } from '@/appModules/parking/store/ParkingStore'
import { useReservationStore } from '@/appModules/reservation/store/ReservationStore'
import { watch } from 'vue'
import moment from 'moment'

const reservationsStore = useReservationStore()
const { getReservationParams } = storeToRefs(reservationsStore)

const store = useParkingStore()
const { findParkings } = store

watch(
  () => getReservationParams.value.startDate,
  () => {
    if (getReservationParams.value.startDate > getReservationParams.value.endDate) {
      getReservationParams.value.endDate = moment(getReservationParams.value.startDate)
        .add(2, 'd')
        .toISOString()
        .substring(0, 10)
    }
  }
)

function fetchParkings() {
  findParkings(getReservationParams.value)
}
</script>
<style scoped>
.icon {
  position: absolute;
  top: 50%;
  transform: translate(8px, -50%);
  font-size: 20px;
}

.search-btn {
  box-shadow: -2px 0px 0px 0px #198754, 2px 0px 0px 0px #198754;
}

.search-btn:hover {
  background-color: rgba(25, 135, 84, 0.9) !important;
  border-radius: 0px, 2px;
}

.form-section div {
  height: 60px;
}

div.search-btn {
  height: auto;
  padding: 10px 0;
}

label {
  color: #adadad;
}

form {
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
}

.enter-location {
  outline: 3px solid #198754;
}

.enter-location input {
  position: absolute;
  top: 50%;
  transform: translate(0px, -30%);
  padding: 10px 25px 10px 40px;
  color: #fff;
  border: 0;
  font-size: 16px;
  z-index: 1;
}

.enter-location label {
  position: absolute;
  top: 50%;
  transform: translate(40px, -50%);
  transition: ease-out 0.25s;
  font-size: 14px;
  color: #fff;
}

input.date-picker {
  color-scheme: dark;
  font-weight: 700;
  letter-spacing: 1px;
  width: 90px;
  left: 50%;
  transform: translate(-50%, -25%);
}

.date input {
  position: absolute;
  top: 50%;
  color: #fff;
  border: 0;
  font-size: 16px;
}

.date-picker::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}

input:focus {
  outline: 0 none !important;
}

label,
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  position: absolute;
  top: 10px;
  transform: translate(30px, -35%);
  color: #adadad;
  font-size: 12px;
}

.date {
  border-bottom: 3px solid;
}

.date span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  font-weight: 700;
  letter-spacing: 1px;
}

/* ##################################### */

@media only screen and (min-width: 767px) {
  .date {
    border-bottom: 0;
    border-right: 3px solid;
  }
}

@media only screen and (min-width: 1200px) {
  .enter-location {
    border-right: 3px solid #198754;
    outline: 0;
  }
}
</style>
useParkingStore
