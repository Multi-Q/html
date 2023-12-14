import Vue from 'vue'
import App from './App.vue'

import Count from "@/components/Count.vue";
Vue.component("MyCount",Count);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
