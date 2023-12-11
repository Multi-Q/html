const fs=require("fs");
const path=require("path")

// __dirname 内置变量 用来获取当前模块目录的绝对路径
fs.readFile(path.join(__dirname,"01text.txt"),(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("-----读取成功----");
        console.log("__dirname",__dirname);
        console.log(data.toString());
    }
})