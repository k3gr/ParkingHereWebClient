<template>
  <div
    class="position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center"
  >
    <div
      class="row col-12 col-md-6 col-lg-5 col-xxl-4 bg-dark p-3 rounded-4"
      v-if="isOperationSuccess === 1"
    >
      <font-awesome-icon :icon="['fa', 'check-circle']" class="icon text-success my-4" size="8x" />
      <p class="text-success text-center fs-2">
        <span class="text-light">{{ operationType }} {{ $t('OperationWas') }}</span>
        {{ $t('WasSuccessful') }}
      </p>
      <p class="text-light">{{ additionalSuccessText }}</p>
    </div>
    <div
      class="row col-12 col-md-6 col-lg-5 col-xxl-4 bg-dark p-3 rounded-4"
      v-else-if="isOperationSuccess === 2"
    >
      <font-awesome-icon :icon="['fa', 'check-circle']" class="icon text-danger my-4" size="8x" />
      <p class="text-danger text-center fs-2">
        <span class="text-light">{{ operationType }} {{ $t('OperationWas') }}</span>
        {{ $t('WasFailure') }}
      </p>
      <p class="text-light" style="white-space: pre-line">{{ additionalFailureText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isOperationSuccess: {
    type: Number,
    default: 0
  },
  operationType: {
    type: String,
    default: ''
  },
  additionalSuccessText: {
    type: String,
    default: ''
  },
  additionalFailureText: {
    type: String,
    default: ''
  }
})
</script>

<style scoped></style>
