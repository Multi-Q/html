# Vue学习

## Vue学习前学习Webpack

<p style="color:red;">注：在这次学习中都会使用ES6语法</p>
所以使用`npm init -y`生成的`package.json`中添加`"type":"module"`这个属性。

```json
{
  "name": "1change-row-color",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module"
}
```

### 一、使用npm下载webpack
```cmd
npm i webpack webpack-cli --save-dev
```
创建webpack.config.js
```js
export default{
    mode:"devement", //模式
}
```
然后再`package.json`中的`scripts`中添加命令`"dev":"webpack"`
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  "dev":"webpack"
  }
```
<span style="color:red;">注：</span><br>
> webpack中的默认约定:<br>
>在webpack4.x和5.x的版本中有如下默认规定：<br>
>①默认的打包入口为src/index.js<br>
>②默认的输出文件路径dist/main.js<br>
>
>这些默认规定都是可以修改的

### 二、webpack热更新 webpack-dev-server
webpack-dev-server类似于nodemon工具

安装
```cmd
npm i webpack-dev-server -D
```
在package.json中dev配置拼接`serve`
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack serve"
  }
```
最后重启就行了



### 三、html-webpack-plugin打包时自动配置html页面

导入
```cmd
npm i html-webpack-plugin --save-dev
```

编辑webpack.config.js
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [new HtmlWebpackPlugin({
            template: "./src/index.html",//指定原文件存放路径
            filename: "./index.html", //指定生成的文件的存放路径
        }),

  ],
};
```

### 四、打包css  css-loader、style-loader
安装
```cmd
npm i css-loader style-loader --save-dev
```
编辑webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```
### 五、抽取css插件 mini-css-extract-plugin
<p style="color:red;">mini-css-extract-plugin不能和style-loader同时使用</p>
安装

```cmd
npm install --save-dev mini-css-extract-plugin
```

入口index.js文件中引入css
```js
import "./style.css";
```

编辑webpack.config.js
```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
```

### 六、压缩导出的css和js文件  css-minimizer-webpack-plugin
安装
```cmd
npm i css-minimizer-webpack-plugin --save-dev
```

编辑webpack.config.js
```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    // 在开发模式下启用压缩css插件
    minimize: true,
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
       `...`,
      new CssMinimizerPlugin(),
      
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```
### 七、安装babel-loader用来解析高级js语法
webpack只能解析基础的高级js语法，对于一些高级的js语法无法解析，这就需要使用babel-loader

安装
```cmd
npm i babel-loader @babel/core @babel/plugin-proposal-decorators --save-dev
```
编辑webpack.config.js
```js
module:{
  rules:[
    // ....
    ,{
      test:/\.js$/i,
      use:"babel-loader",
      // 使用babel-loader时，程序员只需将自己的代码进行转换即可，一定要排除node_modules目录中的js，因为第三方中的js不需要程序员担心
      exclude:"/node_modules/"
    }
  ]
}
```

项目的根目录中创建`babel.config.js`文件，用来定义babel的相关配置
```js
module.exports={
  // 声明babel可用的插件
    plugins:[
        ["@babel/plugin-proposal-decorators",{legacy:true}]
    ]
}
```

## 正式进入Vue的学习

### 一、vue的基本使用
1、导入vue.js的script脚本
2、在页面声明一个将要被vue所控制的dom区域
2、创建一个vue对象
```html
<body>
    <div id="app">
        <h1><strong>{{msg}}</strong></h1>
    </div>


    
    <script src="./lib/vue.js"></script>
    <script>
        // 创建一个vue对象
        const vm=new Vue({
            // el是固定写法，表示当前vm实例要控制页面上的哪个区域，接受得值是一个选择器
            el:"#app",
            // data对象就是要渲染到页面上的数据
            data:{
                msg:"Hello Vue!"
            }
        });
        
    </script>
</body>
```

### 二、vue指令
#### 1、内容渲染指令
`v-text`<br>
`{{}}`<br>
`v-html`<br>

```html
<body>
    <div id="app">
        <p v-text="username"></p>
        <!-- v-text会把标签内的内容覆盖掉，并且v-text不能解析html标签 -->
        <p class="gender" v-text="gender">性别</p>

        <p class="gender" >性别：{{gender}}</p>

        <!-- v-html也会覆盖掉标签内原来的内容，但是v-html可以解析html标签 -->
        <p class="go" v-html="baidu">去百度</p>



    </div>

    <script src="./lib/vue.js"></script>
    <script>
        const vm = new Vue({
            el: "#app",
            data: {
                username: "张三",
                gender: "男",
                baidu:"<h1>http://www.baidu.com</h1>"
            }
        });
    </script>
```

#### 2、属性绑定指令
`v-bind`<br>
也可以简写为`:`<br>
用来动态获取属性值

