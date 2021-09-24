<template lang="">
    <div class="relative">
        <input
            :type="type"
            class="w-full h-33px border-black	border rounded"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
        >
        <img
            v-if="showEye"
            class="absolute right-2 top-0"
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
        return {
            pic: require("@/assets/icon/eye.png"),
            type: this.$attrs.type || "text"
        };
    },
    methods: {
        toggle() {
            this.type = this.type === "text" ? "password" : "text";
            this.pic = require("@/assets/icon/open-eye.png");
            if (this.type === "password") {
                this.pic = require("@/assets/icon/eye.png");
            }
        }
    }
};
</script>
