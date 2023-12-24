<script  lang="ts">
import Person from "@/components/Person.vue";
export default {
    name: "App",
    components:{Person},
    setup() {


    }
}
</script>

<template>
    <div id="person">
        <h1>app组件</h1>
        <Person></Person>
    </div>
</template>

<style scoped></style>
