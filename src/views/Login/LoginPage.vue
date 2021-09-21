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
import LoginSafeVerify from "@/views/Login/LoginSafeVerify.vue";

export default {
  name: "LoginPage",
  data() {
    return {
      view: this.$route.params.safeVerify,
      model: this.$route.params.action,
    };
  },
  methods: {
    closeVerify(resp) {
      console.log("LoginVerify resp:" + resp);
      this.model = resp;
    },
  },
  components: {
    verify: ModalDragVerify,
    safeVerify: LoginSafeVerify,

  },
};
</script>
