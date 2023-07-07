<template>
  <div
    class="login-form position-absolute top-50 start-50 translate-middle p-3 bg-dark col-12 col-sm-9 col-lg-7 col-xl-5"
    data-bs-theme="dark"
  >
    <form>
      <div class="d-flex align-items-center justify-content-center mb-3">
        <div
          class="person-icon position-relative rounded-circle border border-3 border-success m-3"
        >
          <font-awesome-icon
            :icon="['fa', 'user-plus']"
            class="icon text-success position-absolute top-50 start-50 translate-middle"
            size="2x"
          />
        </div>
        <h2 class="h3 ps-3 border-start">{{ $t('Registration') }}</h2>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="firstName"
              :placeholder="$t('FirstNamePlaceHolder')"
            />
            <label for="firstName">{{ $t('FirstName') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="lastName"
              :placeholder="$t('LastNamePlaceHolder')"
            />
            <label for="lastName">{{ $t('LastName') }}</label>
          </div>
        </div>
      </div>
      <div class="col-md-12 my-3">
        <div class="form-floating">
          <input type="email" class="form-control" id="email" :placeholder="$t('EmailAddress')" />
          <label for="email">{{ $t('EmailAddress') }}</label>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              :placeholder="$t('Password')"
            />
            <label for="password">{{ $t('Password') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              :placeholder="$t('ConfirmPassword')"
            />
            <label for="confirmPassword">{{ $t('ConfirmPassword') }}</label>
          </div>
        </div>
      </div>
      <div class="row g-3 mt-0">
        <span class="fs-6 ms-3 text-secondary">Dane pojazdu:</span>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="vehicleName"
              :placeholder="$t('VehicleName')"
            />
            <label for="vehicleName">{{ $t('VehicleName') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="vehicleRegistrationPlate"
              :placeholder="$t('VehicleRegistrationPlate')"
            />
            <label for="vehicleRegistrationPlate">{{ $t('VehicleRegistrationPlate') }}</label>
          </div>
        </div>
      </div>
      <div class="checkbox my-3">
        <div class="form-check">
          <input type="checkbox" class="form-check-input bg-success" id="submit" />
          <label class="form-check-label" for="submit">{{ $t('AcceptTermsAndConditions') }}</label>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
          {{ $t('Register') }}
        </button>
      </div>
      <div class="mt-3">
        <span class="m-0 me-2">{{ $t('Mam już konto.') }}</span
        ><router-link
          class="text-decoration-none text-success d-block d-sm-inline"
          :to="{ name: 'login' }"
          >{{ $t('SignIn') }}.</router-link
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.person-icon {
  width: 80px;
  height: 80px;
}
</style>
