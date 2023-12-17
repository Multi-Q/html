<script setup>
import {ref,watch} from "vue";

// 执行watch函数需要传入要侦听的响应式数据和回调函数
const count =ref(0);
const name=ref("张三");
const age=ref(19);
// 调用watch侦听数据
// 1、监听单个值
watch(count,function(newValue,oldValue){
  console.log("count的值发生变化了：",oldValue,newValue);
});

// 2、监听多个值
watch([name,age],function([newName,newAge],[oldName,oldAge]){
  console.log("name和age的值发生变化了：",newName,oldName," | ",newAge,oldAge);
});


// 3、精确监听。监听对象中的属性，需要用函数返回要监视的属性
const obj=ref({name:"张三",count:0});
// 错误，无法直接拿到obj.value.count
// watch(obj.value.count,function(newValue){console.log("新值为：",newValue);});
watch(function(){return obj.value.count},function(newValue){concole.log("新值为：",newValue);});

// 4、监听函数的immediate属性
const immediateCount=ref(0);
watch(immediateCount,(newValue,oldValue)=>{
  console.log("开启监听函数的immediate属性：",newValue,oldValue);
},{immediate:true});

// 5、监听函数的深度监听deep
const deepPerson=ref({name:"李四",age:19,addr:{city:"北京",cityCode:8080}});
watch(deepPerson,(newValue,oldValue)=>{
  // 开启深度监听newValue和oldValue值是一样的，除非deepPerson倍整个替换掉
  console.log("监听函数deep，citycode变化了：",newValue.addr.cityCode,oldValue.addr.cityCode);
},{deep:true});


</script>


<template>
 value的值为：{{ count }}<br>
 <button @click="count++">点我让count++</button><br><br>
 <hr>
 <input type="text" v-model="name"><br>
 <button @click="age++">点我让age++</button>
 <hr>
 监听对象中的属性<br>
 <button @click="obj.count++">点我让obj.count++</button>
 <hr>
 <button @click="deepCount++">开启监听函数的immediate属性</button>
 <hr>
 <button @click="deepPerson.addr.cityCode++">开启监听函数的deep属性,让其加加</button>
 
</template>

<style scoped>

</style>