<strong style="color:red;">注：`{{}}`只能用在内容节点，不能用在属性节点中</strong>

```html
<body>
    <div id="app">
        <!-- {{}}插值表达式只能用在内容节点，不能用在属性节点 -->
       <input type="text" v-bind:placeholder="place">

       <p><a :href="togo">去百度</a></p>
    </div>
<script src="./lib/vue.js"></script>
<script>
    const vm=new Vue({
        el:"#app",
        data:{
            place:"请输入姓名~",
            togo:"http://www.baidu.com"
        }
    });
</script>
</body>
```

#### 3、事件绑定指令
`v-on`<br>
也可以简写`@`<br>
用来绑定监听事件，绑定的监听事件值为一个`函数`，而函数要在`methods`属性中编写。但是在函数中想要调用`data:{}`内的变量需要使用`this`来调用，这个`this`指向的是`Vue`。

> v-bind能绑定JavaScript中的监听事件类型，如JavaScript中的onclick、onmouseover、onmouseenter、onblur、onfocus等等，总之，JavaScript有的监听事件类型v-bind都能监听<br>
>
>>例：v-bind:click="add()" 其相当于原生js中
>document.querySelector("选择器").addEventListener("click",add);<br>
>>function add(){......}<br>
>
>关于函数是否加括号的问题，如果绑定函数需要`传参就必须加`，如果绑定的函数不需要传参`可以加括号也可以不加括号`

```html
<body>
 <div id="app">
    <h1>{{num}}</h1>
      <!-- 
        如果绑定的事件函数没有括号，那么vue会自动给函数添加js原生的事件对象event
        如果绑定的事件函数加了括号，但是没有参数，那么vue不再会给这个函数添加js原生的事件对象event
            如果硬是要js原生的事件对象，那么必须显式的添加$event，这是vue封装这个事件对象
      -->
    <button v-on:click="addOne(1,$event)">点我加1</button>
    <button @:click="miniOne">点我减1</button>
    <div @mouseenter="enter()" class="div1">鼠标进入事件onmouseenter</div>
  </div>
    <script src=" ./lib/vue.js"> </script>
    <script>
      const vm = new Vue({
          el: "#app",
          data: {
              num: 0
          },
          methods: {
              addOne: function () {
                  this.num += 1;
              },
              /* 
                  //  或者使用这个写法
                  addOne(){
  
                  }
              */
              miniOne() {
                  this.num -= 1;
              },
              enter(){
                  alert('鼠标进入')
              }
          }
      });
    </script>
</body>
```

##### 3.1、事件修饰符
vue给`v-bind`提供了事件修饰符

1\) 阻止元素默认行为

`v-bind:事件类型.prevent="函数名"` 等价于原生js的`e.preventDefault()`

2\)阻止事件冒泡

`v-bind:事件类型.stop="函数名` 等价于原生js的`e.stopPropagation()`

3\)以捕获模式触发当前的事件处理函数

`v-bind:事件类型.capture="函数名` 等价于原生js的`document.querySelector("选择器").addEventListener("事件类型",function(e){},{capture:ture} );` 

4\)绑定的事件只触发一次

`v-bind:事件类型.once="函数名` 等价于原生js的`document.querySelector("选择器").addEventListener("事件类型",function(e){},{once:ture} );` 

5\)只有在e.target是当前元素自身时触发事件处理函数

`v-bind:事件类型.self="函数名`

```html
<body>
    <div id="app">
        <h1><a href="http://www.baidu.com" v-on:click.prevent="go($event)">去百度</a></h1>
        <div class="father" @click="bubble($event)">
            模拟冒泡 父亲
            <div class="son"  @click="bubble($event)" >儿子</div>
        </div>
    </div>
    <script src="./lib/vue.js"></script>
    <script>
        const vm=new Vue({
            el:"#app",
            data:{ },
            methods:{
                go(e){
                //     // 原生js中阻止事件默认行为函数
                //    e.preventDefault();
                //     console.log("原生js中的事件对象",e);
                console.log("事件修饰符");
                },
                bubble(e){
                    alert(e.target.innerHTML);
                }
            }
        })
       
    </script>
</body>
```

##### 3.2、按键修饰符
vue给`v-bind`提供了监听键盘的`按键修饰符`

1\)按键弹起时触发

`v-bind:keyup.按键类型` 等价于原生js的`document.querySelector("选择器").addEventListener("keyup",function(e){if(e.keyCode==="按键类型"){.....}})`

1\)按键按下时触发

`v-bind:keydown.按键类型` 等价于原生js的`document.querySelector("选择器").addEventListener("keydown",function(e){if(e.keyCode==="按键类型"){.....}})`

1\)按键按住时触发

`v-bind:keypress.按键类型` 等价于原生js的`document.querySelector("选择器").addEventListener("keypress",function(e){if(e.keyCode==="按键类型"){.....}})`

