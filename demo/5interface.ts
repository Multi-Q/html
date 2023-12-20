interface Point{
    x:number,
    y:number,
}

function getCoord(pt:Point){
    console.log(pt.x,pt.y);
}
getCoord({x:12,y:21});


// 继承
interface Animal{
    name:string
}

interface Bear extends Animal{
    honey:boolean
}

const bear:Bear={
    name:"winie",
    honey:true
}
console.log(bear.name,bear.honey);
