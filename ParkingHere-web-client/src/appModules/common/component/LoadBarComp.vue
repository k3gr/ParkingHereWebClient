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
    <div v-if="isLoading" class="loading-panel">
      <div class="col-12">
        <div class="spinner-grow text-success mx-2" role="status"></div>
        <div class="spinner-grow text-success mx-2" role="status"></div>
        <div class="spinner-grow text-success mx-2" role="status"></div>
        <p class="sr mt-2 text-light bg-dark rounded border border-success border-2">
          {{ $t('PleaseWait') }}...
        </p>
        <div v-show="delayFlag" class="p-2 text-light bg-dark rounded border border-success border-2">
          <p class="m-0">{{ $t('DownloadingDataTakesLongerThanUsually') }}
          </p>
          <p class="m-0">{{ $t('BePatientAzureServerMustStartAfterPeriodOfInactivity') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';

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
const delayFlag = ref(false)
const timeout = setTimeout(() => {
  delayFlag.value = true
}, 5000);

watch(() => props.isLoading, (newValue) => {
  if (newValue === true) {
    timeout
  }
  else {
    delayFlag.value = false
    clearTimeout(timeout)
  }
})
</script>

<style scoped>
.loading-panel {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 300px;
  transform: translate(-50%, -50%);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  z-index: 99;
}

.spinner-grow:nth-child(1) {
  animation-delay: -0.2s;
}

.spinner-grow:nth-child(2) {
  animation-delay: -0.1s;
}
</style>