```html
<body>
    <div id="app">
        <input type="text" @keyup.enter="submit" >
        <input type="text" @keyup.esc="clear()" >
        <!-- 监听键盘的L键，按键不区分大小写 -->
        <input type="text" @keyup.L="keyboard" >
    </div>

    <script src="./lib/vue.js"></script>
    <script>
        const vm=new Vue({
            el:"#app",
            data:{

            },
            methods:{
                submit(e){
                    console.log(e);
                    alert("提交");
                },
                clear(){
                    console.log("清空内容");
                    alert("清空内容");
                },
                keyboard(e){
                    console.log(e.key); //该键的字符
                    console.log(e.keyCode); //该键的ASCII值
                }
            }
        });
    </script>
</body>
```

#### 4、双向绑定指令
`v-model`<br>
用来给`表单标签`进行数据的双向绑定，它其实是`替换了`表单标签中的`values属性`，也就是说，v-model等价于表单标签中的value属性

>能使用v-model的表单标签有<br>
>&lt;input&gt;<br>
>&lt;select&gt;<br>
>&lt;textarea&gt;<br>

```html
<body>
    <div id="app">
        <input type="text" value="hello">
        <!-- 替换了表单标签的value属性 -->
        <input type="text" v-model="msg">

        <textarea v-model="textareamsg" cols="30" rows="10"></textarea>
       
        <select name="city" v-model="city">
            <option value="shanghai">上海</option>
            <option value="beijing">北京</option>
            <option value="guangxi">广西</option>
        </select>


         <!-- <button> 不能使用-model -->
        <!-- <button v-model="buttonmsg"></button> -->

        <!-- <label> 不能使用v-model -->
        <!--  <label for="" v-model="labelmsg"></label> -->
    </div>
    <script src="./lib/vue.js"></script>
    <script>
        const vm = new Vue({
            el:"#app",
            data:{
                msg:"请填写内容",
                textareamsg:"textareamsg请填写内容",
                // labelmsg:"labelmsg"
                // buttonmsg:"button点我"
                city:"shanghai"
            }
        });
    </script>
</body>
```

##### 4.1、v-model的3个修饰符
`.number`将用户输入的值转换成数值类型<br>
`.trim`过滤掉用户输入的值的首尾空白字符<br>
`lazy`在change时更新数据

```html
<body>
    <div id="app">
        <input type="text" v-model.number="age" placeholder="请输入年龄">
        <input type="text" v-model.trim="name" placeholder="请输入名字">
        
        <!-- .lazy有点像js中的“防抖”功能。当输入框失去焦点时，值才会改变 -->
        <input type="text" v-model.lazy="change" >
    </div>
<script src="./lib/vue.js"></script>
<script>
    const vm=new Vue({
        el:"#app",
        data:{
            age:"",
            name:"",
            change:"改变"
        }
    })
</script>

</body>

```

#### 5、条件渲染指令
`v-if`<br>
`v-show`<br>

v-if与v-show的区别：
<ul>
<li>v-if会动态的将元素结点删除掉</li>
<li>v-show只会动态的显示、隐藏元素，不会将其从dom中删除掉</li>
</ul>

v-if和v-show的使用建议：
<ul>
<li>刚进入页面的时候，某些元素默认不需要被显示，而且后期这个元素可能也不再需要被展示出来，此时v-if会更好</li>
<li>如果频繁的切换元素的显示和隐藏，v-show会更好</li>
</ul>

```html
<body>

<div id="app">
    <!-- v-if每次都会动态的创建元素好删除元素 -->
    <p v-if="flag">这是被v-if控制的元素</p>
    <!-- v-show只会显示和隐藏元素，不会将其删除 -->
    <p v-show="flag">这是被v-show控制的元素</p>

<!-- 
    v-if=""  v-else-if="" v-eles
    
    等价于
    if(){

    }else if(){

    }else{

    }
-->

</div>

<script src="./lib/vue.js"></script>
<script>

    const vm=new Vue({
        el:"#app",
        data:{
            flag:true
        }
    })
</script>
    
</body>
```

#### 6、列表渲染指令
`v-for`<br>
格式：`v-for="i in items"`或`v-for="(item,index) in items" :key="index"`

