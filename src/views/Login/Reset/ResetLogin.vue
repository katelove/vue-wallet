<template>
    <div
        class="flex flex-col p-6 mr-8 ml-8 mt-103px border border-melancholyBlue rounded shadow-normal"
    >
        <h3 class="text-25px">
            重置登录密码
        </h3>
        <div class="h-[22px] p-4px mt-3.5">
            <p class="text-wordBlue text-14px bg-skyBlue">
                重置登录密码后，24小时内禁止提币和OTC
            </p>
        </div>
        <Input
            placeholder="帐号"
            type="text"
            class="pl-2px mt-8"
        />
        <Button
            bg="bg-melancholyBlue"
            text-color="text-white"
            rounded="rounded-sm"
            class="mt-36px h-41px p-2.5 "
            @click="$router.push('/reset/dragverify')"
        >
            提交
        </Button>
    </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
    name: "ResetLogin",
    components: {
        Input,
        Button,
    },
};
</script>
