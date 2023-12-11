const path=require("path");
module.exports={
    entry:path.resolve(__dirname,"src/login/index.js"),
    output:{
        path:path.resolve(__dirname,"dist"), //导出文件所在的路径
        filename:"./login/index.js" //出口文件名，可以包含路径
    }
}