```html
<body>
    <div id="app">
        <ul>
            <li v-for="i in arr">我是{{i}}</li>
        </ul>
        <hr>
        <ul>
            <li v-for="(item,index) in objList" :key="index">
                <span>{{index}}</span>
                <span>姓名：{{item.name}} </span>
                <span>年龄：{{item.age}}</span>
                <span>性别：{{item.gender}}</span>
            </li>
        </ul>
    </div>
    <script src="./lib/vue.js"></script>
    <script>
        const vm = new Vue({
            el: "#app",
            data: {
                arr: ["张三", "李四", "王五", "赵六", "马七"],
                objList: [
                    {
                        name: "张三",
                        age: 18,
                        gender: "男"
                    },
                    {
                        name: "张三",
                        age: 18,
                        gender: "男"
                    },
                    {
                        name: "张三",
                        age: 18,
                        gender: "男"
                    },
                    {
                        name: "张三",
                        age: 18,
                        gender: "男"
                    },
                    {
                        name: "张三",
                        age: 18,
                        gender: "男"
                    }
                ]

            },

        })
    </script>

</body>
```

#### 7、过滤器(<span style="color:red;">vue3已弃用</span>) 


#### 8、侦听器

`watch`<br>
用来监听数据变化<br>
`监听谁函数名就是谁`<br>
有点像原生js的“change”或“input”监听事件

侦听器有两种写法：<br>
<ul>
<li>1、方法格式侦听器<br>
        缺点：无法在刚进入页面的时候触发监听函数
</li>
<li>2、对象格式侦听器<br>
        优点：1、通过<span style="font-weight:bolder;">immediate属性</span>可以让侦听器自动触发<br>
        <span style="margin-left:42px;">2、如果要侦听对象中的某个属性的变化，一定要使用对象格式的侦听器</span>

</li>
</ul>

```html
<body>
    <div id="app">
        <input type="text" v-model="username">
        <input type="text" v-model="user.name">
        <input type="text" v-model="user.addr.city">

    </div>
    <script src="./lib/vue.js"></script>
    <script>
        const vm = new Vue({
            el: "#app",
            data: {
                username: "",
                user: {
                    name: "zhangsan",
                    addr: {
                        city: ""
                    }
                }
            },
            watch: {
                /* 
                    方法格式的监听器：
                        缺点：无法在刚进入页面的时候触发监听函数
                    对象格式监听器：
                        优点：
                */

                // 方法格式的监听器
                // 侦听器本质上就是一个函数，要监视哪个数据变化，就把数据名作为方法名就可
                // 新值在前，旧值在后
                // username(newValue,oldValue){
                //     console.log(newValue,oldValue);
                // },
                // 如果参数只有一个，那这个参数是newValue
                // username(newValue){
                //     console.log(newValue);
                // }


                // 对象格式的监听器
                // username: {
                //     // 侦听器处理函数
                //     handler(newVal, oldVal) {
                //         console.log(newVal, oldVal);
                //     },
                //     // 控制监听器是否立即触发，默认为false
                //     immediate: true
                // },

                // 如果侦听对象变化，必须使用对象格式的侦听器
                // user: {
                //     handler(newVal, oldVal) {
                //         console.log(newVal, oldVal);
                //     },
                //     immediate: true,
                //     // 开启深度监听，只要对象中的任意属性变化了，都会触发对象的侦听器
                //     deep: true
                // }


                // 如果要直接侦听对象中的子属性的变化，则必须包裹一层单引号
                "user.addr.city"(newVal, oldVal) {
                    console.log(newVal, oldVal);
                },

                "user.name":{
                    immediate:true,
                    handler(newVal, oldVal) {
                        console.log(newVal, oldVal);
                    },
                },
            }
        });

    </script>


</body>
```

#### 9、计算属性
`computed`<br>
计算属性指的是通过一系列运算之后，最终得到一个`属性值`<br>
这个动态计算出来的属性值可以被`模板结构`或`methods方法`使用

```html
<body>

    <div id="app">
        <div :style=" `backgroundColor: ${rgb};width:200px;height:200px;`  ">
            {{rgb}}
        </div>
        <button @click="change">切换颜色</button>
    </div>
    <script src="./lib/vue.js"></script>
    <script>
        /* 
            计算属性指的是通过一系列运算之后，最终得到一个`属性值` 
            这个动态计算出来的属性值可以被模板结构或methods方法使用
        */
        const vm = new Vue({
            el: "#app",
            data: {
                r:10, g:0, b:0
            },
            methods: {
                change(){
                     console.log(this.rgb);
                }
            },
            computed: {
                rgb(){
                    return `rgb(${this.r},${this.g},${this.b})`;
                }
            }
        })
    </script>

</body>
```

## 二、vue组件使用
<ul>
    <li>1、定义组件</li>
    <li>2、谁用这个组件就import这个组件,然后再<span style="font-weight:bolder;">components对象</span>中注册这个组件(components注册的是私有组件，谁导入就只有谁能用)</li>
</ul>

假设`APP.vue`要引用`Left.vue`,`Right.vue`,那么App.vue就需要导入Left.vue和Right.vue

**App.vue**
```html
<template>
  <div >
      <Left></Left>
      <Right></Right>
  </div>
</template>

<script>

import Left from "@/components/Left.vue"
import Right from "./components/Right.vue";

export default {
  name: 'App',
  components: {
    Left,Right
  }
}
</script>

<style lang="less">
</style>
```

