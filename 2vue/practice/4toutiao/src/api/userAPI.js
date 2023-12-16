import axios from "@/utils/request.js";

export const getUserInfoAPI = function () {
    return axios.get("/user");
}