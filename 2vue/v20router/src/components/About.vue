<template>
  <div id="about-container">
    <p>我是About组件</p>
    <p>
      <router-link to="/about/tab1">tab1</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/about/tab2">tab2</router-link>
    </p>
    
      <router-view></router-view>
  </div>
</template>

<script>
export default {
name:"About",
data(){
    return{

    }
}
}
</script>

<style scoped lang="less">
#about-container{
    width: 100%;
    height: 400px;
    font-size: 40px;
    background-color: skyblue;
}
</style>