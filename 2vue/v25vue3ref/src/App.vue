<script setup>
import Son from "./components/Son.vue";

import { ref ,onMounted} from "vue";

// 1、用ref声明一个ref对象
const myh1 = ref(null);
console.log(myh1);

// 必须渲染完才能拿到myh1的dom
// 所以需要用到生命周期钩子
onMounted(function () {
  myh1.value.style.color = "green";
});
// myh1.value.style.color="skyblue"; //获取不到dom，因为刚获取完dom就没了

// 获取组件的dom
const mySon=ref(null);
onMounted(()=>{
  // 子组件中定义的变量和方法默认是不公开的，
  // 如果想要拿到子组件的变量和方法，在子组件中使用defineExpose({})将要暴露的变量和方法名放进来
 console.log( mySon.value.count);
 mySon.value.sayHi();
});

</script>

<template>
  <!-- 2、使用ref表示绑定myh1，在myh1这个变量中就可以操作这个<h1>的dom了 -->
  <h1 ref="myh1">我是h1</h1>

<Son ref="mySon" ></Son>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
