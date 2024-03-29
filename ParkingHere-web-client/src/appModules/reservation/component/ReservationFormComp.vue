<template>
  <div class="col-10 col-md-8 col-lg-9 mb-4">
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <form class="w-100 bg-dark">
      <div class="d-flex col-12 flex-wrap form-section">
        <div class="enter-location col-12 col-xl-5 position-relative py-4 ps-2">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="icon text-success" />
          <input class="bg-transparent col-12" type="search" id="parkings" name="parkings" placeholder=" "
            v-model="getReservationParams.city" />
          <label for="parkings">{{ $t('EnterParkingLocation') }}</label>
        </div>
        <div class="date col-12 col-md-5 border-black col-xl-3 position-relative ps-2">
          <label>{{ $t('StartDate') }}</label>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="icon text-success" />
          <input name="startDate" id="startDate" class="date-picker bg-transparent" type="date"
            v-model="getReservationParams.startDate" />
        </div>
        <div class="date col-12 col-md-5 border-black col-xl-3 position-relative ps-2">
          <label>{{ $t('EndDate') }}</label>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="icon text-success" />
          <input id="endDate" class="date-picker bg-transparent" type="date" max="2199-12-31"
            v-model="getReservationParams.endDate" />
        </div>
        <div
          class="col-12 col-md-2 col-xl-1 p-2 search-btn d-flex justify-content-center align-items-center bg-success text-decoration-none py-3"
          type="submit" @click="submitSearch">
          <span class="text-light">{{ $t('Search') }}</span>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useParkingStore } from '@/appModules/parking/store/ParkingStore'
import { useReservationStore } from '@/appModules/reservation/store/ReservationStore'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import { watch } from 'vue'
import moment from 'moment'
import { useToast } from 'vue-toastification'
import i18n from '@/plugins/i18n'
import { useRouter } from 'vue-router'
components: {
  LoadBarComp
}
const reservationsStore = useReservationStore()
const { getReservationParams, reservationFormFlag } = storeToRefs(reservationsStore)

const store = useParkingStore()
const { findParkings } = store
const { getParams } = storeToRefs(store)
const toast = useToast()
const router = useRouter();

async function submitSearch() {
  if (!getReservationParams.value.startDate || !getReservationParams.value.endDate) {
    toast.error(i18n.global.t('DateFieldCanNotBeEmpty'))
  }
  else if (moment().isAfter(getReservationParams.value.startDate, "day")) {
    toast.error(i18n.global.t('StartDateCannotBePast'))
  }
  else {
    let duration = (moment(getReservationParams.value.endDate).diff(getReservationParams.value.startDate, "days"));
    if (duration > 30) {
      toast.error(i18n.global.t('MaximumReservationPeriodIs30Days'))
    }
    else {
      fetchParkings()
    }
  }
}

watch(
  () => getReservationParams.value.startDate,
  () => {
    if (getReservationParams.value.startDate && getReservationParams.value.endDate) {
      if (getReservationParams.value.startDate > getReservationParams.value.endDate) {
        getReservationParams.value.endDate = moment(getReservationParams.value.startDate)
          .add(2, 'd')
          .toISOString()
          .substring(0, 10)
      }
    }
  }
)

function fetchParkings() {
  findParkings(getReservationParams.value)
  router.push('parkings')
  if (getReservationParams.value.city.length > 0) {
    reservationFormFlag.value = 2
  } else {
    reservationFormFlag.value = 1
  }
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
  overflow: hidden;
  background-color: rgba(42, 46, 50, 1) !important;
}

.enter-location {
  outline: 2px solid black;
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
  width: 135px;
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
input:focus~label,
input:not(:placeholder-shown)~label {
  position: absolute;
  top: 10px;
  transform: translate(30px, -35%);
  color: #adadad;
  font-size: 12px;
}

.date {
  border-bottom: 2px solid;
}

.date span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  font-weight: 700;
  letter-spacing: 1px;
}

/* Media Queries */

@media only screen and (min-width: 576px) {
  form {
    border-radius: var(--bs-border-radius);
    border: 2px solid rgb(20, 20, 20) !important;
  }
}

@media only screen and (min-width: 767px) {
  .date {
    border-bottom: 0;
    border-right: 2px solid;
  }
}

@media only screen and (min-width: 1200px) {
  .enter-location {
    border-right: 2px solid #000;
    outline: 0;
  }
}
</style>
