<template>
  <div id="my-app">
    <p>来自子组件的值：{{ countFromSon }}</p>
    <Son @numchange="getNewCount"></Son>
  </div>
</template>

<script>

import bus from "@/bus.js";
import Son from "@/components/Son.vue";
export default {
  name: 'App',
  components: { Son },
  data() {
    return {
      countFromSon: 0,
      str:"兄弟我来了"
    }
  },
  methods: {
    getNewCount(val) {
      this.countFromSon = val;
    },
    sendDataToBro(){
      // 像兄弟组件发信息
      bus.$emit("share",this.str);
    }
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
