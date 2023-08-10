import {Console} from "console";
import fs from 'fs'

const file = fs.createWriteStream('applicatioin.log')

const log = new Console ({
    stdout: file,
    stderr: file,
})

log.info('Hello World')
log.error('Hello World')

const person = {
    firstName: "Muhammad",
    lastName: 'Farhan'
}

log.table(person)