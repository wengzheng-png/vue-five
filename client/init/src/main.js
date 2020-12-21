import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //全局引入 vueX
import Axios from 'axios'  //全局引入 axios

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
