<template>
  <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
  <div class="h-lg-100">
    <div class="center-form mx-auto p-3 col-12 col-md-9 col-sm-9 col-xl-5">
      <form @submit.prevent="submitNewParking">
        <div class="d-flex flex-wrap align-items-center justify-content-center mb-3">
          <div class="circle-icon">
            <div class="position-absolute top-50 start-50 translate-middle d-flex align-items-center">
              <font-awesome-icon :icon="['fa', 'parking']" class="icon me-1" size="2x" />
              <font-awesome-icon :icon="['fa', 'plus']" class="icon fs-5" size="1x" />
            </div>
          </div>
          <h2 class="h3 ps-3 border-start border-dark">{{ $t('NewParking') }}</h2>
        </div>
        <div class="col-md-12 my-3">
          <div class="form-floating">
            <Field name="name" type="text" class="form-control required" :class="{ 'is-invalid': errors.name }" id="name"
              :placeholder="$t('Name')" v-model="getCreateParkingDto.name" />
            <label class="text-secondary-emphasis" for="name">{{ $t('Name') }}</label>
            <ErrorMessage name="name" class="invalid-feedback" />
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <div class="form-floating">
              <Field name="street" type="text" class="form-control required" :class="{ 'is-invalid': errors.street }"
                id="street" :placeholder="$t('Street')" v-model="getCreateParkingDto.street" />
              <label class="text-secondary-emphasis" for="street">{{ $t('Street') }}</label>
              <ErrorMessage name="street" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating">
              <Field name="city" type="text" class="form-control required" :class="{ 'is-invalid': errors.city }"
                id="city" :placeholder="$t('City')" v-model="getCreateParkingDto.city" />
              <label class="text-secondary-emphasis" for="city">{{ $t('City') }}</label>
              <ErrorMessage name="city" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-6">
            <div class="form-floating">
              <Field name="postalCode" type="text" class="form-control required"
                :class="{ 'is-invalid': errors.postalCode }" id="postalCode" :placeholder="$t('PostalCode')"
                v-model="getCreateParkingDto.postalCode" />
              <label class="text-secondary-emphasis" for="postalCode">{{ $t('PostalCode') }}</label>
              <ErrorMessage name="postalCode" class="invalid-feedback" />

            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating">
              <Field as="select" name="type" class="form-select required" :class="{ 'is-invalid': errors.type }" id="type"
                v-model="getCreateParkingDto.type">
                <option value="" disabled selected hidden>{{ $t('SelectType') }}</option>
                <option v-for="(type, index) in types" class="row table-body" :key="index" :value="type">
                  {{ $t(type) }} </option>
              </Field>
              <label class="text-secondary-emphasis" for="type">{{ $t('Type') }}</label>
              <ErrorMessage name="type" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-6">
            <div class="form-floating">
              <Field name="contactNumber" type="text" class="form-control required"
                :class="{ 'is-invalid': errors.contactNumber }" id="contactNumber" :placeholder="$t('MobileNumber')"
                v-model="getCreateParkingDto.contactNumber" />
              <label class="text-secondary-emphasis" for="contactNumber">{{
                $t('MobileNumber')
              }}</label>
              <ErrorMessage name="contactNumber" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating">
              <Field name="contactEmail" type="text" class="form-control required"
                :class="{ 'is-invalid': errors.contactEmail }" id="contactEmail" :placeholder="$t('Email')"
                v-model="getCreateParkingDto.contactEmail" />
              <label class="text-secondary-emphasis" for="contactEmail">{{ $t('Email') }}</label>
              <ErrorMessage name="contactEmail" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-12">
            <div class="form-floating">
              <Field name="description" as="textarea" type="text" class="form-control required" id="description"
                :class="{ 'is-invalid': errors.description }" :placeholder="$t('Description')"
                v-model="getCreateParkingDto.description"></Field>
              <label class="text-secondary-emphasis" for="description">{{
                $t('Description')
              }}</label>
              <ErrorMessage name="description" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
            {{ $t('Add') }}
          </button>
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
import { storeToRefs } from 'pinia'
import { useParkingStore } from '@/appModules/parking/store/ParkingStore'
import { ParkingTypeEnum } from '@/appModules/parking/domain/enumerated/ParkingTypeEnum'
import i18n from '@/plugins/i18n'
import * as yup from 'yup'
import { useForm, Form, Field, ErrorMessage } from 'vee-validate'
import UserService from '@/appModules/account/domain/service/UserService';

const service = new UserService()
const { errors, validate } = useForm({
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(25, i18n.global.t('TextMaxLength', ['25'])),
    street: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(25, i18n.global.t('TextMaxLength', ['25'])),
    city: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(50, i18n.global.t('TextMaxLength', ['50'])),
    postalCode: yup
      .string()
      .required(i18n.global.t("FieldCanNotBeEmpty"))
      .matches(service.MASK_POSTALCODE, i18n.global.t("IncorrectPostalCode"))
      .max(6, i18n.global.t("TextMaxLength", ["6"])),
    type: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty')),
    contactNumber: yup
      .string()
      .required(i18n.global.t("FieldCanNotBeEmpty"))
      .max(12, i18n.global.t("TextMaxLength", ["12"]))
      .matches(service.MASK_PHONENUMBER, i18n.global.t("IncorrectPhoneNumber")),
    contactEmail: yup
      .string()
      .email(i18n.global.t("IncorrectFormatEmail"))
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(30, i18n.global.t('TextMaxLength', ['30'])),
    description: yup
      .string()
      .required(i18n.global.t('FieldCanNotBeEmpty'))
      .max(50, i18n.global.t('TextMaxLength', ['50'])),
  }) as any
})

const parkignStore = useParkingStore()
const { addParking } = parkignStore
const { getParams, getCreateParkingDto } = storeToRefs(parkignStore)
const types = [ParkingTypeEnum.Outdoor, ParkingTypeEnum.Roofed]


async function onValidate() {
  let rez = true
  const { valid } = await validate()

  rez = valid
  return rez
}

async function submitNewParking() {
  if (await onValidate()) {
    addParking()
  }
}
</script>

<style scoped>
input,
textarea {
  border: solid 1px rgb(175, 175, 175);
}
</style>
