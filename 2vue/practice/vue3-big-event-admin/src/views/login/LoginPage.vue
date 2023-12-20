<template>
    <el-row class="login-page">
        <el-col :span="12" class="bg"></el-col>
        <el-col :span="6" :offset="3" class="form">
            <!-- 注册表单 -->
            <!-- 
                :rules绑定的是rules规则对象
                :ruleForm绑定整个form的数据对象
                表单元素 v-model="ruleForm.xxx" 给表单元素绑定form的子属性
                prop配置生效的是那个校验规则,火绒rules的属性相对应
             -->

            <el-form ref="form" :model="formModel" :rules="rules" size="large" autocomplete="off" v-if="isRegister">
                <el-form-item>
                    <h1>注册</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input v-model="formModel.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formModel.password" :prefix-icon="Lock" type="password"
                        placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="repassword">
                    <el-input v-model="formModel.repassword" :prefix-icon="Lock" type="password"
                        placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%;letter-spacing:5px" @click="register">注册</el-button>
                </el-form-item>
                <el-form-item>
                    <el-link type="info" :underline="false" :icon="Back" @click="changStatus">去登录</el-link>
                </el-form-item>
            </el-form>
            <!-- 登录表单 -->
            <el-form ref="form" :model="formModel" :rules="rules" size="large" autocomplete="off" v-else>
                <el-form-item>
                    <h1>登录</h1>
                </el-form-item>
                <el-form-item prop="username">
                    <el-input v-model="formModel.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formModel.password" name="password" :prefix-icon="Lock" type="password"
                        placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item class="flex">
                    <el-checkbox>记住我</el-checkbox>
                    <el-link type="primary" :undexline="false">忘记密码？</el-link>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%;letter-spacing:5px" @click="login">登录</el-button>
                </el-form-item>
                <el-form-item>
                    <el-link type="info" :underline="false" @click="changStatus">去注册</el-link>
                    <el-link type="info" :underline="false" :icon="Right"></el-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { defineOptions, ref, watch } from "vue";
import { User, Lock, Right, Back } from "@element-plus/icons-vue";
import { userRegisterService, userLoginService } from "@/api/user.js";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores";



const userStore = useUserStore();
const router = useRouter();
defineOptions({ name: "LoginPage" });
const isRegister = ref(false);
const form = ref(null);

const register = async () => {
    try {
        await form.value.validate();
        await userRegisterService(formModel.value);
        ElMessage.success("注册成功");
        isRegister.value = false;
    } catch (err) {
        ElMessage.error("注册失败");
    }
}
const login = async () => {
    await form.value.validate();
    const res = await userLoginService(formModel.value);
    userStore.setToken(res.data.token);
    ElMessage.success("登陆成功");
    router.push("/");
}

watch(isRegister, () => {
    formModel.value = {
        username: "",
        password: "",
        repassword: ""
    }
});
// 注册
const formModel = ref({
    username: "",
    password: "",
    repassword: ""
});
// 表单校验规则
const rules = {
    username: [
        { required: true, message: "请输入用户名", trigger: 'blur' },
        { min: 5, max: 10, message: "用户名必须是5-10个字符", trigger: "blur" }
    ],
    password: [
        { pattern: /^\S{6,15}$/, message: "密码必须是6-15位非空字符", trigger: "blur" },
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
    repassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { pattern: /^\S{6,15}$/, message: "密码必须是6-15位非空字符", trigger: "blur" },
        // rule当前校验规则相关的信息
        // value所教演的表单元素的表单值
        // callback无论成功或失败都要callback，
        {
            validator: (rule, value, callback) => {
                // 判断value和收集的password是否一致
                if (value !== formModel.value.password) {
                    callback(new Error("两次输入密码不一致"));
                } else {
                    callback();//校验成功，callback
                }
            }, trigger: "blur"
        },
    ],
};
function changStatus() {
    isRegister.value = !isRegister.value;
}





</script>

<style lang="scss" scoped>
.login-page {
    height: 100vh;
    background-color: #fff;

    .bg {
        background: url("@/assets/logo2.png") no-repeat 60% center / 240px auto,
            url("@/assets/login_bg.jpg") no-repeat center / cover;
        border-radius: 0 20px 20px 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

}
</style>