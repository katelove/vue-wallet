<template>
  <div>
    <ModalDragVerify/>
    <keep-alive>
      <component :is="view"></component>
    </keep-alive>
  </div>
</template>

<script>
import ModalDragVerify from "@/views/Login/ModalDragVerify.vue";
import PhoneVerify from "@/views/Login/Register/PhoneVerify.vue";
import MailVerify from "@/views/Login/Register/MailVerify.vue";
export default {
  name: "RegisterVerify",
  components: {
    ModalDragVerify,
    PhoneVerify,
    MailVerify
  },
};
</script>
