<template>
  <div id="app">
    <h1>这是App组件</h1>
    <hr />
    <!-- <a href="#/home">home</a>&nbsp;&nbsp;&nbsp;
      <a href="#/movie">movie</a>&nbsp;&nbsp;&nbsp;
      <a href="#/about">about</a> -->

    <!-- 当时安装和配置了vue-router后，就可以使用router-link来代替普通的a连接 -->
    <router-link to="/home">首页</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/movie">电影</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/movie/1">火影忍者</router-link>&nbsp;&nbsp;&nbsp;
   <!-- 在路径参数？后面的参数项，叫做参数对象
        注：在this.$route.fullPath是完整的路径参数 /movie/2?name=xs&age=20
  -->
    <router-link to="/movie/2?name=xs&age=20">海贼王</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/movie/3">乒乓小将</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/about">关于</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/login">登录</router-link>

    <!-- 实现路由跳转，相当于一个占位符 -->
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
