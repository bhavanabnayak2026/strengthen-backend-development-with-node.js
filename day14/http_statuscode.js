const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Home page")
    } else {
        res.statusCode = 404
        res.setHeader("Content-Type", "text/plain")
        res.end("Page not found")
    }
})

server.listen(3000)

// 200 → OK
// 201 → Created
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Internal Server Error