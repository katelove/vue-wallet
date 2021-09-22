<template>
    <div class="flex justify-center mt-2 flex-col m-auto">
        <Title
            class="flex justify-center"
            :heading="
                $route.params.type === 'modifyPwd' ? '修改登录密码' : '修改二次验证密码'
            "
        />
        <BlueContainer
            title=""
            class="ml-8 mr-8 mt-10"
        >
            <div class="pr-6 pl-6 pt-5 pb-5">
                <SmallTitle v-if="$route.params.type === 'modifyPwd'">
                    当前登录密码
                </SmallTitle>
                <SmallTitle v-if="$route.params.type === 'secondPwd'">
                    当前二次验证密码
                </SmallTitle>
                <div class="relative">
                    <Input
                        v-if="$route.params.type === 'modifyPwd'"
                        id="loginPwd"
                        type="password"
                        :show-eye="true"
                        class="w-full border-none border-line  mt-7"
                        placeholder="请输入当前登录密码"
                    />
                    <Input
                        v-if="$route.params.type === 'secondPwd'"
                        id="loginPwd"
                        :type="loginPwd ? 'password': 'text'"
                        class="w-full border-none border-line mt-7"
                        placeholder="请输入当前二次验证密码"
                    />
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <SmallTitle v-if="$route.params.type === 'modifyPwd'">
                    新登录密码
                </SmallTitle>
                <SmallTitle v-if="$route.params.type === 'secondPwd'">
                    新二次验证密码
                </SmallTitle>
                <div class="relative">
                    <Input
                        v-if="$route.params.type === 'modifyPwd'"
                        type="password"
                        class="w-full border-none border-line mt-8"
                        placeholder="请输入新登录密码"
                    />
                    <Input
                        v-if="$route.params.type === 'secondPwd'"
                        type="password"
                        class="w-full border-none border-line mt-8"
                        placeholder="请输入新二次验证密码"
                    />
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <SmallTitle>
                    确认登录密码
                </SmallTitle>
                <div class="relative">
                    <Input
                        type="password"
                        class="w-full border-none border-line  mt-8"
                        placeholder="请再次输入新登录密码"
                    />
                    <img
                        class="absolute right-0 top-6"
                        src="@/assets/icon/eye.png"
                    >
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <SmallTitle>
                    手机验证码
                </SmallTitle>
                <div class="relative">
                    <Input
                        type="text"
                        class="w-full border-none border-line  mt-8"
                        placeholder="请输入手机验证码"
                    />
                    <Button class="h-8 absolute right-2 bottom-2 rounded-5px p-1.5 ">
                        获取验证码
                    </Button>
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="p-6">
                <Button
                    class="w-full h-10"
                    rounded="rounded-10px"
                    @click="home"
                >
                    提交
                </Button>
            </div>
        </BlueContainer>
    </div>
</template>

<script>
import Title from "@/components/Title.vue";
import BlueContainer from "@/components/BlueContainer.vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import SmallTitle from "@/components/SmallTitle.vue";

export default {
    name: "ModifyLoginPwd",
    components: {
        Title,
        BlueContainer,
        Button,
        SmallTitle,
        Input
    },
    data() {
        return {
            pic: require("@/assets/icon/eye.png"),
            loginPwd: false,
            newPwd: false,
            checkPwd: false,
        };
    },
    methods: {
        home() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
.border-line {
  border-bottom: 1px solid #b0b0b0;
}
</style>
