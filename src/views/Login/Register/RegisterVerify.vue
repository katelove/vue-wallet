<template>
  <div>
    <component :is="model" @update="closeVerify"></component>
    <keep-alive>
      <component :is="view"></component>
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
  data() {
    return {
      view: this.$route.params.type,
      model: this.$route.params.action,
    };
  },
  methods: {
    closeVerify(resp) {
      console.log("RegisterVerify resp:" + resp);
      this.model = resp;
    },
  },
  components: {
    verify: ModalDragVerify,
    phone: PhoneVerify,
    mail: MailVerify,
    name: NameVerify,
  },
};
</script>
