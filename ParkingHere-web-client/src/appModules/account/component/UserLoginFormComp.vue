<template>
  <form @submit.prevent="submitSignIn">
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="form-floating my-3">
      <Field
        name="email"
        type="email"
        class="form-control required"
        :class="{ 'is-invalid': errors.email }"
        id="email"
        :placeholder="$t('EmailAddress')"
        v-model="getUserLogin.email"
      />
      <label class="text-secondary-emphasis" for="email">{{ $t('EmailAddress') }}</label>
      <ErrorMessage name="email" class="invalid-feedback" />
    </div>
    <div class="form-floating my-3">
      <Field
        name="password"
        type="password"
        class="form-control required"
        :class="{ 'is-invalid': errors.password }"
        id="password"
        :placeholder="$t('Password')"
        v-model="getUserLogin.password"
      />
      <label class="text-secondary-emphasis" for="password">{{ $t('Password') }}</label>
      <ErrorMessage name="password" class="invalid-feedback" />
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
import { useForm, Form, Field, ErrorMessage } from 'vee-validate'
import i18n from '@/plugins/i18n'
import * as yup from 'yup'

const store = useUserLoginStore()
const { userSignIn } = store
const { getParams, getUserLogin } = storeToRefs(store)

const { errors, validate } = useForm({
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .email(i18n.global.t('IncorrectFormatEmail'))
      .max(75, i18n.global.t('TextMaxLength', ['50'])),
    password: yup.string().required(i18n.global.t('FieldCanNotBeEmpty'))
  }) as any
})

async function onValidate() {
  let rez = true
  const { valid } = await validate()

  rez = valid
  return rez
}
async function submitSignIn() {
  if (await onValidate()) {
    userSignIn()
  }
}
</script>

<style scoped></style>
