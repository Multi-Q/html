<template>
  <div id="left">
    左边
    <hr>
    <MyCount :init="9"></MyCount>
  </div>
</template>

<script>
export default {
    name:"Left",
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style scoped lang="less">
    #left{
        float: left;
        width: 500px;
        height: 500px;
        background-color: pink;
    }
</style>

</style>