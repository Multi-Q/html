<template>
  <div id="my-count">
    我是my-count <br>名字叫：{{ name }}
    <p>count的值是:{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  // props: ["init"],
  props: {
    init: {
      // 默认值
      // default:0,
      // // 值的类型
      // type:Number,
      // // 值是否必填，默认false
      // // require:true,
      count: {
        type: Number,
        default: 0,
      },
      name: {
        type: String,
        default: "",
      },
    },
  },
  data() {
    return {
      count: this.init.count,
      name:this.init.name
    };
  },
  methods: {
    add() {
      this.count += 1;
      console.log(this.count);
    },
  },
};
</script>

<style scoped lang="less">
#my-count {
  width: 100%;
  height: 80%;
  background-color: lightblue;
}
</style>