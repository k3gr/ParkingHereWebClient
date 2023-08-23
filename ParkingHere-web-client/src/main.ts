import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'vue-toastification/dist/index.css'
import Toast, { POSITION } from 'vue-toastification'
const options = {
  position: POSITION.BOTTOM_RIGHT
}

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faCalendar,
  faCalendarDays,
  faCalendarXmark,
  faCalendarCheck,
  faEnvelope,
  faLocationDot,
  faUser,
  faUserPlus,
  faCheckCircle,
  faArrowRight,
  faArrowUp,
  faSquareParking,
  faCar,
  faPlus,
  faMagnifyingGlass,
  faRoadCircleXmark,
  faUmbrella,
  faSackDollar,
  faHeadset,
  faKey
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faSearch,
  faCalendar,
  faCalendarDays,
  faCalendarXmark,
  faCalendarCheck,
  faEnvelope,
  faLocationDot,
  faUser,
  faUserPlus,
  faCheckCircle,
  faArrowRight,
  faArrowUp,
  faSquareParking,
  faCar,
  faPlus,
  faMagnifyingGlass,
  faRoadCircleXmark,
  faUmbrella,
  faSackDollar,
  faHeadset,
  faKey
)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import i18n from '@/plugins/i18n'
export { i18n }

import './styles/main.less'

library.add(faSearch)

createApp(App)
  .use(createPinia())
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(i18n)
  .use(router)
  .use(Toast, options)
  .mount('#app')
