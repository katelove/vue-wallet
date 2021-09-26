<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-grey z-10">
        <div class="border-shadow border-melancholyBlue border p-4 rounded bg-white">
            <div class="flex justify-center items-center">
                <h3 class="text-lg flex-grow">
                    请完成安全认证
                </h3>
                <Icon
                    :src="require('@/assets/icon/cross.png')"
                    style="width:17px;height:17px"
                />
            </div>
            <div class="flex justify-center">
                <dragVerify
                    class="mt-2"
                    v-on="$listeners"
                />
            </div>
        </div>
    </div>
</template>

<script>
import dragVerify from "@/components/DragVerify.vue";
import Icon from "@/components/Icon.vue";
export default {
    name: "ModalDragVerify",
    components: {
        dragVerify,
        Icon
    }
};
</script>

<style scoped>
.bg-grey {
    background: rgba(0, 0, 0, 0.31);
}
.border-shadow {
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
</style>
