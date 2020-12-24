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
<<<<<<< HEAD
   {
    path: "/themetour",
    component: () => import("@/views/Themetour.vue")
    },
    {
      path: "/themeitem1",
      component: () => import("@/views/Themeitem1.vue")
    },
    {
      path: "/themeitem2",
      component: () => import("@/views/Themeitem2.vue")
    },
    {
      path: "/themeitem3",
      component: () => import("@/views/Themeitem3.vue")
    },
    {
      path: "/themeitem4",
      component: () => import("@/views/Themeitem4.vue")
    },
    {
      path: "/themeitem5",
      component: () => import("@/views/Themeitem5.vue")
    },
    {
      path: "/themeitem6",
      component: () => import("@/views/Themeitem6.vue")
    },
    {
      path: "/themeitem7",
      component: () => import("@/views/Themeitem7.vue")
    },
    {
      path: "/themeitem8",
      component: () => import("@/views/Themeitem8.vue")
    },
    {
      path: "/themeitem9",
      component: () => import("@/views/Themeitem9.vue")
    },
    {
      path: "/themeitem10",
      component: () => import("@/views/Themeitem10.vue")
    },
    {
      path: "/themeitem11",
      component: () => import("@/views/Themeitem11.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/Order.vue")
    },
    {
      path: "/orderquery",
      component: () => import("@/views/OrderQuery.vue")
    },
    {
      path: "/myOrder",
      component: () => import("@/views/MyOrder.vue")
    },
=======
   /* gonglue 攻略 */
   {
    path: '/gonglue',
    component: ()=>import("../views/zmview/Gonglue.vue"),
   }
>>>>>>> 1c4c541c69a607c46c15e463f5c05e9fd6e0ac53
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
