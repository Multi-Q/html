<template>
  <div id="movie-container">
    我是Movie组件
    {{ this.$route.params.id ? this.$route.params.id : "无id" }}
  <button @click="goRen">跳转到《火影忍者》</button>
  <button @click="go(1)">前进</button>
  <button @click="go(-1)">后退</button>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      id: 0,
    };
  },
  methods:{
    goRen(){
      // 通过编程式api导航到
      // this.$router.push("/movie/1");
      this.$router.replace("/movie/1");
    },
    go(v){
      v===1?this.$router.go(-1):this.$router.go(1);
    }
  }
};
</script>

<style scoped lang="less">
#movie-container {
  width: 100%;
  height: 400px;
  font-size: 40px;
  background-color: orange;
}
</style>