# node.js入门学习
## 1、内置文件模块fs，用来读取文件
```js
const fs=require("fs");//加载模块
/*
  常用的两个方法
    写文件
    fs.readFile("文件所在的路径",function(err,data){
      //data存储了该文件的内容
    })
    读文件
    fs.writeFile("文件所在的路径","要写入该文件的内容",function(err){

    })
*/
// 注意writeFile()重复执行会把原来文件的内容重新覆盖掉
fs.writeFile("./01test.txt","Hello Nodejs,我来了",err=>{
  if(err){console.log(err);}
  else{console.log("写入成功");}
});

fs.readFile("./01test.txt",(err,data)=>{
  if(err){console.log(err)}
  else{
    console.log(data.toString());
  }
});

```
## 2、内置路径模块path，用来管理路径
```js
const fs=require("fs");
const path=require("path");
// __dirname是nodejs内置的属性，专门用来获取当前项目所在路径的
fs.writeFile(path.join(__dirname+"01test.txt"),"你好，世界",err=>{
  if(err)console.log(err);
  else console.log("写入成功");
});

fs.readFile(path.join(__dirname,"01test.txt"),(err,data)=>{
  if(err)console.log(err);
  else console.log(data.toString());
});

```
## 3、内置http模块，用来创建web服务对象
```js
  const http=require("http"); 
  const server=http.createServer(); //创建web对象

  server.on("request",(request,response)=>{
    response.setHeader("Conten-Type","text/plain;charset=utf-8"); //设置响应编码
    response.end("<h1>hi~</h1>"); //利用这个方法返回相应数据，该方法可以解析html标签
  });

// 开启web容器，3000是端口号，端口号可以自定义
  server.listen(3000,()=>{
    console.log("创建web服务成功");
  })

```
## nodejs默认的导入导出
> nodejs默认导入导出采用CommonJS的格式<br>
  >>   导入：const 变量名=require("带入的模块")<br>
  >>   导出：module.exports={要导出的变量或方法名，格式采用对象写法}<br><br>
>
>如果想用ESCMAScript格式，那就需要创建一个package.json，在package.json中添加`"type":"module"`代表使用ESCMAScript导入导出语法格式<br>
>>导出-命名导出：export const 变量名/函数名=值/函数  （这种格式通常用于按需导入）<br>
>>导入-命名导入（搭配命名导出方式）：import {Button} from "./button.js";  //这种方式的导入{}内的变量名需要与button.js暴露出的变量名保持一致<br>
>>导出：export default{ 要导出的变量/函数}<br>
>>导入:import 变量名 from "模块所在路径";


# package.json 初始化

> npm init -y

使用指令后项目根路径会自动生成package.json和package-lock.json

自动生成的package.json内容：

```json
{
  "name": "19webpack", //项目包名
  "version": "1.0.0", //项目版本号
  "description": "", //对项目的描述
  "main": "index.js", //项目的入口文件
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "", //作者
  "license": "ISC", //证书
}
```

# 使用webpack打包工具
使用webpack打包工具需要使用安装其相应的的npm包：
> webpack 和 webpack-cli
指令：
```cmd
npm i webpack webpack-cli --save-dev  #如果要同时装多个包依赖，只需空格然后后面继续写要装的依赖包名即可,--save-dev表示将包安装在"devDependencies"中
```
如下示：
```json
//.....
 "devDependencies": {
    "dayjs": "^1.11.10",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  }
```
<span style="color:red;font-weight=bold;">注意：</span>使用webpack项目中必须有`src文件夹`和`入口文件index.js` <span style="color:grey;">(入口文件index.js默认在src的子级目录下)</span>，没有会报错 
<br>
使用webpack打包需要在package.json中的"script"中自定义一个属性，叫`"build":"webpack"`。如下示：

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" ,
    "build":"webpack"
  }

```

最后使用使用指令打包,要进到该项目的目录下使用这个命令
```cmd
npm run build
```
结果如下，（警告不用管，没有error就行）
```cmd

E:\VSCode_Projects\html\es6\js\19webpack>npm run build

> 19webpack@1.0.0 build
> webpack

asset main.js 55 bytes [emitted] [minimized] (name: main)
orphan modules 111 bytes [orphan] 1 module
./src/index.js + 1 modules 282 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.89.0 compiled with 1 warning in 339 ms
```
### 修改webpack的入口和出口
修改webpack的入口和出口需要再`项目下`创建一个`webpack.config.js`文件，然后就可以在里面修改入口和出口，及其他配置项了
```js
const path=require("path");
module.exports={
    entry:path.resolve(__dirname,"src/login/index.js"),
    output:{
        path:path.resolve(__dirname,"dist"), //导出文件所在的路径
        filename:"./login/index.js", //出口文件名，可以包含路径
        clean:true, //生成打包内容后自动清空原打包内容
    }
}
```
### 使用webpack插件-HtmlWebpackPlugin
npm安装html-webpack-plugin
```cmd
npm install --save-dev html-webpack-plugin
```
然后再webpack.config.js内设置
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:path.resolve(__dirname,"src/login/index.js"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"./login/index.js",
        clean:true
    },
  plugins: [new HtmlWebpackPlugin({
       template: path.resolve(__dirname, "public/login.html"), //模板文件，打包时会自动将login.html打包
            filename: path.resolve(__dirname, "dist/login/index.html"), //输出文件
  })],
};
```
### 使用webpack打包css、less
<span style="color:red;">webpack默认只识别js代码，不识别css、less等其他，所以需要另外安装相应的解析器</span>

打包css代码：<br>
<ul>
  <li> 1、安装css-loader，解析css代码</li>
  <li>2、安装style-loader，把解析后的css代码插入到dom</li>
</ul>
less也是这个流程

安装步骤：
1、安装css-loader
```cms
npm i css-loader style-loader --save-dev
```
2、然后将loader引用到webpack配置中，如下<br>
<span style="font-weight:bolder;">入口文件index.js</span>
```js
  import  "./index.css";
```
<span style="font-weight:bolder;">webpack.config.js</span>
```js
//.....
module.exports={
  module:{
    rules:[
      test:/\.css/i,
      use:["style-loader","css-loader"]
    ]
  },
  //...

}
```
### 优化-提取css代码
这就要用到`mini-css-extract-plugin插件`提取css代码
> 注意：mini-css-extract-plugin插件不能与style-loader同时存在

所以使用这个插件前先把`style-loader`卸载掉
```cmd
npm uni style-loader
```
引入mini-css-extract-plugin
```cmd
npm i mini-css-extract-plugin --save-dev
```
在webpack.config.js中配置
```js
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
module.exports={
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:[
          MiniCssExtractPlugin.loader,"css-loader"
        ]
      }
    ]
  },
  plugins:[].concat(devMode?[]:[new MiniCssExtractPlugin()])
}
```
### 生产模式压缩css css-minimizer-webpack-plugin
<span style="font-weight:bolder;">webpack.config.js</span>
```js
const CssMinimizerPlugin=require("css-minimizer-webpack-plugin");
module.exports={
  plugins:[
    new MiniCssExtractPlugin(),
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,"css-loader"],
      }
    ]
  },
  optimization:{
    minimizer:[
      //webpack5中使用`...`语法来扩展现有的minimizer，保证原来的js还能被压缩处理
      `...`,
      new CssMinimizerPlugin(),
    ]
  }
}


