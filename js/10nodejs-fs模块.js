const fs=require("fs"); //加载fs模块，fs是模块名
/* 
    写入文件

    fs对象名.writeFile("文件路径","写入内容",err=>{
        // 写入后的回调函数
    });

    注：使用readFile()会把原来写入的内容重新给覆盖掉
 */
fs.writeFile("./01text.txt","Hello,Node.js我是中国人呀",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("写入成功");
    }
});


/* 
    读写文件内容
    
    fs对象名.readFile("文件路径",(err,data)=>{
        // 读取后的回调函数
        // data是文件内容的Buffer数据流
    }) 

    
*/
fs.readFile("./01text.txt",function(err,data){
    if(err){
        console.log(err);
    }else{
        // 
        console.log(data.toString());
    }
});
