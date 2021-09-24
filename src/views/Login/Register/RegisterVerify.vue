<template>
    <div>
        <!-- <component
            :is="model"
            @update="closeVerify"
        /> -->
        <keep-alive>
            <component
                :is="model"
                @update="closeVerify"
            />
        </keep-alive>
    </div>
</template>

<script>
import ModalDragVerify from "@/views/Login/ModalDragVerify.vue";
import PhoneVerify from "@/views/Login/Register/PhoneVerify.vue";
import MailVerify from "@/views/Login/Register/MailVerify.vue";
import NameVerify from "@/views/Login/Register/NameVerify.vue";
export default {
    name: "RegisterVerify",
    components: {
        verify: ModalDragVerify,
        phone: PhoneVerify,
        mail: MailVerify,
        name: NameVerify
    },
    data() {
        return {
            model: this.$route.params.action
        };
    },
    methods: {
        closeVerify(resp) {
            this.model = resp;
        },
    }
};
</script>
