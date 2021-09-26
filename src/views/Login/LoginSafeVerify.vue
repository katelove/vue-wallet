<template>
    <div>
        <Title
            class="flex justify-center mt-10"
            heading="安全验证"
        />
        <div class="flex flex-col border-melancholyBlue border m-8 p-6 rounded border-shadow">
            <p class="text-yewLime text-center text-sm">
                输入谷歌验证器中6位验证码
            </p>
            <BasicInput
                type="text"
                :show-eye="false"
                class="h-8.5 mt-12 "
                placeholder="谷歌验证码"
            />
            <Button
                class="w-full h-10 mt-12"
                @click="home"
            >
                确认
            </Button>
            <h3 class="mt-6 text-bayshoreBlue text-base text-center">
                安全码丢失？
            </h3>
        </div>
    </div>
</template>

<script>
import Title from "@/components/Title.vue";
import BasicInput from "@/components/BasicInput.vue";
import Button from "@/components/Button.vue";

export default {
    name: "LoginSafeVerify",
    components: {
        Title,
        BasicInput,
        Button
    },
    methods: {
        home() {
            this.$router.push("/");
        }
    }
};
</script>

<style scoped>
.border-shadow {
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
</style>
