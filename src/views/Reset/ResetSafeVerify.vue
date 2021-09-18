<template>
  <div class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded shadow-normal">
    <div class="flex justify-between">
      <h3 class="text-25px text-center">安全验证</h3>
      <Icon
        class="close-top"
        :src="require('@/assets/icon/cross.png')"
        style="width:17px;height:17px"
      />
    </div>
    <div>
        <Input type="text" placeholder="邮箱验证码"/>
        <p>获取验证码</p>
    </div>
    <Input type="text" placeholder="谷歌验证码"/>
    <div class="flex justify-end">
        <Button class="w-20 h-8" rounded="rounded-md" textColor="text-melancholyBlue">取消</Button>
        <Button class="w-20 h-8" bg="bg-melancholyBlue" rounded="rounded-md">确认</Button>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "ResetSafeVerify",
  components:{
      Input,
      Button
  }
};
</script>
