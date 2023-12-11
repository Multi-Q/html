/* 
    nodejs默认支持commonjs标准语法
    如果使用ecmascript标准语法，在运行模块所在文件夹新建package.json文件，并设置{"type":"module"}
    
    CommonJS标准导入导出
        导出：module.export={对象格式（要导出的变量名/函数名）}
        导入：const 变量名=require("模块名路径")
    ECMAScript标准导入导出
        导出：export default{}
        导入：import 变量名 from "模块名路径" 

*/

import utils2 from "./tools/utils2.js";
import {pi} from "./tools/utils2.js";

console.log("utils2对象",utils2);
console.log(utils2.getArraySum([1,2,3,4,5]));

console.log("导入方式2-命名导入:",pi);