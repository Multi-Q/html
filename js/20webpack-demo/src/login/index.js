import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import {checkPhone,checkCode} from "../util/check.js";

document.querySelector(".btn").addEventListener("click",()=>{
    const phone=document.querySelector(".login-form [name=mobile").value;
    const code=document.querySelector(".login-form [name=code").value;
    if(!checkPhone(phone)){
        console.log("手机号长度必须是11位");
        return ;
    }
    if(!checkCode(code)){
        console.log("验证码长度必须是6位");
        return ;
    }
    console.log("提交到服务器登录...");
})