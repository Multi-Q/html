<template>
    <div id="person">
        <p>姓名：{{ name }}</p>
        <p>年龄：{{ age }}</p>
        <p>电话：{{ tel }}</p>
    </div>
</template>

<script  lang="ts">
export default{
    name:"Person",
    data(){
        return {
            name:"张三",
            age:18,
            tel:"13818908900"
        }
    }
}
</script>

<style lang="scss" scoped>

</style>