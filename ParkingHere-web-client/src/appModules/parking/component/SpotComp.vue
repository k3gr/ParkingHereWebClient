<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="my-2 ms-2">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <font-awesome-icon :icon="['fa', 'arrow-right']" class="icon" size="2x" />
      </button>
    </div>
    <div class="offcanvas-header bg-success text-light">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">
        {{ $t('DetailsOfReservation') }}
      </h5>
    </div>
    <div class="offcanvas-body">
      <p class="fw-bold fs-5">{{ $t('Availability') }}</p>
      <div class="d-flex justify-content-start gap-3">
        <div v-if="standardSpots != null" class="fw-bold">
          <span>{{ SpotTypeEnum.Standard }}: </span>
          <span v-if="standardSpots.length > 0" class="fw-bold">{{ standardSpots.length }}</span>
          <span v-else class="fw-bold">{{ $t('Absence') }}</span>
        </div>
        <div v-if="busSpots != null" class="fw-bold">
          <span>{{ SpotTypeEnum.Bus }}: </span>
          <span v-if="busSpots.length > 0" class="fw-bold">{{ busSpots.length }}</span>
          <span v-else class="fw-bold">{{ $t('Absence') }}</span>
        </div>
        <div v-if="vipSpots != null" class="fw-bold">
          <span>{{ SpotTypeEnum.Vip }}: </span>
          <span v-if="vipSpots.length > 0" class="fw-bold">{{ vipSpots.length }}</span>
          <span v-else class="fw-bold">{{ $t('Absence') }}</span>
        </div>
      </div>
      <div class="divider"></div>
      <p class="fw-bold fs-5">{{ $t('Prices') }}</p>
      <div class="d-flex my-3 justify-content-start gap-3">
        <span v-if="standardPrice != null">{{ SpotTypeEnum.Standard }}:
          <span class="text-success fw-bold">{{ standardPrice > 0 ? standardPrice : "-" }} {{ $t('Currency')
          }}</span></span>
        <span v-if="busPrice != null">{{ SpotTypeEnum.Bus }}:
          <span class="text-primary fw-bold">{{ busPrice > 0 ? busPrice : "-" }} {{ $t('Currency') }}</span></span>
        <span v-if="vipPrice != null">{{ SpotTypeEnum.Vip }}:
          <span class="text-dark fw-bold">{{ vipPrice > 0 ? vipPrice : "-" }} {{ $t('Currency') }}</span></span>
      </div>
      <div class="divider"></div>
      <p class="fw-bold fs-5">{{ $t('ChooseType') }}</p>
      <div class="d-flex my-3 justify-content-start gap-4">
        <input type="radio" class="btn-check" name="options-outlined" id="standard" autocomplete="off"
          :disabled="standardSpots.length == 0" v-model="getReservationParams.type" :value="SpotTypeEnum.Standard" />
        <label class="btn btn-outline-success"
          :class="standardSpots.length > 0 ? 'btn-outline-primary' : 'btn-secondary disabled'" for="standard">{{
            SpotTypeEnum.Standard }}</label>
        <input type="radio" class="btn-check" name="options-outlined" id="bus" autocomplete="off"
          :disabled="busSpots.length == 0" v-model="getReservationParams.type" :value="SpotTypeEnum.Bus" />
        <label class="btn btn-outline-primary"
          :class="busSpots.length > 0 ? 'btn-outline-primary' : 'btn-secondary disabled'" for="bus">{{ SpotTypeEnum.Bus
          }}</label>
        <input type="radio" class="btn-check" name="options-outlined" id="vip" autocomplete="off"
          :disabled="vipSpots.length == 0" v-model="getReservationParams.type" :value="SpotTypeEnum.Vip" />
        <label class="btn" :class="vipSpots.length > 0 ? 'btn-outline-dark ' : 'btn-secondary disabled'" for="vip">{{
          SpotTypeEnum.Vip }}</label>
      </div>
      <p class="fw-bold fs-4">{{ $t('Summary') }}</p>
      <div class="d-flex flex-column border rounded p-3">
        <span class="text-success fw-bold fs-5">{{ getParking.name }}</span>
        <span>{{ $t('Address') }}:
          <span class="fw-bold">{{ getParking.street }}, {{ getParking.city }}</span></span>
        <div>
          <span>{{ $t('Period') }}: </span>
          <span class="fw-bold">{{ moment(getReservationParams.startDate).format('DD.MM.yyyy') }} -
            {{ moment(getReservationParams.endDate).format('DD.MM.yyyy') }}
          </span>
          <span v-if="rentalDays == 1"> ({{ $t('1Day') }})</span>
          <span v-else> ({{ rentalDays.toFixed(0) }} {{ $t('Days') }})</span>
        </div>
        <span>
          {{ $t('SpotType') }}:
          <span class="fw-bold">{{
            getReservationParams.type != SpotTypeEnum.Empty ? getReservationParams.type : "-"
          }}</span>
        </span>
        <span class="mt-3">
          {{ $t('ToPay') }}:
          <span class="fw-bold">{{ totalPrice ? totalPrice : "-" }} {{ $t('Currency') }}</span>
        </span>
      </div>
      <div class="modal-footer mt-3">
        <span v-if="!isLoggedIn" class="me-3">Musisz być zalogowany</span>
        <button v-if="isLoggedIn" type="button" class="btn btn-success" @click="bookSpot"
          :disabled="getReservationParams.type === SpotTypeEnum.Empty">
          {{ $t('Book') }}
        </button>
        <router-link v-else class="text-decoration-none" :to="{ name: 'login' }">
          <button type="button" class="btn btn-success" data-bs-dismiss="offcanvas" aria-label="Close">
            {{ $t('Login') }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import moment from 'moment'
import { SpotTypeEnum } from '@/appModules/reservation/domain/enumerated/SpotTypeEnum'
import { useSpotStore } from '@/appModules/parking/store/SpotStore'
import { storeToRefs } from 'pinia'
import { useParkingStore } from '@/appModules/parking/store/ParkingStore'
import { useReservationStore } from '@/appModules/reservation/store/ReservationStore'
import { watch } from 'vue'
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'

const parkingsStore = useParkingStore()
const { getPrices, getParking } = storeToRefs(parkingsStore)

const spotsStore = useSpotStore()
const { findSpots } = spotsStore
const { getSpots } = storeToRefs(spotsStore)

const userLoginStore = useUserLoginStore()
const { } = userLoginStore
const { isLoggedIn } = storeToRefs(userLoginStore)

const reservationStore = useReservationStore()
const { makeReservation } = reservationStore
const { getCreateReservation, getReservationParams, isReservationSuccess } =
  storeToRefs(reservationStore)

const rentalDays = computed(() => {
  return moment
    .duration(moment(getReservationParams.value.endDate).diff(getReservationParams.value.startDate))
    .asDays()
})

const standardSpots = computed(() => {
  return getSpots.value.filter((s) => s.type == SpotTypeEnum.Standard)
})

const busSpots = computed(() => {
  return getSpots.value.filter((s) => s.type == SpotTypeEnum.Bus)
})

const vipSpots = computed(() => {
  return getSpots.value.filter((s) => s.type == SpotTypeEnum.Vip)
})

const standardPrice = computed(() => {
  return getPrices.value[0]
})

const busPrice = computed(() => {
  return getPrices.value[1]
})

const vipPrice = computed(() => {
  return getPrices.value[2]
})

watch(
  () => isReservationSuccess.value,
  () => {
    if (isReservationSuccess.value === 1) {
      findSpots(getParking.value.id, getReservationParams.value)
    }
  }
)

function bookSpot() {
  getCreateReservation.value.parkingId = getParking.value.id
  getCreateReservation.value.startDate = getReservationParams.value.startDate
  getCreateReservation.value.endDate = getReservationParams.value.endDate
  getCreateReservation.value.type = getReservationParams.value.type
  makeReservation()
}

const totalPrice = computed(() => {
  switch (getReservationParams.value.type) {
    case SpotTypeEnum.Standard:
      return (rentalDays.value * standardPrice.value).toFixed(2)
    case SpotTypeEnum.Bus:
      return (rentalDays.value * busPrice.value).toFixed(2)
    case SpotTypeEnum.Vip:
      return (rentalDays.value * vipPrice.value).toFixed(2)
    default:
      break
  }
})
</script>

<style scoped>
.offcanvas.offcanvas-end {
  top: 80px;
}

.btn-close {
  --bs-btn-close-bg: none;
  --bs-btn-close-focus-shadow: 0;
}

.disabled {
  opacity: 0.3 !important;
}
</style>
