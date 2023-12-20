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
