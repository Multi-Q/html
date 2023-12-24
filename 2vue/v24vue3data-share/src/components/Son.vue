<script setup>
import {defineProps } from "vue";
defineOptions({name:"Son"});

    // 通过defineProps()变编译宏接收子组件传递的数据
    const props=defineProps({
        message:String,
        car:String,
        age:Number
    });

    const emit=defineEmits(["get-message"]);

    function sendMsg(){
        emit("get-message","我是来自子组件的数据");
    }

</script>
<template>
      <!-- 对于props中的属性，可以直接使用,不用. -->
    接收来自父组件的数据messsage：{{ props.message }}、{{ car }}、{{ age }}
    <hr>
    <button @click="sendMsg">我要向父组件发送数据了</button>
</template>


<style lang="less" scoped></style>