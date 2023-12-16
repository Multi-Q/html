<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed />

    <!-- <van-pull-refresh>
      <van-list>
        <ArticleItem></ArticleItem>
      </van-list>
    </van-pull-refresh> -->
  </div>
</template>

<script>

import {getArticleListAPI} from "@/api/articleAPI.js";


export default {
  name: "Home",
  components: {},
  data() {
    return {
      page: 1,
      limit: 10,
      artList:[]
    };
  },
  methods: {
    // 获取文章列表数据
    async getArticleList() {
      try {
        const { data: res } = await getArticleListAPI(this.page,this.limit);
        this.artList=res;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getArticleList();
  },
};
</script>

<style lang="less" scoped>
.home-container {
  padding-top: 46px;
  padding-bottom: 50px;
  .van-nav-bar {
    background-color: #007bff;
    color: white;
  }
  /deep/ .van-nav-bar__title {
    color: white;
    font-weight: bolder;
  }
}
</style>
