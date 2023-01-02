const http = require('http')

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.end('welcome you son of the bitch')
    }

    if (request.url === '/about') {
        response.end('kanoni kanonobs kakanit')
    }

    response.end(`
        <h1>utatatatata she maimuno</h1>
        <p>verao da ra vqna me</p>
    `)
})

server.listen(5000)