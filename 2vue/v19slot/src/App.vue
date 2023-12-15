<template>
  <div id="app">
    <Left>
      <!-- 默认情况下，在使用组件的时候，提供的内容都会被填充到名字为default的插槽中，
          如果给插槽命名了，就插到指定名称下的插槽中 -->
      <!-- <h1 style="font-size: 14px;">这是来自App组件的内容，在App内的Left组件中使用插槽</h1>
        <div class="left-slot">  </div> -->

      <!-- 插槽另一种写法 标签内v-slot:插槽名称-->
      <!-- <template v-slot:default>
        <h1 style="font-size: 14px">
          这是来自App组件的内容，在App内的Left组件中使用插槽
        </h1>
        <div class="left-slot"></div>
      </template> -->

      <!-- <template v-slot:left-slot>
        <h1 style="font-size: 14px">
          这是来自App组件的内容，在App内的Left组件中使用插槽
        </h1>
        <div class="left-slot"></div>
      </template> -->


      <!-- v-slot简写 -->
      <template #left-slot="leftObj">
        <h1 style="font-size: 14px">
          这是来自App组件的内容，在App内的Left组件中使用插槽
        </h1>
        <div class="left-slot"></div>
        <p>{{ leftObj }}</p>
      </template>
    </Left>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
  name: "App",
  components: {
    Left,
    Right,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left-slot {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: pink;
}
</style>
