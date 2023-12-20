enum Direction{
    TOP=1,
    DOWN,
    LEFT,
    RIGHT
}
// 枚举的值还可以是字符串类型，字符串没有自增长的值，必须给字符串枚举添加初始值
enum Direction1{
    TOP="Top",
    DOWN="Down",
    LEFT="Left",
    RIGHT="Right"
}

console.log(Direction.LEFT);
console.log(Direction1.TOP);
