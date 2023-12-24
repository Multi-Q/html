<template>
    <h1>我是兄弟组件Bro2.vue</h1>
    <p>我接受到来自兄弟组件Bro2.vue的数据：{{ broToy }}</p>
</template>

<script setup lang="ts">
import {ref} from "vue";
import emitter from "../utils/emitter";
defineOptions({name:"Bro2"});
let broToy=ref("");

emitter.on("send-toy",(val:string)=>{
    broToy.value=val;
    console.log(val.value);
});
</script>

<style scoped lang="css">

</style>