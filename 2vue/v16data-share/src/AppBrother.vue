<template>
    <div id="app-bro">
        我是App的兄弟组件
        <p>我兄弟给我发来了消息：{{ myBrosMsg }}</p>
    </div>
</template>

<script>
import bus from "@/bus.js";

export default {
    name: "AppBrother",
    data() {
        return {
            myBrosMsg: ""
        }
    },
    created() {
        bus.$on("share", function (val) {
            this.myBrosMsg = val;
        });
        console.log(this.myBrosMsg);
    }
}
</script>

<style></style>