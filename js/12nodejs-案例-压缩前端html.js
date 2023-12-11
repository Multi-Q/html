const fs=require("fs");
const path =require("path");

fs.readFile(path.join(__dirname,"../practice/1用户登录.html"),(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("----读取成功----");
        const htmlStr=data.toString();
        const resStr=htmlStr.replace(/[\r\n]/g,"");
        fs.writeFile(path.join(__dirname,"02test-用户登录.html"),resStr,err=>{
            if(err){
                console.log(err);
            }else{
                console.log("----写入文件成功-----");
            }
        })
    }
})
