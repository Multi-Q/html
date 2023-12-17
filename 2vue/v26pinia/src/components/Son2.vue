<template>
    <h2>我是son2 --{{counterStore.count}} <button @click="counterStore.subCount">-</button></h2>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
const counterStore=useCounterStore();

defineOptions({
    name: "Son2"
})
</script>

<style lang="scss" scoped></style>