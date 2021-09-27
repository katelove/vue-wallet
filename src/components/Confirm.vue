<template lang="">
    <div>
        <slot />
        <div class="flex justify-between">
            <button
                @click="$emit('onConfirm')"
            >
                confirm
            </button>
            <button
                @click="$emit('onCancel')"
            >
                cancel
            </button>
        </div>
    </div>
</template>

