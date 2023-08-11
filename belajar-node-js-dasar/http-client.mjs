import https from 'https'

const endpoint = "https://eonkgbeq80fxfjn.m.pipedream.net"
const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        "Content-Type" : "application/json",
        "Accept" : 'application/json',
    }
},(response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    firstName: "Muhammad",
    lastName: 'Farhan'
})

request.write(body)
request.end()