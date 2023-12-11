const http = require("http"); //1、加载http模块
const server = http.createServer(); //2、创建web服务对象

server.on("request", (req, resp) => {
    //3、设置响应头：内容类型，普通文本，编码格式
    resp.setHeader("Content-Type", "text/plain;charset=utf-8");
    // 4、设置响应体内容，结束本次请求与响应
    resp.end("欢迎使用http模块");
});
// 5、配置端口号并启动web服务
server.listen(3000, () => {
    console.log("web服务启动成功了");
})