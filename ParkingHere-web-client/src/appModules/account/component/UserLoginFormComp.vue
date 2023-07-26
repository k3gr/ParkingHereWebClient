<template>
  <form @submit.prevent="submitSignIn">
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="form-floating my-3">
      <input
        type="email"
        class="form-control"
        id="email"
        :placeholder="$t('EmailAddress')"
        v-model="getUserLogin.email"
      />
      <label class="text-secondary-emphasis" for="email">{{ $t('EmailAddress') }}</label>
    </div>

    <div class="form-floating my-3">
      <input
        type="password"
        class="form-control"
        id="password"
        :placeholder="$t('Password')"
        v-model="getUserLogin.password"
      />
      <label class="text-secondary-emphasis" for="password">{{ $t('Password') }}</label>
    </div>
    <div class="checkbox mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input bg-success" id="submit" />
        <label class="form-check-label text-light" for="submit">{{ $t('RememberMe') }}</label>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-5 py-1" type="submit">
        {{ $t('SignIn') }}
      </button>
    </div>
    <div class="mt-3">
      <span class="m-0 me-2 text-light">{{ $t('FirstTimeOnParkingHere') }}</span>
      <router-link
        class="text-decoration-none text-success d-block d-sm-inline"
        :to="{ name: 'signup' }"
        >{{ $t('SignUp') }}.</router-link
      >
    </div>
    <div class="mt-1">
      <span class="m-0 me-2 text-light">{{ $t('ForgotPassword') }}?</span>
      <router-link
        class="text-decoration-none text-success d-block d-sm-inline"
        :to="{ name: 'signup' }"
        >{{ $t('RemindPassword') }}.</router-link
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
components: {
  LoadBarComp
}
import { storeToRefs } from 'pinia'
import { useUserLoginStore } from '../store/UserLoginStore'

const store = useUserLoginStore()
const { userSignIn } = store
const { getParams, getUserLogin } = storeToRefs(store)

async function submitSignIn() {
  userSignIn()
}
</script>

<style scoped></style>
