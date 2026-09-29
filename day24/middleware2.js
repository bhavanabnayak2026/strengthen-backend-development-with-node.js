const http = require('http')

function logger(req, res, next) {
    console.log("Request received")
    next()
}

function checkAuth(req, res, next) {
    console.log("Checking authentication")
    next()
}

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        checkAuth(req, res, () => {
            res.end("Welcome!")
        })
    })
})

server.listen(3000)

// And one important distinction: what we built today was a manual demonstration of the middleware concept using Node's http module. The actual middleware system you'll use in backend development comes with Express, which we'll learn later.

//middleware can continue (next()) / send response and stop the process / pass an error 