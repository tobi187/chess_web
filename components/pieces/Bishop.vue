<script setup lang="ts">
const props = defineProps<{
    color: string
    team: string // b, w
}>()

</script>

<template>
    <div class="border-2 border-black aspect-square p-2" :class="color">
        <img src="~/assets/chess_pieces/bishop_gold.png" class="aspect-square object-contain" v-if="props.team === 'w'" />
        <img src="~/assets/chess_pieces/bishop_dark.png" class="aspect-square object-contain" v-if="props.team === 'b'" />
    </div>
</template>
