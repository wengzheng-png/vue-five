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
<<<<<<< HEAD
   /* 攻略 */
=======
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
>>>>>>> aae6ed17e1aa1f35c4da29aeac4f85dd3e7eabdb
   {
    path:'/gonglue',
    component: ()=>import("../views/zmview/Gonglue.vue"),
<<<<<<< HEAD
   },
   /* 攻略详情页 */
    {
      name:"Walkthrough",
      path: '/walkthrough',
      component: ()=>import("../views/zmview/WalkthroughDetails.vue"),
     },
      /* 攻略详情页 */
    {
      name:"Walkthrough1",
      path: '/walkthrough1',
      component: ()=>import("../views/zmview/WalkthroughDetails1.vue"),
     }
=======
  },
  // 注册
  {
    path: '/register',
    component: () => import('@/views/wsview/Register.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/wsview/Login.vue')
  },
  // 验证码路由接口
  {
    path: '/verif',
    component: () => import('@/views/wsview/Verif.vue')
  },
  {
    path: '/forgetpwd',
    component: () => import('@/views/wsview/Forgetpwd.vue')
  },
  {
    path: '/place',
    component: () => import('@/views/wsview/Place.vue')
  },
  {
    path: '/toplace',
    component: () => import('@/views/wsview/Toplace.vue')
  }


>>>>>>> aae6ed17e1aa1f35c4da29aeac4f85dd3e7eabdb
]
  

 
   
   

   


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
