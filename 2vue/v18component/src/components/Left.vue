<template>
  <div id="left">我是Left组件，这是我的页面
    
    <p><button @click="count++">+1</button> count:{{ count }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:0
    }
  },
  activated(){
    console.log("Left组件被激活了");
  },
  deactivated(){
    console.log("Left组件被销毁了");
  }
};
</script>

<style scoped lang="less">
#left {
  width: 100%;
  height: 500px;
  background: orange;
  font-size: 40px;
}
</style>