import http from 'http'

const server = http.createServer(( request, response ) => {
    console.info(request)
    console.info(response)

    if(request.url === "/han"){
        response.write("Hello Farhan")
    }else{
        response.write("Hello HTTP Server")
       
    }
    response.end()
})

server.listen(3000)
