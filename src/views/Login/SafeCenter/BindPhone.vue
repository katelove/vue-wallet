<template>
    <div class="flex justify-center mt-2 flex-col m-auto">
        <Title class="flex justify-center">
            绑定手机
        </Title>
        <BlueContainer
            title=""
            class="ml-8 mr-8 mt-10"
        >
            <div class="pr-6 pl-6 pt-5 pb-5">
                <p class="text-left text-base">
                    绑定手机
                </p>
                <div class="mt-8 flex self-start">
                    <select class="select-border text-yewLime w-16">
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
                        placeholder=" 請輸入手機號碼"
                    />
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <p class="text-left text-base">
                    验证码
                </p>
                <div class="relative">
                    <BasicInput
                        type="text"
                        :show-eye="false"
                        class="mt-8"
                        placeholder="请输入验整码"
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

export default {
    name: "BindPhone",
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
