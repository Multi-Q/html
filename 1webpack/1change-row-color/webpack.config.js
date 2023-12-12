const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");



module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.js"), //打包入口文件路径
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, "./dist"), //输出文件的存放路径
        filename: "bundles.js", //输出文件的名称
        clean: true, //每次打包都会先清除内容再写入
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",//指定原文件存放路径
            filename: "./index.html", //指定生成的文件的存放路径
        }),
        new MiniCssExtractPlugin(),

    ],
    optimization: {
        // 在开发模式下启用压缩css插件
        minimize: true,
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            `...`,
            new CssMinimizerPlugin(),

        ]
    }
}