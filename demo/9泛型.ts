function getValue<T>(value:T):T{
    return value;
}

console.log(getValue<number>(12));
console.log(getValue<string>("a"));


class P<T,V>{
    name:T;
    constructor(name:T){
        this.name=name;
    }

   
}
const pp=new P<string,number>("张三");
