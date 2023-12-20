# 开启TypeScript学习之路

## 一、解决ts和js冲突问题
当我们编译一次.ts文件后，如果在进行编译就会报错，那么有没有能够在不删除原编译文件还能继续编译呢？<br>
答案肯定是有的<br>
在项目终端输入`tsc --init`生成配置文件，能解决ts文件重复编译的问题<br>
终端输入`tsc --watch`自动编译

## 二、显示类型
给变量添加数据类型，在变量后面以`:数据类型`添加数据类型<br>
```ts
const age:number=19;
function greet(person:string,date:Date){
    console.log(`Hello ${person},today is ${date}`);
}
```

## 三、降级编译
如果想把高版本的ts文件放到低版本的浏览器中运行，需要再`tsconfig.json`中修改`"target":"es2016"`的值<br>
```json
"target": "es2016",   
```

### 四、严格模式
`tsconfig.json`中修改
```json
"strict": true,       /* Enable all strict type-checking options. */
    "noImplicitAny": true,     /* 允许报告any类型变量或表达式的类型 */
    "strictNullChecks": true,   /* 当类型是 'null' 或 'undefined'时提示*/
```

### 五、ts常用类型
对于数据类型，我们一般使用小写的`数据类型`
>string 字符串类型<br>
>number 数值类型<br>
>boolean 布尔类型<br>
>数组类型，写法一：数据类型[] 写法二：Array<数据类型><br>
>any类型 <br>

### 六、函数返回值类型写法
函数的返回值类型写法函数`()右边`
```ts
function setName(name:string):void{
    this.name=name;
}
function getName():string{
    return this.name;
}
```

### 七、可选操作符？
在变量后面添加一个`?`表示这个变量在赋值时可以不赋值
```ts
function printName(obj: { first: string, last?: string }) {
    console.log(obj.first + " " + obj.last ? obj.last : "");
}
printName({first:"zhangsan"});
```

### 八、联合类型
变量由`两个或多个类型组成`用`|`分隔开，用来表示这个变量可以接受这些类型的数据
```ts
function printId(id:number|string){
    console.log("id="+id);
}

printId(12);
printId("联合类型");
```

### 九、参数默认值
在函数的参数中给变量添加默认值，当调用函数不传形参值时，默认值就会生效，使用位置与js一致，在形参名后面添加`=值`
```ts
function printId(id:number|string=0){
    console.log("id="+id);
}

printId(12);
printId("联合类型");
printId();

```

### 十、通过interface定义数据类型
接口定义的是`数据类型`<br>
数据类型是可以`继承的`<br>

### 十一、枚举
枚举有数字型枚举和字符串枚举<br>
数值型枚举有数值自增，而字符串枚举没有数值自增，必须给枚举添加值
```ts
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
```

### 十二、typeof上下文检查
```ts
// typeof只能用来查询变量或属性类型，无法查询其他形式的类型，如函数的调用
let p={x:1,y:2};
function formatPoint(point: typeof p){

}
formatPoint(p)
```

### 十三、class类
语法与Java一样<br>
对于类内的属性，如果不给声明的属性添加`默认值`，那就必须给类添加`构造器constructor`用来给该属性赋值。<br>
如果属性没有声明是`public`还是`private`，默认是`public`，也就是说外界能直接通过`.`的形式访问到内部成员变量，使用`private`修饰的变量则不会被访问到<br>
`protected`修饰的变量也不能直接访问到，但可以被其子类使用<br>
```ts
class Person {
    age: number;
    private sex = "男";
    protected money: number;

    constructor(age: number, money: number) {
        this.age = age;
        this.money = money;
    }

    public setSex(sex: string): void {
        this.sex = sex;
    }
    public getSex():string{
        return this.sex;
    }
}

// 创建实例对象
const p = new Person(18, 1234.00);
p.setSex("女");
console.log(p);

// console.log(p.sex); //属性“sex”为私有属性，只能在类“Person”中访问
// console.log(p.money);//属性“money”受保护，只能在类“Person”及其子类中访问

class Man extends Person{
  
    super(age:number,money:number){
        this.age=age;
        this.money=money;
    }
    
}

const man=new Man(21,9999.00);
console.log(man);

```

### 十四、接口实现
```ts
interface Single{
    age:string;
     sing():void;
}

class MyPerson implements Single{
    public age:string="12";
    public sing():void{
        console.log("我唱歌");
        
    }
}
const p1=new MyPerson();
console.log(p1);
p1.sing();

```

### 十六、泛型
与Java一样，在函数名后面括号前面加`<>`
```ts
function getValue<T>(value:T):T{
    return value;
}
console.log(getValue<number>(10));
console.log(getValue<string>("a"));
```



