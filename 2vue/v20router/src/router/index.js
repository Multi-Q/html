// 1、导入Vue和VueRouter包
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import Movie from "@/components/Movie.vue";
import About from "@/components/About.vue";
import Tab1 from "@/components/tabs/Tab1.vue";
import Tab2 from "@/components/tabs/Tab2.vue";
import Login from "@/components/Login.vue";

// 2、使用Vue.use()函数，把VueRouter安装为vue的插件
Vue.use(VueRouter);

// 3、创建路由实例对象
const router = new VueRouter({
    // routes是一个数组，作用：定义hash地址与组件之间的对应关系
    routes: [
        // 重定向路由规则
        { path: "/", redirect: "/home" },

        { path: "/home", component: Home },
        { path: "/movie/:id?", component: Movie },
        // 嵌套路由设计
        {
            path: "/about",
            component: About,
            redirect: "/about/tab1",
            children: [
                { path: "tab1", component: Tab1 },
                { path: "tab2", component: Tab2 },
            ]
        },
        { path: "/login", component: Login },


    ],
});

// 为router对象声明全局前置守卫
// 只要发生了路由跳转，必然会触发路由的回调函数
router.beforeEach((to, from, next) => {
    // to:表示将要访问的路由的信息对象
    // from:表示将要离开的路由的信息对象
    // next:是一个函数，调用next（）表示放行，允许这次路由导航

    // console.log("路由首尾参数to", to);
    // console.log("路由守卫参数from", from);

    /*   
       next()的三种调用方式：
         1、当用户拥有后台主页的访问权限，直接放行：next()
         2、当用户没有后台主页的访问权限，强制其跳转到登录页面:next("/login")
         3、当前用户没有后台主页访问权限，不允许跳转到后台主页:next(false)
   */

    if (to.path === "/login") {
        if (localStorage.getItem("token")) {
            // 有token放行
            next();
        } else {
            // 没有token跳转到home页面
            alert("你没有全限访问login页面");
            next("/home");
        }
    } else {
        next(); //访问的不是/login都放行
    }

});


// 4、向外暴露路由的实例对象
export default router;
