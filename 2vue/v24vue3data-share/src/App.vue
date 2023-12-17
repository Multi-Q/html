<script setup>
import {ref} from "vue";
import Son from "./components/Son.vue";
const age=ref(19);

function getMessage(value){
 console.log(value);
 return value;
}

</script>

<template>
  <Son message="我是子组件Son" car="宝马车" :age="age" @get-message="getMessage"></Son>
  <hr>
  查看来自子组件的数据:{{ getMessage() }}
</template>

<style scoped></style>
