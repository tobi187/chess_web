<script setup lang="ts">
defineProps<{
    color: string
}>()
</script>

<template>
    <div class="w-32 h-32 border-2 border-black" :class="color">

    </div>
</template>