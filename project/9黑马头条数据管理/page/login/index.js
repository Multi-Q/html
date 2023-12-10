/**
 * 目标1：验证码登录
 * 1.1 在 utils/request.js 配置 axios 请求基地址
 * 1.2 收集手机号和验证码数据
 * 1.3 基于 axios 调用验证码登录接口
 * 1.4 使用 Bootstrap 的 Alert 警告框反馈结果给用户
 */

document.querySelector(".btn").addEventListener("click", e => {
    const loginForm = document.querySelector(".login-form");
    const formData = serialize(loginForm, { hash: true, empty: true });
    console.log(formData);
    axios({
        url:  "/v1_0/authorizations",
        method: "post",
        data: formData
    }).then(res => {
        myAlert(true, "登陆成功");
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
            location.assign("../content/index.html");
        }, 1000);
        console.log(res);
    }).catch(err => {
        console.dir(err)
        myAlert(false, err.message || "登陆失败");
    });
});
