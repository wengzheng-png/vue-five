import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/./views/zmview/Home.vue"


Vue.use(VueRouter)

const routes = [
  /* 首页 */
  {
    path: '/',
    name:Home,
    component: Home,
   },
   /* 攻略 */
   {
    path: '/gonglue',
    component: ()=>import("../views/zmview/Gonglue.vue"),
   },
   /* 攻略详情页 */
    {
      path: '/walkthrough',
      component: ()=>import("../views/zmview/WalkthroughDetails.vue"),
     }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