**Left.vue**
```html
<template>
  <div id="left"> </div>
</template>

<script>
export default {
    name:"Left",
    data(){
        return { }
    },
    methods:{ }
}
</script>

<style scoped lang="less">
    #left{
        float: left;
        width: 500px;
        height: 500px;
        background-color: pink;
    }
</style>

</style>
```

**Right.vue**
```html
<template>
  <div id="right">  </div>
</template>

<script>
export default {
    name:"Right"
    ,
    data(){
        return { }
    },
    methods:{ }
}
</script>

<style scoped lang="less">
#right{
    float: left;
    width: 500px;
    height: 500px;
    background-color: rebeccapurple;
}
</style>
```

### 一、组件全局注册
步骤：<br>
1、在`入口函数main.js`中导入要注册成全局组件的组件<br>
2、用`Vue.component("全局组件名",要注册的组件名)`进行全局注册 <br>

**main.js**
```js
import Count from "@/components/Count.vue";
Vue.component("MyCount",Count);
```

### 二、props属性的使用(父向子传数据，子中props定义的属性来接收)
`props`是组件的自定义属性，在封装通用组件时<br>
**props中自定义的属性是只读的，程序员不能直接修改props值，要想修改可以把props的值转存到data中，因为data中的数据是可读可写的**

```js
pros:["init"],
data(){
    return {
        count:this.init
    }
}
```

步骤<br>
1、首先在`子组件`中使用`props`自定义一个属性<br>
2、父组件中用到该组件就可以在该组件的标签内传入值，`属性名:"要传的值"`。属性名就是子组件props中自定义的属性名，值就是父组件要给子组件中的这个属性名传的值<br>

**父组件Left.vue**
```html
<template>
  <div id="left">
    左边
    <hr>
    <MyCount :init="9"></MyCount>
  </div>
</template>
```

**子组件Count.vue**
```html
<template>
  <div id="my-count">
    我是my-count
    <p>count的值是:{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "Count",
//   props: ["init"],
   props:{
    init:{
      // 默认值
      default:0,
      // 值的类型
      type:Number,
      // 值是否必填，默认false
      // require:true,

    },
  data() {
    return {
      count: this.init ? this.init : 0
    }
  },
  methods: {
    add() {
      this.count += 1;
    }
  },
}
</script>
```

#### 1、props的default默认值
数组写法的props无法修改自定义属性的默认值，那就将props转为对象形式<br>
对象形式可以解决`父组件`不传递值时出现报错问题

```js
props:{
    init:{
        // default官方规定的属性
        default:0,
    }
}
```

#### 2、props的type

```js
props:{
    init:{
        // default官方规定的属性
        default:0,
        // type是官方规定的属性，用来指定该init接收一个数值类型
        type:Number
    }
}
```

#### 3、props的require

```js
props:{
    init:{
        // default官方规定的属性
        default:0,
        // type是官方规定的属性，用来指定该init接收一个数值类型
        type:Number,
        // 必填，如果父父组件不传值就报错，就算有default属性都不行，因为require关注的是你传不传值，而不是你有没有默认值
        require:true
    }
}
```
### 三、\<style\>标签内添加scoped
因为vue内定义的css样式是全局生效的，所以为了防止影响到其他vue文件的页面显示，在\<scoped\>内添加`scoped`属性可以防止该vue文件内定义的css样式会影响到其他vue文件
```html
<style scoped>
</style>
```

### 四、使用deep修改子属性样式
`/deep/ 选择器名`

```html
<style scoped>
    /* 
        不加/deep/ 生成样式类名为 h5[data-v-XXXX]{}
        加了/deep/ 生成的类名为 [data-v-XXXX] h5{}

        什么时候用到这个/deep/？
            如果想在父组件中修改掉子组件中的某个样式就可以这样
            当使用第三方时候，如果又要修改第三方组件中的样式，这就可以这样用/deep/
    */
    /deep/ h5{
        color:red;
    }
</style>
```

### 五、组件的生命周期
生命周期：创建->运行->销毁，强调一个时间段


### 六、组件间的数据共享
#### 6.1、父向子共享数据用<i style="color:red;">自定义属性props</i>

#### 6.2、子向父传递数据使用<i style="color:red;">自定义事件</i>
步骤：<br>
1、`父组件`内给`子组件标签内`添加`自定义事件`。<br>
2、`父组件`内定义这个自定义事件函数<br>
3、`子组件`通过`this.$emit("父组件中在子组件标签中定义自定义事件名",要发送给父组件的数据)`

**子组件Son.vue**
```html
<template>
  <div id="my-count">
    我是Son
    <p>count的值是:{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  data() {
    return {  count: 0  }
  },
  methods: {
    add() {
      this.count += 1;
      this.$emit("numchange",this.count);
    }
  },
}
</script>
```

