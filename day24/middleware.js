// Node's built-in http module doesn't give us Express's middleware system automatically. Here we're manually creating the idea of middleware so you understand what's happening.

const http = require('http')


function logger(req, res, next) {
    console.log("Request received")
    next()
}

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        res.end("Hello from the server")
    })
})

server.listen(3000)