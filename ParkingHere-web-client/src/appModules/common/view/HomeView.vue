<template>
  <div class="main-img" alt="Main view">
    <ReservationFormComp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReservationFormComp from '@/appModules/reservation/component/ReservationFormComp.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ReservationFormComp
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.main-img {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/parking-main.jpg');
  background-size: cover;
  /* background-image: url(@/assets/images/parking-main.jpg); */
}
</style>
