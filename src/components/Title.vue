<template>
    <div class="flex items-center justify-center">
        <p
            class="font-normal text-25px"
        >
            {{ heading }}
            <slot/>
        </p>
    </div>
</template>

<script>
export default {
    props: ['heading'],
};
</script>
