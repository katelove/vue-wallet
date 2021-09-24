<template>
    <drag-verify-img-chip
        ref="dragVerify"
        :width="260"
        :imgsrc="img"
        :is-passing.sync="isPassing"
        :show-refresh="true"
        text="向右拖动滑块填充拼图"
        success-text="验证通过"
        handler-icon="el-icon-right"
        success-icon="el-icon-circle-check"
        handler-bg="#30BEED"
        radius="0px"
        @passcallback="pass"
    />
</template>

<script>
import dragVerifyImgChip from "vue-drag-verify-img-chip";
export default {
    components: {
        dragVerifyImgChip
    },
    data() {
        return {
            img: require("@/assets/verify/verify-img.png"),
            isPassing: false
        };
    },
    methods: {
        pass() {
            this.img = "";
            if (this.$route.params.action === "verify") {
                this.$route.params.action = "";
                this.$emit("update", this.$route.params.action);
                this.$emit("update", this.$route.params.type);
            } else {
                this.$router.push("/reset/dragverify/safeVerify");
            }
        }
    }
};
</script>
