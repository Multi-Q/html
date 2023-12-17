<script setup>
import  Son1 from "@/components/Son1.vue";
import Son2 from "@/components/Son2.vue";
import {useCounterStore} from "@/store/counter.js";
import {useChannelStore} from "@/store/channel.js";

const counterStore=useCounterStore();
console.log(useCounterStore);

const channelStore=useChannelStore();
// channelStore.getList();
</script>

<template>
  <h1>我是App组件-- {{ counterStore.count }}-{{ counterStore.msg }}</h1>
    <Son1></Son1>
    <Son2></Son2>
    <hr>
    <button @click="channelStore.getList">过频道数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
    </ul>
</template>

<style scoped>

</style>
