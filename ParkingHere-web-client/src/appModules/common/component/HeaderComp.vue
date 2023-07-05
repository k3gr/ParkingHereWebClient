<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-transparent" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand text-light fs-1" href="#" :to="{name: 'home'}">{{ $t('ParkingHere') }}</router-link>
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
        <button class="btn btn-outline-success border-success border-3 px-4 mx-2" type="submit">
          <router-link class="text-light text-decoration-none" :to="{name: 'login'}">{{ $t('SignIn') }}</router-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const options = ['PL', 'ENG']
</script>

<style scoped>
a {
  color: #fff;
}
</style>
