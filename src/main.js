import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import 'swiper/css/swiper.min.css'
import './assets/tailwind.css'
import loading from './assets/loading.svg'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  preLoad: 1,
  loading,
  attempt: 1,
  observer: true,
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
