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
   {
    path: "/themetour",//主题游
    component: () => import("@/views/yrview/Themetour.vue")
    },
    {
      path: "/themeitem1",//11个主题游跳转页
      component: () => import("@/views/yrview/Themeitem1.vue")
    },
    {
      path: "/themeitem2",
      component: () => import("@/views/yrview/Themeitem2.vue")
    },
    {
      path: "/themeitem3",
      component: () => import("@/views/yrview/Themeitem3.vue")
    },
    {
      path: "/themeitem4",
      component: () => import("@/views/yrview/Themeitem4.vue")
    },
    {
      path: "/themeitem5",
      component: () => import("@/views/yrview/Themeitem5.vue")
    },
    {
      path: "/themeitem6",
      component: () => import("@/views/yrview/Themeitem6.vue")
    },
    {
      path: "/themeitem7",
      component: () => import("@/views/yrview/Themeitem7.vue")
    },
    {
      path: "/themeitem8",
      component: () => import("@/views/yrview/Themeitem8.vue")
    },
    {
      path: "/themeitem9",
      component: () => import("@/views/yrview/Themeitem9.vue")
    },
    {
      path: "/themeitem10",
      component: () => import("@/views/yrview/Themeitem10.vue")
    },
    {
      path: "/themeitem11",
      component: () => import("@/views/yrview/Themeitem11.vue")
    },
    {
      path: "/order",//预订页面（假）
      component: () => import("@/views/yrview/Order.vue")
    },
    {
      path: "/orderquery",//订单查询页面
      component: () => import("@/views/yrview/OrderQuery.vue")
    },
    {
      path: "/myOrder",//我的订单
      component: () => import("@/views/yrview/MyOrder.vue")
    },
    {
      path: "/drivecar",//租车自驾
      component: () => import("@/views/yrview/DriveCar.vue")
    },
   /* gonglue 攻略 */
   {
    path: '/gonglue',
    component: ()=>import("../views/zmview/Gonglue.vue"),
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
