<template>
  <div
    v-if="parking"
    class="col-10 col-md-8 col-lg-9 p-3 parking box-shadow bg-light text-dark mx-auto mb-4 d-flex justify-content-between flex-column flex-lg-row"
  >
    <div class="col-12 col-lg-3 parking d-flex justify-content-center">
      <img
        src="https://katowice.eu/SitePages/znizki-kkm/Znizki-KKM-parking.png"
        alt="mdo"
        class="parking parking-img"
      />
    </div>
    <div
      class="col-12 col-lg-5 col-xxl-6 mt-3 mt-lg-0 d-flex flex-column align-items-start justify-content-evenly"
    >
      <h3 class="fw-bold text-success">{{ parking.name }}</h3>
      <span>
        {{ parking.description }}
      </span>
      <div>
        <span class="fw-bold">Adres: </span><span>{{ parking.street }} {{ parking.city }}</span>
      </div>
      <div>
        <span class="fw-bold">Kontakt: </span><span> {{ parking.contactNumber }} </span>
      </div>
      <div>
        <span class="fw-bold">Email: </span><span>{{ parking.contactEmail }} </span>
      </div>
    </div>
    <span class="divider"></span>
    <div
      class="col-12 col-lg-3 col-xxl-2 d-flex flex-row-reverse flex-lg-column align-items-center align-items-lg-end justify-content-between justify-content-lg-end"
    >
      <button
        class="btn btn-success"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        href="#"
        @click="showModal"
      >
        {{ $t('Book') }}
      </button>
      <div class="fs-5 mt-lg-2 d-flex flex-column align-items-start align-items-lg-end">
        <span class="fw-bold text-success"
          >{{ $t('From') }} {{ lowestPrice }} {{ $t('Currency') }}</span
        >
        <span class="d-sm-block fs-6">{{ $t('PricePerDay') }} </span>
      </div>
    </div>
  </div>
  <div
    v-else
    class="col-12 col-lg-7 parking bg-light text-dark mx-auto my-2 d-flex align-items-center p-4 justify-content-between"
  >
    <div class="col-3 parking d-flex justify-content-center placeholder">
      <div class="parking parking-img" />
    </div>
    <div
      class="col-6 ms-3 p-3 d-flex flex-column justify-content-between h-100 placeholder placeholder-glow"
    >
      <div class="d-flex justify-content-between">
        <span class="col-7 placeholder bg-secondary"></span>
      </div>
      <div class="d-flex justify-content-between">
        <span class="col-2 placeholder bg-secondary"></span>
        <span class="col-9 placeholder bg-secondary"></span>
      </div>
      <div class="d-flex justify-content-between">
        <span class="col-7 placeholder bg-secondary"></span>
        <span class="col-5 placeholder bg-secondary"></span>
      </div>
      <div class="d-flex justify-content-between">
        <span class="col-7 placeholder bg-secondary"></span>
        <span class="col-4 placeholder bg-secondary"></span>
      </div>
      <div class="d-flex justify-content-between">
        <span class="col-5 placeholder bg-secondary"></span>
        <span class="col-6 placeholder bg-secondary"></span>
      </div>
    </div>
    <div
      class="col-3 d-flex flex-column align-items-end justify-content-end h-100 pe-4 border-start placeholder placeholder-glow"
    >
      <span class="btn col-7 placeholder bg-secondary"></span>
      <span class="col-9 placeholder bg-secondary my-3"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ParkingDto from '@/appModules/parking/domain/dto/Parking'
import { useSpotStore } from '@/appModules/parking/store/SpotStore'
import { useParkingStore } from '@/appModules/parking/store/ParkingStore'
import { useReservationStore } from '@/appModules/reservation/store/ReservationStore'
const props = defineProps({
  parking: ParkingDto
})
const parkingStore = useParkingStore()
const { findParking } = parkingStore

const spotStore = useSpotStore()
const { findSpots } = spotStore

const reservationStore = useReservationStore()
const { getReservationParams } = reservationStore

const lowestPrice = props.parking.prices[0]

function showModal() {
  findSpots(props.parking.id, getReservationParams)
  findParking(props.parking.id)
}
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

@media screen and (min-width: 992px) {
  .divider {
    width: 1px;
    height: 100%;
    margin: 0;
  }

  .parking-img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
}
</style>
