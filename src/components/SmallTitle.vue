<template>
    <div class="flex items-center justify-start">
        <p
            class="text-lg font-normal"
        >
            {{ title }}
            <slot/>
        </p>
    </div>
</template>

<script>
export default {
    props: ['title'],
};
</script>
