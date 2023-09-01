<template>
  <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
  <div class="bg-dark h-lg-100">
    <div class="center-form mx-auto bg-dark p-4 mb-5 col-12 col-sm-9 col-xl-5" data-bs-theme="dark">
      <form @submit.prevent="submitRegister">
        <div class="d-flex flex-wrap align-items-center justify-content-center mb-3">
          <div class="circle-icon">
            <font-awesome-icon :icon="['fa', 'user-plus']"
              class="icon text-light position-absolute top-50 start-50 translate-middle" size="2x" />
          </div>
          <h2 class="h3 ps-3 border-start text-light">{{ $t('Registration') }}</h2>
        </div>
        <div class="row gx-0 gx-sm-3">
          <div class="col-md-6 my-2">
            <div class="form-floating">
              <Field name="firstName" type="text" class="form-control required"
                :class="{ 'is-invalid': errors.firstName }" id="firstName" :placeholder="$t('FirstNamePlaceHolder')"
                v-model="getUserRegistration.firstName" />
              <label class="text-secondary-emphasis" for="firstName">{{ $t('FirstName') }}</label>
              <ErrorMessage name="firstName" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-md-6 my-2">
            <div class="form-floating">
              <Field name="lastName" type="text" class="form-control required" :class="{ 'is-invalid': errors.lastName }"
                id="lastName" :placeholder="$t('LastNamePlaceHolder')" v-model="getUserRegistration.lastName" />
              <label class="text-secondary-emphasis" for="lastName">{{ $t('LastName') }}</label>
              <ErrorMessage name="lastName" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="col-md-12 my-2">
          <div class="form-floating">
            <Field name="email" type="email" class="form-control required" :class="{ 'is-invalid': errors.email }"
              id="regEmail" :placeholder="$t('EmailAddress')" v-model="getUserRegistration.email" />
            <label class="text-secondary-emphasis" for="regEmail">{{ $t('EmailAddress') }}</label>
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
        </div>
        <div class="row gx-0 gx-sm-3">
          <div class="col-md-6 my-2">
            <div class="form-floating">
              <Field name="password" type="password" class="form-control required"
                :class="{ 'is-invalid': errors.password }" id="password" :placeholder="$t('Password')" minLength="10"
                v-model="getUserRegistration.password" />
              <label class="text-secondary-emphasis" for="password">{{ $t('Password') }}</label>
              <ErrorMessage name="password" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-md-6 my-2">
            <div class="form-floating">
              <Field name="confirmPassword" type="password" class="form-control required"
                :class="{ 'is-invalid': errors.confirmPassword }" id="confirmPassword"
                :placeholder="$t('ConfirmPassword')" v-model="getUserRegistration.confirmPassword" />
              <label class="text-secondary-emphasis" for="confirmPassword">{{
                $t('ConfirmPassword')
              }}</label>
              <ErrorMessage name="confirmPassword" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="row gx-0 gx-sm-3">
          <span class="fs-6 ms-3 text-secondary">{{ $t('VehicleDetails') }}:</span>
          <div class="col-md-6 my-2">
            <div class="form-floating">
              <Field name="brand" type="text" class="form-control required" :class="{ 'is-invalid': errors.brand }"
                id="brand" :placeholder="$t('VehicleBrand')" v-model="getUserRegistration.vehicle.brand" />
              <label class="text-secondary-emphasis" for="brand">{{ $t('VehicleBrand') }}</label>
              <ErrorMessage name="brand" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-md-6 my-2">
            <div class="form-floating">
              <Field name="model" type="text" class="form-control required" :class="{ 'is-invalid': errors.model }"
                id="model" :placeholder="$t('VehicleModel')" v-model="getUserRegistration.vehicle.model" />
              <label class="text-secondary-emphasis" for="model">{{
                $t('VehicleModel')
              }}</label>
              <ErrorMessage name="model" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="row gx-0 gx-sm-3">
          <div class="col-md-6 my-2">
            <div class="form-floating">
              <Field name="registrationPlate" type="text" class="form-control required"
                :class="{ 'is-invalid': errors.registrationPlate }" id="registrationPlate"
                :placeholder="$t('VehicleRegistrationPlate')" v-model="getUserRegistration.vehicle.registrationPlate"
                minLength="5" maxLength="7" />
              <label class="text-secondary-emphasis" for="registrationPlate">{{
                $t('VehicleRegistrationPlate')
              }}</label>
              <ErrorMessage name="registrationPlate" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="checkbox my-2">
          <div class="form-check">
            <Field :value="false" name="agreement" type="checkbox" class="form-check-input bg-success required"
              :class="{ 'is-invalid': errors.agreement }" id="checkbox" />
            <label class="form-check-label text-light" for="checkbox">{{
              $t('IAcceptTermsAndConditions')
            }}</label>
            <ErrorMessage name="agreement" class="invalid-feedback" />
          </div>
        </div>
        <div class="d-flex justify-content-center my-3">
          <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
            {{ $t('Register') }}
          </button>
        </div>
        <div class="mt-2">
          <span class="m-0 me-2 text-light">{{ $t('IAlreadyHaveAccount') }}.</span><router-link
            class="text-decoration-none text-success d-block d-sm-inline" :to="{ name: 'login' }">{{ $t('SignIn')
            }}</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
components: {
  LoadBarComp
}
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import { storeToRefs } from 'pinia'
import { useForm, Form, Field, ErrorMessage } from 'vee-validate'
import i18n from '@/plugins/i18n'
import * as yup from 'yup'
import UserService from '@/appModules/account/domain/service/UserService';

const store = useUserRegistrationStore()
const { userRegistration } = store
const { getParams, getUserRegistration } = storeToRefs(store)
const service = new UserService()

const { errors, validate } = useForm({
  validationSchema: yup.object().shape({
    firstName: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(25, i18n.global.t('TextMaxLength', ['25'])),
    lastName: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(25, i18n.global.t('TextMaxLength', ['25'])),
    email: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .email(i18n.global.t('IncorrectFormatEmail'))
      .max(50, i18n.global.t('TextMaxLength', ['50'])),
    password: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .min(8, i18n.global.t('TextMinLength', ['8']))
      .matches(service.MASK_PASSWORD, i18n.global.t('IncorrectPasswordWithMask')),
    confirmPassword: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .test(
        'passwords-match',
        i18n.global.t('IncorrectPasswordConfirmedNotMatch'),
        function (value) {
          return this.parent.password === value
        }
      ),
    brand: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(50, i18n.global.t('TextMaxLength', ['50'])),
    model: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(50, i18n.global.t('TextMaxLength', ['50'])),
    registrationPlate: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .min(5, i18n.global.t('TextMinLength', ['5']))
      .max(7, i18n.global.t('TextMaxLength', ['7'])),
    agreement: yup
      .bool()
      .test('testAgreementCheckbox', i18n.global.t('AcceptTermsAndConditions'), function (value) {
        if (value === false) {
          return true
        }
        return false
      })
  }) as any
})

async function onValidate() {
  let rez = true
  const { valid } = await validate()

  rez = valid
  return rez
}

async function submitRegister() {
  if (await onValidate()) {
    userRegistration()
  }
}
</script>

<style scoped></style>
