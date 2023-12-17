import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
    // 声明数据state
    const count = ref(102);
    const msg = ref("hello pinia");

    // 声明操作数据的方法 action
    function addCount() { return count.value++; }
    function subCount() { return count.value--; }
    // 声明基于数据派生的计算属性getters
    const double = computed(() => count.value * 2);
    return {
        count, msg, addCount, subCount,double
    }
});