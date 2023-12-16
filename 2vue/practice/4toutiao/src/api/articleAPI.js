import axios from "@/utils/request.js";
// 文章相关的api
export const getArticleListAPI = function (_page,_limit) {
    return axios.get("/articles", {
        params: {
            _page,
            _limit
        },
    });
}