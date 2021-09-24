<template>
    <keep-alive>
        <component :is="view" />
    </keep-alive>
</template>

<script>
import ModifyLoginPwd from "@/views/Login/SafeCenter/ModifyLoginPwd.vue";
import SetSecondPwd from "@/views/Login/SafeCenter/SetSecondPwd.vue";
import BindPhone from "@/views/Login/SafeCenter/BindPhone.vue";
import BindGoogle from "@/views/Login/SafeCenter/BindGoogle.vue";

export default {
    name: "SafeCenterPage",
    components: {
        modifyPwd: ModifyLoginPwd,
        secondPwd: ModifyLoginPwd,
        setSecondPwd: SetSecondPwd,
        bindPhone: BindPhone,
        bindGoogle: BindGoogle
    },
    data() {
        return {
            view: this.$route.params.type
        };
    }
};
</script>
