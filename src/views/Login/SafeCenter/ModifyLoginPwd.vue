<template>
    <div class="flex justify-center mt-2 flex-col m-auto">
        <Title
            class="flex justify-center"
            :heading="$route.params.type === 'modifyPwd' ? '修改登录密码' : '修改二次验证密码'"
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
                    <BasicInput
                        v-if="$route.params.type === 'modifyPwd'"
                        type="password"
                        :show-eye="true"
                        class="mt-7"
                        placeholder=" 请输入当前登录密码"
                    />
                    <BasicInput
                        v-if="$route.params.type === 'secondPwd'"
                        type="password"
                        :show-eye="true"
                        class="mt-7"
                        placeholder=" 请输入当前二次验证密码"
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
                <BasicInput
                    v-if="$route.params.type === 'modifyPwd'"
                    type="password"
                    :show-eye="true"
                    class="mt-7"
                    placeholder=" 请输入新登录密码"
                />
                <BasicInput
                    v-if="$route.params.type === 'secondPwd'"
                    type="password"
                    :show-eye="true"
                    class="mt-7"
                    placeholder=" 请输入新二次验证密码"
                />
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <SmallTitle>
                    确认登录密码
                </SmallTitle>
                <div class="relative">
                    <BasicInput
                        type="password"
                        :show-eye="true"
                        class="mt-7"
                        placeholder=" 请再次输入新登录密码"
                    />
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <SmallTitle>
                    手机验证码
                </SmallTitle>
                <div class="relative">
                    <BasicInput
                        type="text"
                        class="mt-7"
                        placeholder=" 请输入手机验证码"
                    />
                    <Button class="h-8 absolute right-0 top-0 rounded-5px p-1.5 ">
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
import BasicInput from "@/components/BasicInput.vue";
import SmallTitle from "@/components/SmallTitle.vue";

export default {
    name: "ModifyLoginPwd",
    components: {
        Title,
        BlueContainer,
        Button,
        SmallTitle,
        BasicInput
    },
    methods: {
        home() {
            this.$router.push("/");
        }
    }
};
</script>
