<template>
  <div>我是Left
    我有count:{{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 9,
      a:1,
      name:"z航安"
    };
  },
  methods: {
    showCount() {
      console.log(this.count);
    },
  },
};
</script>

<style>
</style>