<template>
  <div id="app">
    <button @click="comName = 'Left'">切换Left组件</button>
    <button @click="comName = 'Right'">切换Right组件</button>
    <!-- 渲染Left组件 或 Right组件 -->
    <!-- <component :is="comName"></component> -->

    <!-- keep-alive保持组件的存活状态 -->
    <keep-alive include="Left">
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  name: "App",
  components: {
    Left,
    Right,
  },
  data() {
    return {
      comName: "",
    };
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
  margin-top: 60px;
}
</style>
