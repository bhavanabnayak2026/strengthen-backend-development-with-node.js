const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Home page")
    } else if (req.url === "/about") {
        res.end("About page")
    } else if (req.url === "/users") {
        res.end("Users page")
    } else {
        res.end("404 page not found")
    }
})

server.listen(3000)