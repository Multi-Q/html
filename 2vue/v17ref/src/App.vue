<template>
  <div id="app">
    <h1 ref="myh1">App根组件</h1>
    <p ref="myp">我是p，我要变绿色</p>
    <button @click="show">打印this</button>
    <hr />
    <Left ref="leftC"></Left>
    <p>Left组件的name值{{leftName}}</p>
    <button @click="showLeftCount">调我调用Left.vue中的showCount()</button>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
export default {
  name: "App",
  components: { Left },
  data() {
    return {
      leftName:""
    };
  },
  methods: {
    show() {
      console.log(this);
      this.$refs.myh1.style.color = "red";
      this.$refs.myp.style.color = "green";
    },
    showLeftCount() {
      this.leftName= this.$refs.leftC.name;
      this.$refs.leftC.showCount();
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