**父组件App.vue**
```html
<template>
  <div id="my-app">
    <p>来自子组件的值：{{ countFromSon }}</p>
    <Son @numchange="getNewCount"></Son>
  </div>
</template>

<script>

import Son from "@/components/Son.vue";
export default {
  name: 'App',
  components: { Son },
  data() {
    return {
      countFromSon: 0
    }
  },
  methods: {
    getNewCount(val) {
      this.countFromSon = val;
    }
  }
}
</script>
```

#### 6.3、兄弟组件中数据共享
vue2.x中使用EventBus实现数据共享<br>
步骤:<br>
1、创建一个js，向外共享一个Vue实例对象，命名为`bus.js`<br>
**bus.js**
```js
import Vue from "vue";
export default new Vue();
```
2、`兄弟组件A（数据发送方）`和`兄弟组件B（数据接收方）`都要导入`bus.js`，才能使用事件总线<br>
3、`兄弟组件A（数据发送方）`在`methods`定义一个方法来发送数据<br>
**兄弟组件A（数据发送方）App.vue**
```js
methods:{
    sendDataToBro(){
      // 向兄弟组件发信息
    //   bus.$emit("事件名称",要发送的数据)触发自定义事件
      bus.$emit("share",this.str);
    }
}
```
4、`兄弟组件B（数据接收方）`在`created函数`中接收`兄弟组件A（数据发送方）`发来的数据<br>
**兄弟组件B（数据接收方）AppBrother.vue**
```js
created() {
    // bus.$on("事件名称", 时间处理函数)注册一个自定义事件
    bus.$on("share", function (val) {
        this.myBrosMsg = val;
    });
}
```

### 七、ref引用
ref用来获取dom元素或组件的引用<br>
在每个组件中都包含有一个`$refs`对象，这个对象默认指向一个`空对象`<br>

在原生的js中，如果我们想要获取一个元素的dom，那么需要通过`const 变量名=documen.querySelector("选择器")`的方式获取，而vue简化了我们获取元素dom的方式，那就是通过给`标签内添加ref="dom变量名"`就可以获取得到这个标签的dom对象，最后调用时调用这个$refs对象中的dom对象即可。<br>
调用格式：`this.$refs.你设置这个dom的变量名.dom中拥有的所有属性`<br>
组件也可以使用ref，使用方法相同
**App.vue**
```html
<template>
  <div id="app">
    <h1 ref="myh1">App根组件</h1>
    <button @click="show">打印this</button>
  <hr>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    show(){
      console.log(this);
      this.$refs.myh1.style.color="red";
    }
  },
};
</script>
```

#### this.$nextTick(回调函数)方法
等组件dom更新完成之后，再调用回调函数，保证回调函数可以操作最新的dom元素

```js
  this.$nextTick(function(){
    //当某些需要dom更新完才执行的代码，可以放到这里
  });
```
### 八、动态组件
动态切换组件的显示和隐藏<br>

#### 8.1、如何实现动态组件渲染
vue提供了一个内置的`<component>`组件，专门用来实现动态组件的渲染。<br>
步骤：<br>
1、定义一个要渲染的组件名称<br>
2、通过\<component\>内的`is`属性，动态指定要渲染的组件<br>
3、实现切换效果

```html
data(){
  return {
    comName:"Left"
  }
}
<component :is="comName"></component>

<button @click="comName='Left'">展示Left组件</button>
<button @click="comName='Right'">展示Right组件</button>
```

#### 8.2、\<keep-alive\>标签使用
当使用`<component>`来实现切换效果时，组件会创建，当切走时，组件也就被销毁。如果组件内有操作数据，当切走再切回时，当时的数据没有了。<br>
所以为了解决这个问题可以使用`<keep-alive>标签`来保持组件的状态，谁想要保持状态，就把谁放到\<keep-alive\>中
```html
<template>
  <div id="app">
    <button @click="comName = 'Left'">切换Left组件</button>
    <button @click="comName = 'Right'">切换Right组件</button>
    <!-- 渲染Left组件 或 Right组件 -->
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>
```
##### 8.2.1、keep-alive对应的生命周期函数
当组件`被缓存`时，会自动触发组件的`deactivated`生命周期函数<br>
当组件`被激活`时，会自动触发组件的`activated`生命周期函数<br>

##### 8.2.1、keep-alive提供的include属性用来指定哪个组件可以被缓存
格式：`<keep-alive include="组件注册的名字，组件注册的名字，...."`<br>
注：当值有很多个的时候，使用`,`分割<br>
```html
<!-- 指定Left组件可以被缓存 -->
<keep-alive include="Left">
  <component :is="comName"></component>
</keep-alive>
```

