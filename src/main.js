import Vue from 'vue'
import App from './App.vue'

// External stylesheets ================
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import "vue-toastification/dist/index.css";

// Vuex ================================
import store from './store/store'
Vue.prototype.$store = store; // Declaring $store to use the store of Vuex in all components


// Bootstrap icons components ==========
import { BootstrapVue, IconsPlugin, BIconInstagram, BIconLinkedin, BIconWhatsapp } from 'bootstrap-vue'

Vue.component('BIconInstagram', BIconInstagram)
Vue.component('BIconLinkedin', BIconLinkedin)
Vue.component('BIconWhatsapp', BIconWhatsapp)

Vue.use(BootstrapVue, IconsPlugin)


// Vue scroll reveal ===================
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1500,
  scale: 1,
  distance: '32px',
  mobile: true
});

// Vue mask ============================
import VueMask from 'v-mask'
Vue.use(VueMask);

// Vue toastification ==================
import Toasts from 'vue-toastification'
Vue.use(Toasts)

// Instance vue ========================
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
