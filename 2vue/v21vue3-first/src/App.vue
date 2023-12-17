<script setup>
import {ref,reactive} from "vue";

  const message="Hello Vue3";

  const person=reactive({
    name:"张三",
    age:18
  });

const age=ref(123);

  function getMessage(){
    console.log(message);
  }



</script>

<template>
  <header>
    <div class="wrapper">
      <h1>hello Vue3</h1>
    </div>
  </header>
  <main>
    <h2>主题内容</h2>
    {{ getMessage() }}
    <hr>
    响应式数据reactive() {{ person.age }}
    <button @click="person.age++">+1</button>
    <hr>
    ref数据{{ age }}
    <button @click="age++">+1</button>
  </main>
</template>

<style scoped>
header {
  width: 100%;
  height: 30px;
  background-color: skyblue;

}

main {
  width: 100%;
  background-color: rgb(244, 243, 243);
}
</style>