##### 8.2.1、keep-alive提供的exclude属性用来排除哪个组件不被缓存
格式：`<keep-alive exnclude="组件注册的名字，组件注册的名字，...."`<br>
注：<strong>include和exclude不能同时使用</strong><br>
当值有很多个的时候，使用`,`分割<br>
```html
<!-- 指定Left组件可以被缓存 -->
<keep-alive exnclude="Right">
  <component :is="comName"></component>
</keep-alive>
```

### 九、插槽
`<slot>`<br>

**注：`v-slot:插槽名称`只能使用在\<template\>标签内，其插槽名称是由\<slot\>中的`name`指定的<br>
`v-slot`也可简写为`#`<br>
插槽是vue为组件的封装者提供的能力，允许开发人员在封装组件时，把不确定、希望由用户指定的部分定义为插槽<br>

**App.vue**
```html
<template>
  <div id="app">

    <!-- 默认情况下，在使用组件的时候，提供的内容都会被填充到名字为default的插槽中，
      如果给插槽命名了，就插到指定名称下的插槽中 -->
      <Left>
        <h1 style="font-size: 14px;">这是来自App组件的内容，在App内的Left组件中使用插槽</h1>
        <div class="left-slot">  </div>
      </Left>
  </div>
</template>
```

**Left.vue**
```html
<template>
  <div id="left">
    我是Left组件
    <hr>
    <!-- 申明一个插槽区域  -->
    <!-- vue规定，每个slot都要有一个name名称，如果不写name值，那么name=”default“ -->
    <!-- <slot name="default"></slot> 与下面的<slot></slot>等价-->
    <slot ></slot>
  </div>
</template>
```

插槽的另一种写法：<br>
**App.vue**
```html
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
      <template #left-slot>
        <h1 style="font-size: 14px">
          这是来自App组件的内容，在App内的Left组件中使用插槽
        </h1>
        <div class="left-slot"></div>
      </template>
    </Left>
  </div>
</template>
```

**Left.vue**
```html
<template>
  <div id="left">
    我是Left组件
    <hr>
    <!-- 申明一个插槽区域  -->
    <!-- vue规定，每个slot都要有一个name名称，如果不写name值，那么name=”default“ -->
    <!-- <slot name="default"></slot> 与下面的<slot></slot>等价-->
    <!-- <slot ></slot> -->

    <!-- 自定义插槽名称 -->
    <slot name="left-slot"></slot>
  </div>
</template>
```

**插槽起名是还可以接收值**
例：
```html
<!-- App.vue中 -->
<Article #content="obj">
  <p>我是Article</p>
  <p>{{obj}}</p>   
  <!-- obj={"msg":"hello vue"} -->
</Article>

<!-- 插槽中的定义的属性可以被使用者，也就是App.vue拿到并且把属性封装到名为obj的对象中
    name属性是必有属性，vue不会把它封装到obj中去,这种方法也叫做“作用域插槽”
    作用域插槽这种传值方式有点像子传父
-->

<!-- Article.vue中 -->
<slot name="content" msg="hello vue" sex="男" id="1" ></slot>

```

### 九、路由
`vue-router`<br>
安装和配置vue-router步骤：<br>

1、安装vue-router
```cmd
npm i vue-router -D
```

2、项目中创建`src/router/index.js`路由模块。

**index.js**
```js
// 1、导入Vue和VueRouter包
import  Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/src/component/Home.vue";

// 2、使用Vue.use()函数，把VueRouter安装为vue的插件
Vue.use(VueRouter);

// 3、创建路由实例对象
// const router =new VueRouter({
//   routes:[
//     {path:"hash地址",component:要展示的组件}
//   ],
// });
const router=new VueRouter({
  // 如果要哪个组件实现路由跳转，就在routers内定义
  routes:[
    {path:"/home",component:Home}
  ],
})

// 4、向外暴露路由的实例对象
export default router;
```

3、在`入口文件main.js`挂载路由。
**main.js**
```js
import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

#### 9.1、\<router-view\>的使用
经过上面的vue-router的配置，在使用路由的组件中（这里使用App.vue）导入相关的组件，然后在App.vue中添加`<router-view></router-view>`，这个标签就相当于`占位符`，由`vue-router`提供的。

**App.vue**
```html
<template>
  <div id="app">
    <h1>这是App组件</h1>
    <hr>
    <a href="#/home">home</a>
    <a href="#/movie">movie</a>
    <a href="#/about">about</a>
    <router-view></router-view>
  </div>
