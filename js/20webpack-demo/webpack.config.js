const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin=require("css-minimizer-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, "src/login/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./login/index.js",
        clean: true
    }, 
    module:{
        rules:[
            
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/public/login.html"), //模板文件，打包时会自动将login.html打包
            filename: path.resolve(__dirname, "dist/login/index.html"), //输出文件
        }),
        new MiniCssExtractPlugin(),
        
    ],
    optimization:{
        minimizer:[

            `...`,
            new CssMinimizerPlugin()
        ]
    }
}