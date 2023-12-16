<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="back">
      后退
    </button>
    <h4 class="text-center">用户详情--{{ this.$route.params.id }}</h4>
  </div>
</template>

<script>
export default {
  name: "MyUserDetail",
  data() {
    return {};
  },
  methods: {
    back(){
      this.$router.back();
    }
  },
};
</script>

<style lang="less" scoped></style>
