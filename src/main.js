import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/slick-carousel/slick/slick.css';
import 'vue-search-select/dist/VueSearchSelect.css'
Vue.config.productionTip = false
export const bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
