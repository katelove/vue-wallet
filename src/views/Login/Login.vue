<template>
    <div class="flex justify-center mt-10 flex-col m-auto">
        <Title
            class="flex justify-center mb-6"
            heading="欢迎登录测试钱包"
        />
        <Confirm
            @onConfirm="$router.push('/')"
            @onCancel="alert('12323')"
        >
            got home
        </Confirm>
        <BlueContainer class="ml-8 mr-8">
            <div class="p-6">
                <BasicInput
                    v-model="actName"
                    :show-eye="false"
                    class="w-full"
                    type="text"
                    placeholder=" 手机/信箱/用户名"
                />
                <BasicInput
                    v-model="actPwd"
                    :show-eye="false"
                    class="w-full mt-6"
                    type="password"
                    placeholder=" 密码"
                />
                <Button
                    class="w-full h-10 mt-6"
                    @click="login"
                >
                    登录
                </Button>
                <div class="flex justify-between mt-6">
                    <p class="text-yewLime">
                        没有帐号？<span class="text-melancholyBlue"><router-link to="/register">注册</router-link></span>
                    </p>
                    <p class="text-melancholyBlue">
                        <router-link to="/reset">
                            忘记密码？
                        </router-link>
                    </p>
                </div>
            </div>
        </BlueContainer>
    </div>
</template>

<script>
import Title from "@/components/Title.vue";
import BlueContainer from "@/components/BlueContainer.vue";
import BasicInput from "@/components/BasicInput.vue";
import Button from "@/components/Button.vue";
import Confirm from "@/components/Confirm.vue";

export default {
    name: "Login",
    components: {
        Title,
        BlueContainer,
        BasicInput,
        Button,
        Confirm
    },
    data() {
        return {
            actName: "",
            actPwd: ""
        };
    },
    methods: {
        login() {
            if (this.actName === "00001" || this.actName === "00002") {
                localStorage.setItem("user_id", this.actName);
                this.$router.push("/login/verify/safeVerify");
            } else {
                // eslint-disable-next-line no-alert
                alert("帳號請輸入 00001 或 00002");
            }
        }
    }
};
</script>
