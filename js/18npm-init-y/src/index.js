const fs=require("fs");
const path=require("path");
fs.readFile(path.join(__dirname,"../02test.html",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString());
    }
}))

const dayjs=require("dayjs");
const nowDateStr=dayjs().format("YYYY-MM-DD HH:mm:ss");
console.log(nowDateStr);