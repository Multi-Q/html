<script setup>
import { ref,computed } from "vue";
/* 
  计算属性语法格式：
    const 计算属性名=computed( ()=>{return 返回计算结果} )
*/
const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// 注意：list是对象
// ()内没有参数，不要给它加参数
const computedList = computed(() => { 
  // console.log(e);
  return list.value.filter(item => item > 2) });
// console.log(computedList.value);

function addFn(){
  list.value.push(666);
}

</script>

<template>
  计算前list的值：{{ list }}<br>
  计算后的数据：{{ computedList }}<br>
  <button @click="addFn">点我修改list数组</button><br>
  点我之后list数组:{{ list }}

</template>

<style scoped></style>
