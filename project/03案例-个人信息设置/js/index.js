/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
axios({
    url: "http://hmajax.itheima.net/api/settings",
    params: {
        creator: "播仔",

    }
}).then(res => {
    console.log(res.data);
    const userObj = res.data.data;
    // 回显数据到标签
    Object.keys(userObj).forEach(key => {
        if (key === "avatar") {
            document.querySelector(".prew").src = userObj[key];
        } else if (key === "gender") {
            console.log(1);
            const radioList = document.querySelectorAll(".gender");
            // 0->男 1->女
            // 通过性别数字，作为下标，找到对应性别单选框，设置选中状态
            radioList[userObj[key]].checked = true;
        } else {
            document.querySelector(`.${key}`).value = userObj[key];
        }
    });
}).catch(err => {

});

/**
 * 上传图片
 */
document.querySelector(".upload").addEventListener("change", e => {
    const fd = new FormData();
    fd.append("avatar", e.target.files[0]);
    fd.append("creator", "播仔");
    axios({
        url: "http://hmajax.itheima.net/api/avatar",
        method: "put",
        data: fd
    }).then(res => {
        const imgURL = res.data.data.avatar;
        document.querySelector(".prew").src = imgURL;
    })

});
/**
 * 提交修改信息
 */
document.querySelector(".submit").addEventListener("click", e => {
    const formData = document.querySelector(".user-form");
    const userObj = serialize(formData, { hash: true, empty: true });
    // console.log(userObj);
    userObj.gender = +userObj.gender;
    userObj.creator="播仔";
    axios({
        url: "http://hmajax.itheima.net/api/settings",
        method: "put",
        data: userObj
    }).then(res => {
        const toastDom=document.querySelector(".my-toast");
        const toast=new bootstrap.Toast(toastDom);
        toast.show();
        console.log("修改基本信息", res.data);
    });
});
