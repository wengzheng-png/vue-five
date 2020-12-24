import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App.vue"
import Show from "../views/wzview/Show.vue"
import Hotel from "../views/wzview/Hotel.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:App,
    children:[
    
    {
      path:"/note",
      component:()=>import("../views/wzview/Note.vue"),
     
    },
    {
      path:"show",
      component:Show,
    },
    {
      path:"/he",
      component:()=>import("../components/wzcomponents/Headlunbo.vue"),
     
    },
    {
      path:"hotel",
      component:Hotel,
    },
    {
      path:"hotelinfo",
      component:()=>import("../views/wzview/Hotelinfo.vue")
    },
  ]

  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
