<script setup lang="ts">
import { RouterView ,RouterLink} from 'vue-router';

import Home from './views/Home.vue';
import User from './views/User.vue';


</script>

<template>
  <ul>
    <li><RouterLink to="/home">主页</RouterLink></li>
    <li><RouterLink to="/user">用户中心</RouterLink></li>
  </ul>
  <RouterView></RouterView>
</template>

