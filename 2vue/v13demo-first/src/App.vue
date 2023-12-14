<template>
  <div>
    <h1>vue组件</h1>
    <p>{{ hello }}</p>
    <button v-on:click="clickMe">点我</button>
    <p>获取一个随机数{{ getARandomNumber }}</p>
    <input type="text" v-model="name">
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      hello:"Hello Vue",
      name:""
    }
  },
  methods:{
    clickMe(){
      alert("vue我来了")
    }
  },
  computed:{
    getARandomNumber(){
      return Math.ceil(Math.random()*101);
    }
  },
  watch:{
    name:{
      handler(nv,ov){
        console.log(nv,ov);
      },
      immediate:true
    }
  }
}
</script>

<style lang="less">
@font12:12px;
h1{
  font-size: @font12;
}
</style>
