<template>
  <div class="container">
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="col-12 p-3 bg-success rounded-1 box-shadow">
      <h2 class="fw-bold text-center text-light m-0">
        {{ $t('ManageCarParks') }}
      </h2>
    </div>
    <div class="mt-4 p-3 bg-light rounded-1 box-shadow">
      <h2 class="mb-3 fw-bold">
        <font-awesome-icon :icon="['fa', 'square-parking']" class="icon me-3" size="2x" />{{
          $t('MyParkings')
        }}
      </h2>
      <div class="divider-fluid col-12 col-sm-6"></div>
      <router-link class="text-decoration-none" :to="{ name: 'addParking' }">
        <button class="btn btn-success" type="button" href="#">
          {{ $t('AddParking') }}
        </button>
      </router-link>
      <div v-if="!getParams.isLoading.value" class="mt-4" v-for="(parking, index) in getMyParkings" :key="index">
        <form class="border-1 rounded p-3" @submit.prevent="saveParking(parking)">
          <div class="row g-3">
            <div class="col-12 col-lg-10 col-xxl-8">
              <div class="input-group">
                <span type="text" class="form-control border-0 fw-medium bg-transparent fs-5">
                  {{ parking.name }}, {{ parking.street }} {{ parking.city }}
                </span>
                <button type="button" class="btn btn-link text-decoration-none text-success fs-6 transition collapsed"
                  data-bs-toggle="collapse" :data-bs-target="'#parkingTarget' + index"
                  :aria-controls="'parkingTarget' + index" aria-expanded="false" aria-label="Toggle navigation">
                  <font-awesome-icon :icon="['fa', 'arrow-up']" class="icon me-3 fs-4" size="1x" />
                </button>
              </div>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <div class="container">
                <div class="collapse navbar-collapse" :id="'parkingTarget' + index">
                  <ul class="navbar-nav">
                    <li>
                      <label :for="'street' + index">{{ $t('Street') }}:</label>
                      <div class="input-group">
                        <input type="text" class="form-control border-0" :id="'street' + index" v-model="parking.street"
                          :readonly="!parking.open" :class="parking.open ? '' : 'bg-transparent'" />
                        <button type="button" class="btn btn-link text-decoration-none text-success fs-6"
                          @click="parking.open = !parking.open">
                          <span v-if="!parking.open">{{ $t('Change').toUpperCase() }}</span>
                          <span v-else>{{ $t('OK').toUpperCase() }}</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <label :for="'city' + index">{{ $t('City') }}:</label>
                      <input type="text" class="form-control border-0" :id="'city' + index" v-model="parking.city"
                        :readonly="!parking.open" :class="parking.open ? '' : 'bg-transparent'" />
                    </li>
                    <li>
                      <label :for="'postalCode' + index">{{ $t('PostalCode') }}:</label>
                      <input type="text" class="form-control border-0" :id="'postalCode' + index"
                        v-model="parking.postalCode" :readonly="!parking.open"
                        :class="parking.open ? '' : 'bg-transparent'" />
                    </li>
                    <li>
                      <label :for="'contactEmail' + index">{{ $t('Email') }}:</label>
                      <input type="text" class="form-control border-0" :id="'contactEmail' + index"
                        v-model="parking.contactEmail" :readonly="!parking.open"
                        :class="parking.open ? '' : 'bg-transparent'" />
                    </li>
                    <li>
                      <label :for="'contactNumber' + index">{{ $t('Mobile') }}:</label>
                      <input type="text" class="form-control border-0" :id="'contactNumber' + index"
                        v-model="parking.contactNumber" :readonly="!parking.open"
                        :class="parking.open ? '' : 'bg-transparent'" />
                    </li>
                    <li>
                      <label :for="'description' + index">{{ $t('Description') }}:</label>
                      <textarea type="text" class="form-control border-0 fs-5" :id="'description' + index"
                        v-model="parking.description" :readonly="!parking.open"
                        :class="parking.open ? '' : 'bg-transparent'">
                      </textarea>
                    </li>
                  </ul>
                  <div class="col-12 mt-3">
                    <button type="submit" class="btn btn-outline-success me-3 mt-3" :disabled="parking.open">{{
                      $t('Save') }}</button>
                    <router-link class="text-decoration-none" :to="{ name: 'addSpot', params: { id: parking.id } }">
                      <button class="btn btn-success mt-3" type="button" href="#">
                        {{ $t('AddSpot') }}
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import { useParkingStore } from '@/appModules/parking/store/ParkingStore'
components: {
  LoadBarComp
}

const userStore = useUserLoginStore()
const parkingStore = useParkingStore()
const { findMyParkings, saveParking } = parkingStore
const { getMyParkings, getParams } = storeToRefs(parkingStore)

onMounted(() => {
  findMyParkings()
})
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

input:focus {
  border-color: none !important;
  box-shadow: none !important;
}

input {
  font-size: 1.25rem;
}

.border-1 {
  border-color: rgb(226, 226, 226);
  border-style: solid;
}

.transition {
  transition: linear, 0.4s;
}

.collapsed {
  transform: rotate(180deg) translate(14px, 4px);
}
</style>
