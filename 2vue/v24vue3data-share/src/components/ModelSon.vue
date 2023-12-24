<template>
  <div style="border: 1px solid red;">
    <p>这是ModelSon.vue</p>
    <input type="text" :value="modelValue" @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)">
  </div>
</template>

<script setup lang="ts">
defineOptions({name:"ModelSon"});

const props=defineProps(["modelValue"]);
const emit=defineEmits(["update:modelValue"]);

</script>

<style scoped>

</style>