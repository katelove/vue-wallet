<template>
    <div class="flex justify-center mt-2 flex-col m-auto">
        <Title class="flex justify-center">
            绑定谷歌验证
        </Title>
        <BlueContainer
            title=""
            class="ml-8 mr-8 mt-10"
        >
            <div class="pr-6 pl-6 pt-5 pb-5">
                <p class="text-left text-base">
                    手机验证码
                </p>
                <div class="relative">
                    <BasicInput
                        type="text"
                        class="mt-8"
                        :show-eye="false"
                        placeholder=" 请输入手机验证码"
                    />
                    <Button class="h-8 absolute right-0 top-0 rounded-5px p-1.5 ">
                        获取验证码
                    </Button>
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <p class="text-left text-base">
                    信箱验证码
                </p>
                <div class="relative">
                    <BasicInput
                        type="text"
                        class="mt-8"
                        :show-eye="false"
                        placeholder=" 请输入信箱验整码"
                    />
                    <Button class="h-8 absolute right-0 top-0 rounded-5px p-1.5 ">
                        获取验证码
                    </Button>
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <p class="text-left text-base">
                    谷歌验证码
                </p>
                <BasicInput
                    type="text"
                    class="mt-8"
                    :show-eye="false"
                    placeholder=" 请输入谷歌验整码"
                />
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

export default {
    name: "BindSecondGoogle",
    components: {
        Title,
        BlueContainer,
        Button,
        BasicInput
    },
    methods: {
        home() {
            this.$router.push("/");
        }
    }
};
</script>

<style>
.border-line {
    border-bottom: 1px solid #b0b0b0;
}
</style>
