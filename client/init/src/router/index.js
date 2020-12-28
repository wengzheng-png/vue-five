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
    path: "/loginrj",
    //components:()=>import('../views/rqview/Login.vue'),
    component:()=>import ("@/views/rqview/Login.vue")
  },{
    path: "/personinfo",//个人信息
    component:()=>import ("@/views/rqview/Personinfo.vue")
  },{
    path: "/light",//景点
    component:()=>import ("@/views/rqview/Light.vue")
  },{
    path: "/xiangqing",//景点详情
    //components:()=>import('../views/rqview/Login.vue'),
    component:()=>import ("@/views/rqview/Xiangqing.vue")

  },{
    path: "/cont",
    component:()=>import ("@/components/rqcomponents/Con1.vue")
  },
   /* 攻略 */
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
    {
      path:"/carorder",//租车详情
      component: () => import("@/views/yrview/CarOrder.vue")
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
   {
    path:'/gonglue',
    component: ()=>import("../views/zmview/Gonglue.vue"),
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
     },

  // },
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

]
  

 
   
   

   


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
