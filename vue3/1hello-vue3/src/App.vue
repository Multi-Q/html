<script  lang="ts">
import Person from './components/Person.vue';
export default{
    name:"App",
    components:{Person}
}
</script>

<template>
  <div id="app">
    <h1>app组件</h1><hr>
    <Person></Person>
  </div>
</template>

<style scoped>
</style>
