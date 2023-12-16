import Vue from "vue";
import VueRouter from "vue-router";
import "@/assets/css/bootstrap.css";

Vue.use(VueRouter);

import Login from "@/components/MyLogin.vue";
import MyHome from "@/components/MyHome.vue";
import MyUsers from "@/components/menus/MyUsers.vue";
import MyGoods from "@/components/menus/MyGoods.vue";
import MyRights from "@/components/menus/MyRights.vue";
import MySettings from "@/components/menus/MySettings.vue";
import MyOrders from "@/components/menus/MyOrders.vue";
import MyUserDetail from "@/components/user/MyUserDetail.vue";

const router = new VueRouter({
    routes: [
        { path: "/", redirect: "login" },
        { path: "/login", component: Login },
        {
            path: "/home", component: MyHome,
            redirect: "/home/users",
            children: [
                { path: "users", component: MyUsers },
                { path: "goods", component: MyGoods },
                { path: "rights", component: MyRights },
                { path: "settings", component: MySettings },
                { path: "orders", component: MyOrders },
                { path: "userinfo/:id", component: MyUserDetail },
            ]
        },

    ],
});

router.beforeEach((to, from, next) => {
    const pathArr = ["/home", "/home/users/", "/home/rights", "/home/settings", "/home/goods", "/home/orders"];
    if (pathArr.indexOf(to.path) === -1) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;