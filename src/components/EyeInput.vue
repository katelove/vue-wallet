<template lang="">
    <div class="relative">
        <input
            :type="type"
            class="w-full border-none border-line"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
        >
        <img
            v-if="showEye"
            class="absolute right-0 top-0"
            :src="pic"
            @click="toggle"
        >
    </div>
</template>
<script>
export default {
    props: {
        showEye: {
            require: false,
            default: false,
            type: Boolean
        }
    },
    data() {
        return{
            pic: require("@/assets/icon/eye.png"),
            type: this.$attrs.type || 'text'
        };
    },
    methods: {
        toggle() {
            this.type = this.type === 'text' ? 'password' : 'text';
            this.pic = require("@/assets/icon/open-eye.png");
        }
    }
};
</script>

<style>
.border-line {
  border-bottom: 1px solid #b0b0b0;
}
</style>
