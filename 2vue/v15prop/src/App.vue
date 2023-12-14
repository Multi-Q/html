<template>
  <div id="my-app" >
      <Left></Left>
      <Right></Right>
  </div>
</template>

<script>

import Left from "@/components/Left.vue"
import Right from "@/components/Right.vue";


export default {
  name: 'App',
  components: {
    Left,Right
  }
}
</script>

<style lang="less">
#my-app {
  width: 100%;
  height: 1000px;
  margin-top: 60px;
  background-color: rgb(0, 255, 225);
}
</style>
