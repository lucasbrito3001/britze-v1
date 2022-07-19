import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { BootstrapVue, IconsPlugin, BIconInstagram, BIconLinkedin, BIconWhatsapp } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.use(BootstrapVue, IconsPlugin)

Vue.component('BIconInstagram', BIconInstagram)
Vue.component('BIconLinkedin', BIconLinkedin)
Vue.component('BIconWhatsapp', BIconWhatsapp)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
