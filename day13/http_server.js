const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)

    console.log("starting server")
    res.end("Hello from my server!")
    console.log("ending server")
})

server.listen("3000")