<template>
  <div id="my-count">
    我是Son
    <p>count的值是:{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "Son",
 
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count += 1;
      this.$emit("numchange",this.count)
    }
  },
}
</script>

<style scoped lang="less">
#my-count {
  width: 100%;
  height: 80%;
  background-color: lightblue;
}
</style>