import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/loginrj",
    //components:()=>import('../views/rqview/Login.vue'),
    component:()=>import ("@/views/rqview/Login.vue")
  },{
    path: "/personinfo",
    component:()=>import ("@/views/rqview/Personinfo.vue")
  },{
    path: "/light",
    component:()=>import ("@/views/rqview/Light.vue")
  },{
    path: "/",
    //components:()=>import('../views/rqview/Login.vue'),
    component:()=>import ("@/views/rqview/Login.vue")
  },{
    path: "/xiangqing",
    //components:()=>import('../views/rqview/Login.vue'),
    component:()=>import ("@/views/rqview/Xiangqing.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
