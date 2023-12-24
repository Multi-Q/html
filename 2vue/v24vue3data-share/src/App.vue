<script setup>
import { ref } from "vue";
import Son from "./components/Son.vue";
import Bro1 from "./components/Bro1.vue";
import Bro2 from "./components/Bro2.vue";
import ModelFather from "./components/ModelFather.vue";

const age = ref(19);

function getMessage(value) {
  console.log(value);
  return value;
}

</script>

<template>
  <div class="father-son">
    <Son message="我是子组件Son" car="宝马车" :age="age" @get-message="getMessage"></Son>
    <hr>
    查看来自子组件的数据:{{ getMessage() }}
  </div>

  <div class="mitt">
    <h1>任意组件件通信：mitt插件</h1>
    <Bro1></Bro1>
    <Bro2></Bro2>
  </div>

  <div class="model">
    <h1>v-model实现组件间通信</h1>
    <ModelFather></ModelFather>
  </div>
</template>

<style scoped lang="css">
.father-son{
  height: 200px;
  background-color: pink;
}
.mitt {
  margin-top: 40px;
  height: 300px;
  background-color: skyblue;
}
.model{
  height: 200px;
  background-color: pink;
}
</style>
