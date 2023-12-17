<template>
  <div id="right">
    right
    <hr>
    <MyCount :init="obj"></MyCount>
  </div>
</template>

<script>
export default {
    name:"Right" ,
    data(){
        return {
          obj:{
              
            }
        }
    },
    methods:{

    }
}
</script>

<style scoped lang="less">
#right{
    float: left;
    width: 500px;
    height: 500px;
    background-color: rebeccapurple;
    margin-left: 25px;
}
</style>