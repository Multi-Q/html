<template>
  <div id="right">我是Right组件，这是我的页面</div>
</template>

<script>
export default {
  // 当组件第一被创建时，机会执行created生命周期，也会执行activited生命周期
  activated(){
    console.log("Rihgt组件被激活了");
  },
  deactivated(){
    console.log("Right组件被销毁了");
  }
};
</script>

<style scoped lang="less">
#right {
  width: 100%;
  height: 500px;
  background: skyblue;
  font-size: 30px;
}
</style>