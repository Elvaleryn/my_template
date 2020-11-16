import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import "@/assets/sass/main.scss"
import 'bootstrap/js/src/collapse'
import 'bootstrap/js/src/popover'
import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
