let http = require('http');
let fs = require('fs')
let server = http.createServer()

server.on('request', (request, response) => {
    response.writeHead(200, {
        'content-type': 'text/html; charset=utf8'
    })
    response.end('salut comment ca va')
})

server.listen(8080)