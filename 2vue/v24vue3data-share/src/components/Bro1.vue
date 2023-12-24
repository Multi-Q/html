<template>
    <h1>我是兄弟组件Bro1.vue</h1>
   <button @click="sendToy">发送数据给兄弟组件Bro2.vue</button>
</template>

<script setup lang="ts">
import {ref} from "vue";
import emitter from "../utils/emitter";
defineOptions({name:"Bro1"});

let toy=ref<string>("玩具：奥特曼");

function sendToy(){
    emitter.emit("send-toy",toy);
}

</script>

<style scoped lang="css">
  
</style>