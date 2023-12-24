<template>
        <!-- <ModelSon :modelValue="username" @update:modelValue="username=$event"></ModelSon> -->
        <ModelSon v-model="username"></ModelSon>
</template>

<script setup lang="ts">
import ModelSon from './ModelSon.vue';
import {ref} from "vue";
defineOptions({name:"ModelFather"});
let username=ref<string>("");

</script>

<style scoped>

</style>