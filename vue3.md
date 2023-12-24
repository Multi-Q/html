# 重新快速学习vue3

创建项目命令：
```cmd
npm create vue@latest
```

## 一、toRefs()和toRef()的使用
当我们使用`结构赋值`时，结构出来的数据`失去了响应式`，如果还想要结构出来的数据还保持着响应式，需要使用`toRefs(要解构的响应式对象)`

**toRefs()和toRef()的区别**
toRefs()会把响应式对象的所有属性都会设置成响应式，
而toRef()只能一个一个的设置响应式

```ts
import {ref,reactive,toRefs} from "vue";

let person=reactive({
    name:"张三",
    age:18
});

let {name,age}=toRefs(person);

function changeName(){
    name.value+="~";
    console.log(name.value,person.name);
}
function changeAge(){
    age.value+=1;
    console.log(age.value,person.age);
}
```