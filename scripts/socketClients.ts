import { io } from 'socket.io-client';

type JoinResponse = {
    roomKey: string
}

class Socket {
    connection;
    room_key = "";
    gameStarted = false

    constructor() {
        this.connection = io("ws://localhost:5000")
    }

    join(key: string) {
        this.connection.emit("join", { key: key }, (res : JoinResponse) => {
            this.room_key = res.roomKey
        })
    }

    create() {
        this.connection.emit("create", (res: JoinResponse) => {
            this.room_key = res.roomKey
        })
    }
    
    
}

export {Socket}