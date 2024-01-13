import type { ConcreteComponent } from "vue"

type Square = {
    color: string,
    piece?: ConcreteComponent,
    team?: string
}

const generateField = () => {
    const field : Square[][] = []
    field.push(pieceRow("w", true))
    field.push(pawnRow("w", false))
    for (let i = 0; i < 4; i++) {
        var row = [...Array(8).keys()].map(el => ({piece: "square", color: (i+el) % 2 === 0 ? "bg-white" : "bg-black"}))
        field.push(row)
    }
    field.push(pawnRow("b", true))
    field.push(pieceRow("b", false))
    return field
}

const pawnRow = (team: string, startsWhite: boolean) => {
    const getColor = (i: number) => (i + (startsWhite ? 0 : 1)) % 2 == 0 ? "bg-white" : "bg-black"
    return [...Array(8).keys()].map(num => ({
        piece: "pawn",
        team: team,
        color: getColor(num)
    }))
}

const pieceRow = (team: string, startsWhite: boolean) => {
    return [
        {piece: "rook", team: team, color: startsWhite ? "bg-white" : "bg-black"},
        {piece: "horse", team: team, color: !startsWhite ? "bg-white" : "bg-black"},
        {piece: "bishop", team: team, color: startsWhite ? "bg-white" : "bg-black"},
        {piece: "queen", team: team, color: !startsWhite ? "bg-white" : "bg-black"},
        {piece: "king", team: team, color: startsWhite ? "bg-white" : "bg-black"},
        {piece: "bishop", team: team, color: !startsWhite ? "bg-white" : "bg-black"},
        {piece: "horse", team: team, color: startsWhite ? "bg-white" : "bg-black"},
        {piece: "rook", team: team, color: !startsWhite ? "bg-white" : "bg-black"}
    ]    
}

export { generateField }
export type { Square }