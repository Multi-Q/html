function printCoord(pt) {
    console.log("x的坐标为：" + pt.x);
    console.log("y的坐标为：" + pt.y);
}
printCoord({ x: 2, y: 4 });
function printName(obj) {
    console.log(obj.first, obj.last ? obj.last : "");
}
printName({ first: "zhangsan" });
printName({ first: "zhangsan", last: "123" });
