import axios from "@/utils/request.js";

export const userRegisterService = ({ username, password, repassword }) => {
    return axios.post("/api/reg", { username, password, repassword });
}

export const userLoginService = ({ username, password }) => {
    return axios.post("/api/login", { username, password });
}