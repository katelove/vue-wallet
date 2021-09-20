<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded shadow-normal"
  >
    <div class="flex justify-between items-center">
      <h3 class="text-25px text-center">安全验证</h3>
      <Icon
        class="close-top"
        :src="require('@/assets/icon/cross.png')"
        style="width:17px;height:17px"
      />
    </div>
    <div class="relative mt-30px flex flex-col justify-start">
      <Input class="w-full pl-0.5" type="text" placeholder=" 邮箱验证码" />
      <p class="absolute right-0 top-0 text-yewLime">获取验证码</p>
      <span class="text-melancholyBlue mt-2 text-xs text-left"
        >输入您的邮箱sk*****@gmail.com收到的验证码</span
      >
    </div>
    <div class="mt-12 flex flex-col justify-start">
      <Input type="text" placeholder=" 谷歌验证码" class="pl-0.5 w-full" />
      <span class="text-melancholyBlue mt-2 text-left text-xs"
        >安全项丢失?</span
      >
    </div>

    <div class="flex justify-end mt-12">
      <Button
        class="w-20 h-8"
        rounded="rounded-md"
        textColor="text-melancholyBlue"
        bg="bg-white"
        >取消</Button
      >
      <Button
        class="w-20 h-8"
        bg="bg-melancholyBlue"
        rounded="rounded-md"
        textColor="text-white"
        @click="$router.push('/reset/dragverify/safeVerify/resetPwd')"
        >确认</Button
      >
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "ResetSafeVerify",
  components: {
    Input,
    Button,
    Icon,
  },
};
</script>

<style>
.close-top {
  transform: translateY(-50%);
  top: 50%;
}
</style>
