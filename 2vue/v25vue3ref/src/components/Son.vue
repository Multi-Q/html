<template></template>

<script setup>
import { ref, defineExpose } from "vue";
const count = ref(999);
function sayHi(){
    console.log("hi~,我是子组件Son.vue");
}
defineExpose({
    count,
    sayHi
});
</script>

<style lang="scss" scoped></style>