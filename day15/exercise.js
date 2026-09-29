const http = require('http')

const server = http.createServer((req, res) => {
    const user = {
        name: "Bhavana",
        age: 26,
    }

    res.statusCode = 200
    res.setHeader('Content-Type', "application/json")
    res.end(JSON.stringify(user))
})

server.listen(3000)