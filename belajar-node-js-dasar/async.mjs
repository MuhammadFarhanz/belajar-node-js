function samplePromise(){
    return Promise.resolve('farhan')
}
const name = await samplePromise()
console.info(name)