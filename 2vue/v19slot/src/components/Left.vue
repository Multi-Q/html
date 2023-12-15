<template>
  <div id="left">
    我是Left组件
    <hr>
    <!-- 申明一个插槽区域  -->
    <!-- vue规定，每个slot都要有一个name名称，如果不写name值，那么name=”default“ -->
    <!-- <slot name="default"></slot> 与下面的<slot></slot>等价-->
    <!-- <slot ></slot> -->

    <!-- 自定义插槽名称 -->
    <slot name="left-slot" msg="hello vue" id="1" sex="男"></slot>
  </div>
</template>

<script>
export default {
name:"Left",
data(){
    return {

    }
}
}
</script>

<style scoped lang="css">
#left{
    width: 100%;
    height: 500px;
    background-color: orange;
    font-size: 40px;
}
</style>