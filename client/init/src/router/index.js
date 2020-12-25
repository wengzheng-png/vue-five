import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from "../App.vue"

import Hotel from "../views/wzview/Hotel.vue"

import Home from "@/./views/zmview/Home.vue"


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:Home,
    component: Home,
  },
    {
      path:"/notes",
      component:()=>import("../views/wzview/Note.vue"),
     
    },
    {
      path:"/show",
      component:()=>import("../views/wzview/Show.vue"),
    },
    {
      path:"/he",
      component:()=>import("../components/wzcomponents/Headlunbo.vue"),
     
    },
    {
      path:"/hotel",
      component:Hotel,
    },
    {
      path:"/hotelinfo",
      component:()=>import("../views/wzview/Hotelinfo.vue")
    },
   {
    path:'/gonglue',
    component: ()=>import("../views/zmview/Gonglue.vue"),
  },
  // 注册
  {
    path: '/register',
    component: () => import('@/views/wsview/Register.vue')
  },

]
  

 
   
   

   


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
