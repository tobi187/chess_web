<script setup lang="ts">

console.log("hi")

type Square = {
    color: string,
    piece: string
}

const board: Square[][] = []
var isblack = false

var els = [...Array(10).keys()].map(e => { piece: "PiecesPawn", color: "" })

board.push([...Array(10).keys()].map(e => {piece: "", color: ""}))

for (var i = 0; i < 6; i++) {
    const row = []
    for (var j = 0; j < 8; j++) {
        if (isblack) {
            row.push({ color: "bg-black", piece: "" })
        } else {
            row.push({ color: "bg-white", piece: "" })
        }
        isblack = !isblack
    }
    isblack = !isblack
    board.push(row)
}

const view_board = board.flat()

</script>
<template>
    <div class=" <container p-40 grid grid-cols-8 gap-0 h-screen w-screen">
        <WhiteSquare v-for="v, k in view_board" :key="k" :color="v.color" />
    </div>
</template>