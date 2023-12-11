const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer();


server.on("request", (req, resp) => {
    // 使用req.url获取请求资源路径，并读取02test-用户登录.html里字符串内容并返回给请求方
    console.log("req ", req.url);
    // console.log(path.join(__dirname,"02test.html"));
    if (req.url === "/02test.html") {
        fs.readFile(path.join(__dirname, "02test.html"), (err, data) => {
            if (err) {
                console.log(err);
            } else {
                resp.setHeader("Content-Type", "text/html;charset=utf-8");
                resp.end(data.toString());
            }
        })
    } else {
        resp.setHeader("Content-Type", "text/html;charset=utf-8");
        resp.end("<h1>404 你访问的资源不存在</h1>");
    }
});

server.listen(8080, function () {
    console.log("web服务启动了");
});