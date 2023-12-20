import axios from "axios";
import { useUserStore } from "@/stores/index.js";
import { ElMessage } from "element-plus";
import router from "@/router/index.js";

const request = axios.create({
    baseURL: "http://big-event-vue-api-t.itheima.net",
    timeout: 100000
});
// 请求拦截器
request.interceptors.request.use(
    config => {
        // 成功，携带token
        const userStore = useUserStore();
        if (useUserStore.token) {
            config.headers.Authorization = userStore.token;
        }
        return config;
    },
    err => {
        Promise.reject(err);
    }
);
// 响应拦截器
request.interceptors.response.use(
    res => {
        // 提取核心响应数据
        if (res.data.code === 0) {
            return res;
        }
        // 处理业务失败
        ElMessage.error(res.data.message || "服务异常");
        return Promise.reject(res.data);
    },
    err => {
        // 处理401、token过期错误
        // 错误特许情况
        if (err.response?.status === 401) {
            router.push("/login");
        }
        ElMessage.error(err.response?.data.message || "服务异常");
        return Promise.reject(err);
    }
);
export default request;