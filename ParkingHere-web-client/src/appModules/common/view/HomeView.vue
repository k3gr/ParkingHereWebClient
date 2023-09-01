<template>
  <div class="pb-5 mb-sm-0">
    <ReservationFormComp class="reservation-form container col-12 col-md-10 z-1 p-0 px-md-5 mt-sm-4" />
    <div class="col-11 container position-relative path overflow-hidden text-center rounded-4 bg-dark-opacity">
      <div class="header col-12 col-md-6 px-2">
        <p class="display-4 fw-bold text-success">{{ $t('BookParkingOnline') }}</p>
        <p class="display-6 fw-normal text-light p-2 bg-dark-opacity rounded">{{ $t('SaveYourTimeAndMoney') }}</p>
      </div>
      <div class="mobile"></div>
    </div>
    <div class="text-center fs-3">
      <div class="container px-4 py-md-4" id="custom-cards">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden bg-dark-opacity rounded-4 shadow-lg py-5 px-3">
              <font-awesome-icon :icon="['fa', 'headset']"
                class="text-success position-absolute top-50 start-50 translate-middle" size="8x"
                style="opacity: 0.10;" />
              <div class="z-2">
                <h3 class="text-success fw-bold align-center">
                  {{ $t('Support24h7Days') }}
                </h3>
                <div class="divider-fluid col-8 bg-secondary mx-auto"></div>
                <p class="text-light fs-5">{{ $t('WeValueYourConvenienceHelpOfConsultantsAvailable24') }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden bg-dark-opacity rounded-4 shadow-lg py-5 px-3">
              <font-awesome-icon :icon="['fa', 'sack-dollar']"
                class="text-success position-absolute top-50 start-50 translate-middle" size="8x"
                style="opacity: 0.10;" />
              <div class="z-2">
                <h3 class="text-success fw-bold align-center">
                  {{ $t('AttractivePrices') }}
                </h3>
                <div class="divider-fluid col-8 bg-secondary mx-auto"></div>
                <p class="text-light fs-5">{{
                  $t('WeCooperateWithCarParksWhichIsWhyWeCanGuaranteeTheLowestPriceOnTheMarket') }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden bg-dark-opacity rounded-4 shadow-lg py-5 px-3">
              <font-awesome-icon :icon="['fa', 'umbrella']"
                class="text-success position-absolute top-50 start-50 translate-middle" size="8x"
                style="opacity: 0.10;" />
              <div class="z-2">
                <h3 class="text-success fw-bold align-center">
                  {{ $t('SafeReservation') }}
                </h3>
                <div class="divider-fluid col-8 bg-secondary mx-auto"></div>
                <p class="text-light fs-5">{{
                  $t('ReserveParkingSpaceWithoutWorryAllDataIsEncryptedSoBookingIsAlwaysSecure') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReservationFormComp from '@/appModules/reservation/component/ReservationFormComp.vue'
components: {
  ReservationFormComp
}
</script>

<style scoped>
.mobile {
  position: absolute;
  right: 12%;
  bottom: -49%;
  width: 350px;
  height: 540px;
  transform: rotate(20deg);
  background-image: url('@/assets/images/phone.png');
  background-size: cover;
}

.path {
  top: 0;
  height: 450px;
  -webkit-clip-path: polygon(50% 0%,
      100% 0,
      100% 35%,
      100% 70%,
      80% 90%,
      53% 90%,
      20% 90%,
      0% 70%,
      0% 35%,
      0 0);
  clip-path: polygon(50% 0%,
      100% 0,
      100% 35%,
      100% 70%,
      80% 90%,
      53% 90%,
      20% 90%,
      0% 70%,
      0% 35%,
      0 0);
}

.bg-dark-opacity {
  background-color: rgba(33, 37, 41, .98)
}

.header {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 20px;
}

@media only screen and (min-width: 767px) {
  .reservation-form {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
  }

  .header {
    top: 220px;
    left: 33%;
    z-index: 1;
  }

  .path {
    top: 40px;
    height: 550px;
  }

  .mobile {
    bottom: -34%;
  }
}
</style>
