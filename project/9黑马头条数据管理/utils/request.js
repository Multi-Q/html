// axios 公共配置


// 基地址

axios.defaults.baseURL = "http://geek.itheima.net";

// const request=axios.create({
//     baseURL:"http://geek.itheima.net",
// });

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 同意携带token字符串在请求头上
    const token = localStorage.getItem("token");
    token && (config.headers.Authorization = `Bearer ${token}`);
    // 再发请求前做些什么
    return config;
}, function (err) {
    // 对请求错误做些什么

    return Promise.reject(err);
});

axios.interceptors.response.use(function (response) {
    const res=response.data;
    return res;

    // return response;
}, function (err) {
    // 超出2xx范围的状态码都会触发该函数
    // 比如判断响应状态码为401代表身份验证失败
    if (err?.response?.status === 401) {
        alert("登录状态失效，请重新登录");
        localStorage.removeItem("token");
        location.assign("../login/index.html");
    }
    return Promise.reject(err);
});



