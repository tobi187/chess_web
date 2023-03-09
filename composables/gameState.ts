const game: figure[][] = reactive([])
const player = "1"

type figure = {
    piece: string
    player: string
    id: string
}

const initGame = () => {
    const row = ["rook", "horse", "bishop", "king", "queen", "bishop", "horse", "king"]
    game.push(row.map((e, i) => {
        return {piece: e, player: "1", id: e[0] + i.toString()}
    }))
    game.push([...Array(8)].map((e, i) => ({piece: "pawn", player: "1", id: e[0].toString()})))
    for (var i = 0; i< 8; i++) row.push()
}