<script setup lang="ts">
defineProps<{
    color: string
}>()
</script>

<template>
    <div class="border-2 border-black aspect-square" :class="color">
        <img src="~/assets/chess_pieces/pawn_gold.png" />
    </div>
</template>