</template>
```

#### 9.2、\<router-link\>的使用
当时安装和配置了vue-router后，就可以使用router-link来代替普通的a连接<br>

**App.vue**
```html
<template>
  <div id="app">
    <h1>这是App组件</h1>
    <hr />
    <!-- <a href="#/home">home</a>&nbsp;&nbsp;&nbsp;
      <a href="#/movie">movie</a>&nbsp;&nbsp;&nbsp;
      <a href="#/about">about</a> -->

    <!-- 当时安装和配置了vue-router后，就可以使用router-link来代替普通的a连接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/about">关于</router-link>

    <!-- 实现路由跳转，相当于一个占位符 -->
    <router-view></router-view>
  </div>
</template>
```

#### 9.3、路由重定向
路由重定向指的是在用户访问地址A的时候，强制用户跳转到地址C，从而展示特定的组件页面。<br>
通过`路由规则`的`redirect属性`，指定一个新的路由地址，可以很方便的设置路由的重定向
**router/index.js**
```js
import Home from "@/components/Home.vue";
import Movie from "@/components/Movie.vue";
import About from "@/components/About.vue";
const router=new VueRouter({
  routes:[
    // 当用户访问/时，通过redirect属性跳转到/home对应的路由规则
    {path:"/",redirect:"/home"},
    // 底下的每一项都称之为 路由规则
    {path:"/home",component:Home},
    {path:"/movie",component:Movie},
    {path:"/about",component:About}
  ],
});

```

#### 9.4、嵌套路由
使用嵌套路由，需要使用到`children属性`来声明`子路由关系`<br>

**router/index.js**
```js
// .....省略其他配置
import Tab1 from "@/components/tab/Tab1.vue";
import Tab2 from "@/components/tab/Tab2.vue";
const router=new VueRouter({
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/movie",component:Movie},
    // 添加子路由关系
    {
      path:"/about",
      component:About,
      // 重定向，当点击/about时显示tab1
      redirect:"/about/tab1",
      // 注意：子路由中的path不能使用/，
      children:[
          {path:"tab1",component:Tab1},
          {path:"tab2",component:Tab2}
      ]
      
      },
  ],
});
```

#### 9.5、动态路由匹配
**router/index.js将hash地址的可变参数定义为参数项**
```js
// 路由中的动态参数以:进行声明，当然，这个id值必填的，冒号后面的是动态参数的名称
{path:"/movie/:mid",component:Movie},
// 在动态参数后面加？表示指这个参数是可选的
{path:"/movie/:mid?",component,Movie},
```
#### 9.6、给当前路由开启props传参
开启props参数可以简写{{this.$route.params.id}}写法<br>

步骤：<br>
1、router/index.js内给对应的路由规则追加一个`props属性`，该属性值为true或false<br>

**router/index.js**
```js
{path:"/movie/:mid",component:Movie,props:true}
```

2、在对应的组件中添加`props属性`来接收路由内设置的`动态参数名`<br>

**Movie.vue**
```js
export default{
  props:["mid"],
  data(){
    return {};
  }
}
```

#### 9.7、声明式导航和编程式导航
声明式导航：<br>
  普通网页中点击`<a>链接`、vue项目中点击`<router-link>`都哦属于声明式导航<br>
编程式导航：<br>
在浏览器中调用api方法实现导航的方法叫做编程式导航，如:<br>
普通网页中调用`location.href`跳转新页面的方式，就属于编程式导航<br>

>vue-router提供了许多编程式导航的api，其中最常用的导航api为：<br>
>①this.$router.push("hash地址") 跳转到指定的hash地址并增加一条路由规则
>
>②this.$router.replace("hash地址") 跳转到指定的hash地址并替换掉当前的历史记录
>
>③this.$router.go(数值n)
>
>④this.$router.forward() 在历史记录中，前进一层
>
>⑤this.$router.back() 在历史记录中，后退一层

#### 9.8、导航守卫 控制路由的访问权限
全局前置守卫<br>
每次发生路由跳转时，都会触发前置守卫。一次在全局配置守卫中，可以对每个路由进行`访问权限`的控制。

**router/index.js**
```js
const router=new VueRouter({....});

// 调用路由实例对象的beforeEach方法，即可声明全局前置守卫
// 每次发声路由跳转的时候都会触发回调函数
router.beforeEach((to,from,next)=>{
  // to:表示将要访问的路由的信息对象
  // from:表示将要离开的路由的信息对象
  // next:是一个函数，调用next（）表示放行，允许这次路由导航


  /*   
      next()的三种调用方式：
        1、当用户拥有后台主页的访问权限，直接放行：next()
        2、当用户没有后台主页的访问权限，强制其跳转到登录页面:next("/login")
        3、当前用户没有后台主页访问权限，不允许跳转到后台主页:next(false)
  */

//  例子
 if(to.path==="/login"){
    if(localStorage.getItem("token")){
        // 有token放行
        next();
    }else{
        // 没有token跳转到home页面
        alert("你没有全限访问login页面");
        next("/home");
    }
  }else{
    next(); //访问的不是/login，都放行
  }
});
```
















