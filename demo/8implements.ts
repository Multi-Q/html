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
