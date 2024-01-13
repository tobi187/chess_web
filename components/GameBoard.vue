<script setup lang="ts">
import { generateField } from '~/scripts/generator'
const queen = resolveComponent("Pieces/Queen")
const king = resolveComponent("Pieces/King")
const rook = resolveComponent("Pieces/Rook")
const bishop = resolveComponent("Pieces/Bishop")
const horse = resolveComponent("Pieces/Horse")
const pawn = resolveComponent("Pieces/Pawn")
const square = resolveComponent("Square")

const mapper = {"queen": queen, "king": king, "pawn": pawn, "rook": rook, "bishop": bishop, "horse": horse, "square": square}
const mm = new Map(Object.entries(mapper))
const board = generateField()
const view_board = board.flat().map(el => ({...el, piece: mm.get(el.piece.toString())}))

</script>
<template>
    <div class="container px-40 py-4 grid grid-cols-8 gap-0 h-screen w-screen">
        <component v-for="v, k in view_board" :key="k" :color="v.color" :team="v.team" :is="v.piece"></component>
    </div>
</template>