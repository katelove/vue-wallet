<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded shadow-normal"
  >
    <div class="relative">
      <h3 class="text-25px text-center">新密碼</h3>
      <Icon
        class="absolute right-0 close-top"
        :src="require('@/assets/icon/cross.png')"
        style="width:17px;height:17px"
      />
    </div>
    <div class="relative mt-30px">
      <Input class="w-full pl-0.5" type="password" placeholder=" 新登录密码" />
      <Icon class="absolute right-0 close-top" :src="require('@/assets/icon/more.png')" style="width:5px;height:17px" />
    </div>
    <div class="mt-12 flex flex-col justify-start">
      <span class="text-yewLime  text-left text-xs"
        >8-20位字符 不能为纯数字</span
      >
      <Input
        type="password"
        placeholder=" 确认新密码"
        class="pl-0.5 w-full mt-2"
      />
    </div>
    <Button
      bg="bg-melancholyBlue"
      textColor="text-white"
      rounded="rounded-sm"
      class="mt-48px h-32px p-2.5 "
      >提交</Button
    >
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Icon from "@/components/Icon.vue";
import Button from "@/components/Button.vue";
export default {
  name: "ResetDragVerify",
  components: {
    Input,
    Icon,
    Button,
  },
};
</script>

<style>
.close-top {
  transform: translateY(-50%);
  top: 50%;
}
</style>
