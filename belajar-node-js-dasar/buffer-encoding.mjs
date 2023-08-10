const buffer = Buffer.from("Muhammad Farhan", "utf-8")

console.info(buffer.toString())
console.info(buffer.toString('hex'))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from('TXVoYW1tYWQgRmFyaGFu', 'base64')
console.info(bufferBase64.toString('utf-8'))