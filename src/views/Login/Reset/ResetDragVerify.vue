<template>
    <div
        class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded shadow-normal"
    >
        <div class="flex justify-center items-center">
            <h3 class="text-25px flex-grow">
                滑图验证
            </h3>
            <Icon
                :src="require('@/assets/icon/cross.png')"
                style="width:17px;height:17px"
            />
        </div>
        <div class="flex justify-center">
            <dragVerify class="mt-2" />
        </div>
    </div>
</template>

<script>
import dragVerify from "@/components/DragVerify.vue";
import Icon from "@/components/Icon.vue";
export default {
    name: "ResetDragVerify",
    components: {
        dragVerify,
        Icon,
    },
};
</script>

