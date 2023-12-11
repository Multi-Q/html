const baseURL="http://hmajax.itheima.net";
const getArraySum=arr=>arr.reduce((sum,item)=>sum+=item,0);

// 导出方式2-命名导出 使用这个方式需要再导入时与这个导出的变量/方法名相同
export const pi=3.1415926;

// 导出方式1
export default{
    baseURL:baseURL,
    getArraySum:getArraySum
}