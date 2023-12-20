import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/index.js';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //地址栏不带#
  routes: [
    {
      path: "/",
      component: import("@/views/layout/LayoutContainer.vue"),
      redirect: "/article/manage",
      children: [
        { path: "article/manage", component: () => import("@/views/article/ArticleManage.vue") },
        { path: "article/channel", component: () => import("@/views/article/articleChannel.vue") },
        { path: "user/profile", component: () => import("@/views/user/UserProfile.vue") },
        { path: "user/password", component: () => import("@/views/user/UserPassword.vue") },
        { path: "user/avatar", component: () => import("@/views/user/UserAvatar.vue") },
      ]
    },
    { path: "/login", component: () => import("@/views/login/LoginPage.vue") },

  ]
});
// 默认是直接放行，如果是undefine或true也会放行
// return false 拦回from的地址页面
router.beforeEach((to, from) => {
  // 如果没有token
  const userToken = useUserStore();
  if (!userToken.token && to.path !== "login") return "login";
  return true;
})

export default router
