function samplePromise(){
    return Promise.resolve('farhan')
}

async function run () {
    const name = await samplePromise()
    console.info(name)
}

run()