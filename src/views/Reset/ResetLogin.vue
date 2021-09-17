<template>
    <div class="flex flex-col">
        <h3>重置登录密码</h3>
        <p>重置登录密码后，24小时内禁止提币和OTC</p>
        <Input placeholder="帐号"/>
        <Button bg="bg-melancholyBlue" textColor="text-white">提交</Button>
    </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
export default {
    name:'ResetLogin',
    components:{
        Input,
        Button
    }
}
</script>