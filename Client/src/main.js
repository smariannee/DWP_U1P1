import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
