<template>
  <div>
    <UserRegistrationFormComp v-if="isRegistrationSuccess === 0" />
    <OperationMessageComp
      v-else
      :isOperationSuccess="isRegistrationSuccess"
      :operationType="$t('Registration')"
      :additionalSuccessText="
        $t('AnEmailWithLinkToActivateYourAccountHasBeenSentToEmailAddressProvided')
      "
      :additionalFailureText="$t('PleaseTryAgainLaterIfTheErrorReoccursContactYourAdministrator')"
    />
  </div>
</template>

<script setup lang="ts">
import UserRegistrationFormComp from '@/appModules/account/component/UserRegistrationFormComp.vue'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import OperationMessageComp from '@/appModules/common/component/OperationMessageComp.vue'

components: {
  UserRegistrationFormComp
  LoadBarComp
  OperationMessageComp
}

import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import { storeToRefs } from 'pinia'
import { onUnmounted } from 'vue'

const store = useUserRegistrationStore()
const { resetRegistrationParams } = store
const { isRegistrationSuccess } = storeToRefs(store)

onUnmounted(() => {
  resetRegistrationParams()
})
</script>

<style scoped></style>
