import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("@/views/home/Home.vue")},
    {path:"/user",component:()=>import("@/views/user/User.vue")},
  ],
})

export default router
