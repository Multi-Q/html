<template>
    <h2>我是son1 --{{ counterStore.count }} --{{ counterStore.double }}<button @click="counterStore.addCount">+</button></h2>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
defineOptions({  name: "Son1", });
const counterStore=useCounterStore();

</script>

<style lang="scss" scoped></style>