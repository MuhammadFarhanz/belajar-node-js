import { EventEmitter } from "events";

const emmiter = new EventEmitter()

emmiter.addListener('hello', (name) => {
    console.info(name)
})

emmiter.emit('hello','farhan')