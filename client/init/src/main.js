import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //全局引入 vueX
import Axios from 'axios'  //全局引入 axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//ui框架的引入

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(ElementUI); //ui的注入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
