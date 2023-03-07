<script setup lang="ts">
defineProps<{
    color: string
}>()
</script>

<template>
    <div class="border-2 border-black aspect-square" :class="color">
        
    </div>
</template>