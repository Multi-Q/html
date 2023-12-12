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

