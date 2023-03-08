import { io } from 'socket.io-client';

type JoinResponse = {
    roomKey: string
}

class Socket {
    connection
    room_key = "";
    gameStarted = false
    test = "oho"

    constructor() {
        this.connection = io("ws://localhost:5000")
    }

    join(key: string) {
        this.connection.emit("join", { key: key }, (res : number) => {
            if (res === 200) {
                this.room_key = key
            }
        })
    }

    create(saver: Ref<string>) {
        this.connection.emit("create", (res: JoinResponse) => {
            this.room_key = res.roomKey
            saver.value = this.room_key
        })
    }
}

export { Socket }