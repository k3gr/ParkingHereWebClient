<template>
  <div v-if="isError">
    <div class="row loading-panel">
      <div class="col-12">
        <h4 class="text-success">
          {{ $t('ErrorLoadData') }}
        </h4>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="isLoading" class="row loading-panel">
      <div class="col-12">
        <div class="spinner-grow text-success mx-2" role="status"></div>
        <div class="spinner-grow text-success mx-2" role="status"></div>
        <div class="spinner-grow text-success mx-2" role="status"></div>
        <p class="sr mt-2 text-light bg-dark rounded border border-success border-2">
          {{ $t('PleaseWait') }}...
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isError: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.loading-panel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  z-index: 99;
}

.spinner-grow:nth-child(2) {
  animation-delay: 0.1s;
}

.spinner-grow:nth-child(3) {
  animation-delay: 0.2s;
}
</style>
