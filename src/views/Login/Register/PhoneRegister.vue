<template>
    <div class="flex justify-center flex-col  m-auto ">
        <div class="border-melancholyBlue border mr-8 ml-8 rounded border-shadow">
            <div class="p-6">
                <div class="mt-4 flex self-start">
                    <select class="select-border">
                        <option
                            value="+886"
                            class="text-center"
                        >
                            +886
                        </option>
                    </select>
                    <BasicInput
                        type="number"
                        :show-eye="false"
                        placeholder="  手机号码"
                    />
                </div>
                <BasicInput
                    class="mt-7"
                    type="password"
                    :show-eye="false"
                    placeholder="  设置密码"
                />
                <BasicInput
                    class="mt-7"
                    type="password"
                    :show-eye="false"
                    placeholder="  确认密码"
                />
                <div class="flex justify-start items-center mt-7">
                    <BasicInput type="checkbox" />
                    <p class="text-sm text-garyWord ml-1">
                        我已阅读并同意<span class="text-melancholyBlue">《用户协议》</span>和<span
                            class="text-melancholyBlue"
                        >《隐私条款》</span>
                    </p>
                </div>
                <router-link :to="'/register/verify/phone'">
                    <Button
                        class="w-full mt-12 h-10"
                        @click="register"
                    >
                        注冊
                    </Button>
                </router-link>
                <p class="text-sm mt-6 text-garyWord">
                    已有帐号?<span class="text-melancholyBlue"><router-link to="/login">登录</router-link></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import BasicInput from "@/components/BasicInput.vue";
import Button from "@/components/Button.vue";

export default {
    name: "PhoneRegister",
    components: {
        BasicInput,
        Button
    },
    methods: {
        register() {
            localStorage.setItem("user_id", "00001");
        }
    }
};
</script>

<style scoped>
.border-shadow {
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}

.select-border {
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    width: 78px;
    height: 33px;
    margin-right: 21px;
    background: white;
}
</style>
