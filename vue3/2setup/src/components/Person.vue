<template>
    <div id="person">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <p>电话：{{ tel }}</p>
        <hr>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeName">修改姓名</button>
        <button @click="changeTel">修改电话</button>

    </div>
</template>

<!-- <script  lang="ts">
export default {
    name: "Person",
    setup() {
        let name = "张三";
        let age = 18;
        let tel = "12345678900";
        function changeName() {
            name = "zhang-san";
        }
        function changeAge() {
            age = 20;
        }
        function changeTel() {
            tel = "09876543211";
        }

        return {
            name, age, tel, changeAge, changeName, changeTel
        }
    }
}
</script> -->

<script setup lang="ts">
import { ref, reactive } from "vue";

let name = ref("张三");
let age = ref(18);
let tel = ref("12345678900");
function changeName() {
    name.value = "zhang-san";
}
function changeAge() {
    age.value = 20;
}
function changeTel() {
    tel.value = "09876543211";
}

</script>

<style lang="css" scoped>
button {
    margin: 0 10px;
}
</style>