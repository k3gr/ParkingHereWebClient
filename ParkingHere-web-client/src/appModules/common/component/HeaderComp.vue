<template>
  <nav class="navbar navbar-nav sticky-top navbar-expand-lg border-bottom" data-bs-theme="dark">
    <div class="container">
      <router-link class="navbar-brand fs-1" href="#" :to="{ name: 'home' }">
        {{ $t('ParkingHere') }}</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start border-0"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="d-lg-none offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <ul
          class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end align-items-center"
        >
          <div class="btn-group mx-2">
            <div v-if="isLoggedIn">
              <UserAccountMobileComp class="d-lg-none" />
              <UserAccountComp class="d-none d-lg-flex" />
            </div>
            <div v-else>
              <div class="btn-group mx-2 mt-3 mt-lg-0" data-bs-dismiss="offcanvas">
                <router-link
                  class="text-light text-decoration-none btn btn-outline-success border-3 rounded"
                  :to="{ name: 'login' }"
                >
                  <button type="button" class="btn p-0 text-light">
                    {{ $t('Login') }}
                  </button>
                </router-link>
                <button
                  type="button"
                  class="d-none d-lg-block btn btn-success dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <form class="dropdown-menu dropdown-form dropdown-menu-end p-3">
                  <UserLoginFormComp />
                </form>
              </div>
            </div>
          </div>
          <!-- <li class="nav-item py-2 bg-transparent">
            <select class="text-light border bg-transparent border-0">
              <option
                class="text-light border-0 bg-transparent"
                :value="lang"
                v-for="(lang, index) in options"
                :key="index"
              >
                <span>{{ lang }}</span>
              </option>
            </select>
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t('PL') }}
            </a>
            <ul class="dropdown-menu bg-transparent border-0 m-0">
              <li>
                <a class="dropdown-item px-2 py-0 text-light" href="#">{{ $t('EN') }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'
import UserLoginFormComp from '@/appModules/account/component/UserLoginFormComp.vue'
import UserAccountComp from '@/appModules/account/component/UserAccountComp.vue'
import UserAccountMobileComp from '@/appModules/account/component/UserAccountMobileComp.vue'
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import { storeToRefs } from 'pinia'
import { onUnmounted } from 'vue'

components: {
  UserLoginFormComp
  UserAccountComp
  UserAccountMobileComp
}

const options = ['PL', 'ENG']

const userRegistrationStore = useUserRegistrationStore()
const { resetRegistrationParams } = userRegistrationStore
const userLoginStore = useUserLoginStore()
const { isLoggedIn } = storeToRefs(userLoginStore)

onUnmounted(() => {
  resetRegistrationParams()
})
</script>

<style scoped>
.dropdown-form {
  width: 295px;
}

.navbar {
  background: rgb(33, 37, 41);
  min-height: 80px;
}
.navbar-brand {
  font-size: 35px !important;
}

@media (max-width: 768px) {
  a {
    font-size: 20px;
  }
}

@media screen and (min-width: 992px) {
  .rounded {
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }
}
</style>
