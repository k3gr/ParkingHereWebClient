<template>
  <div class="d-flex justify-content-center">
    <form
      class="position-absolute top-50 translate-middle-y rounded border border-4 border-success"
    >
      <div class="d-flex col-12 flex-wrap form-section">
        <div class="enter-location col-12 col-xl-5 position-relative py-4">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="icon text-success" />
          <input
            class="bg-transparent col-12"
            type="text"
            id="parkings"
            name="parkings"
            placeholder=" "
          />
          <label for="parkings">{{ $t('EnterParkingLocation') }}</label>
        </div>
        <div class="date col-12 col-md-5 border-success col-xl-3 position-relative">
          <label>{{ $t('StartDate') }}</label>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="icon text-success" />
          <input id="startDate" class="date-picker bg-transparent" type="date" />
        </div>
        <div class="date col-12 col-md-5 border-success col-xl-3 position-relative">
          <label>{{ $t('EndDate') }}</label>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="icon text-success" />
          <input id="endDate" class="date-picker bg-transparent" type="date" max="2199-12-31" />
        </div>
        <div
          class="search-btn d-flex justify-content-center align-items-center bg-success col-12 col-md-2 col-xl-1"
          type="submit"
        >
          <span class="text-light">{{ $t('Search') }}</span>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.icon {
  position: absolute;
  top: 50%;
  transform: translate(8px, -50%);
  font-size: 20px;
}
form {
  width: 60%;
}
.search-btn:hover {
  background-color: rgba(25, 135, 84, 0.9) !important;
  border-radius: 0px, 2px;
}

.form-section div {
  height: 60px;
}

div.search-btn {
  height: auto;
  padding: 10px 0;
}

label {
  color: #adadad;
}

form {
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
}

.enter-location {
  outline: 3px solid #198754;
}

.enter-location input {
  position: absolute;
  top: 50%;
  transform: translate(0px, -30%);
  padding: 10px 25px 10px 40px;
  color: #fff;
  border: 0;
  font-size: 16px;
  z-index: 1;
}

.enter-location label {
  position: absolute;
  top: 50%;
  transform: translate(40px, -50%);
  transition: ease-out 0.25s;
  font-size: 14px;
  color: #fff;
}

input.date-picker {
  color-scheme: dark;
  font-weight: 700;
  letter-spacing: 1px;
  width: 90px;
  left: 50%;
  transform: translate(-50%, -25%);
}

.date input {
  position: absolute;
  top: 50%;
  /* transform: translate(40px, -25%); */
  color: #fff;
  border: 0;
  font-size: 16px;
}

.date-picker::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}

input:focus {
  outline: none;
}

label,
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  position: absolute;
  top: 10px;
  transform: translate(30px, -35%);
  color: #adadad;
  font-size: 12px;
}

.date {
  border-bottom: 3px solid;
}

.date span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  font-weight: 700;
  letter-spacing: 1px;
}

/* ##################################### */

@media only screen and (min-width: 767px) {
  .date {
    border-bottom: 0;
    border-right: 3px solid;
  }
}

@media only screen and (min-width: 1200px) {
  .enter-location {
    border-right: 3px solid #198754;
    outline: 0;
  }
}
</style>
