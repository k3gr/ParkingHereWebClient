import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
  .mount('#app')
