<template>
  <nav class="navbar fixed-top navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand fs-1" href="#" :to="{ name: 'home' }">
        {{ $t('ParkingHere') }}</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
          <div class="btn-group mx-2">
            <div v-if="isSignIn">
              <a
                href="#"
                class="d-block text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="48"
                  height="48"
                  class="rounded-circle border border-3 border-success"
                />
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser1" style="">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
            <div v-else>
              <div class="btn-group mx-2">
                <button type="button" class="btn btn-outline-success border-3">
                  <router-link class="text-light text-decoration-none" :to="{ name: 'login' }">{{
                    $t('Login')
                  }}</router-link>
                </button>
                <button
                  type="button"
                  class="btn btn-success dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <form class="dropdown-menu dropdown-menu-end p-3">
                  <div class="mb-3">
                    <label for="username" class="form-label">{{ $t('EmailAddress') }}</label>
                    <input
                      type="email"
                      class="form-control"
                      id="username"
                      :placeholder="$t('EmailAddressPlaceHolder')"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">{{ $t('Password') }}</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      :placeholder="$t('PasswordPlaceHolder')"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input bg-success" id="submit" />
                      <label class="form-check-label" for="submit">{{ $t('RememberMe') }}</label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-success">{{ $t('SignIn') }}</button>
                  <div class="mt-3">
                    <p class="m-0">
                      {{ $t('FirstTimeOnParkingHere')
                      }}<span
                        ><router-link
                          class="text-success text-decoration-none d-block"
                          :to="{ name: 'signup' }"
                          >{{ $t('SignUp') }}.</router-link
                        ></span
                      >
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{{ $t('Home') }}</a>
          </li>
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
            <ul class="dropdown-menu bg-transparent border-0 py-0">
              <li>
                <a class="dropdown-item px-2 py-0" href="#">{{ $t('EN') }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const options = ['PL', 'ENG']
const isSignIn = false
</script>

<style scoped>
.dropdown-menu {
  width: 300px;
}

.navbar {
  background: rgb(33, 37, 41);
  background: linear-gradient(0deg, rgba(33, 37, 41, 0.5) 0%, rgba(33, 37, 41, 1) 25%);
}
</style>
