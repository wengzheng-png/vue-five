import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store' //全局引入 vueX
import Axios from 'axios' //全局引入 axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //ui框架的引入

//引入vuex
import Vuex from "vuex"
Vue.use(Vuex)
//创建仓库
const store=new Vuex.Store({
  //msg是input搜索框下拉框的现实和隐藏时，类名的切换
  //sanjixin是导航栏点击时的样式变化
  state:{msg:"pull_down_none",
          }

})

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(ElementUI); //ui的注入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')