/* eslint-disable vue/this-in-template */
<template>
    <div class="flex justify-center mt-10 flex-col z-10">
        <Title
            class="w-full h-12"
            heading="注冊  测试钱包"
        />
        <div class="border-melancholyBlue border mt-8 mr-8 ml-8 rounded-4px tab-shadow">
            <div class="flex justify-start items-center">
                <Button
                    class="w-1/3  h-12 text-center"
                    :text-color="[this.view === 'PhoneRegister' ? 'text-white' : 'text-yewLime']"
                    :bg="[this.view === 'PhoneRegister' ? 'bg-melancholyBlue' : 'bg-white']"
                    rounded="rounded-4px"
                    @click="changeView('PhoneRegister')"
                >
                    手机号
                </Button>
                <Button
                    class="w-1/3  h-12 text-center"
                    :text-color="[
                        this.view === 'MailRegister' ? 'text-white' : 'text-yewLime',
                    ]"
                    :bg="[
                        this.view === 'MailRegister' ? 'bg-melancholyBlue' : 'bg-white',
                    ]"
                    rounded="rounded-4px"
                    @click="changeView('MailRegister')"
                >
                    邮箱
                </Button>
                <Button
                    class="w-1/3  h-12 text-center"
                    :text-color="[
                        this.view === 'NameRegister' ? 'text-white' : 'text-yewLime',
                    ]"
                    :bg="[
                        this.view === 'NameRegister' ? 'bg-melancholyBlue' : 'bg-white',
                    ]"
                    rounded="rounded-4px"
                    @click="changeView('NameRegister')"
                >
                    用戶名
                </Button>
            </div>
        </div>
        <keep-alive>
            <component :is="view" />
        </keep-alive>
    </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";
import MailRegister from "@/views/Login/Register/MailRegister.vue";
import NameRegister from "@/views/Login/Register/NameRegister.vue";
import PhoneRegister from "@/views/Login/Register/PhoneRegister.vue";
export default {
    name: "Register",
    components: {
        Title,
        Button,
        PhoneRegister,
        MailRegister,
        NameRegister,
    },
    data() {
        return {
            view: "PhoneRegister",
        };
    },
    methods: {
        changeView(viewName) {
            this.view = viewName;
        },
    },
};
</script>

<style>
.tab-shadow {
  box-shadow: 4px 0px 3px rgba(0, 0, 0, 0.4);
}
</style>
