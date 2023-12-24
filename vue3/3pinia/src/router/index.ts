import { createRouter, createWebHistory } from "vue-router";

const router=createRouter({
  history:createWebHistory(),
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("@/views/Home.vue")},
    {path:"/user",component:()=>import("@/views/User.vue")},
  ]
});

export default router;