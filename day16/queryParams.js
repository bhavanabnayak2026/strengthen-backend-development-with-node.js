const http = require('http')

const server = http.createServer((req, res) => {

    // console.log("url"+ req.url)
    // console.log("host"+ req.headers.host)
    

    const url = new URL(req.url, `https://${req.headers.host}`)

    console.log(url.pathname)
    console.log(url.searchParams.get("category"))

    res.end("Done")
})

server.listen(3000)

// http://localhost:3000/products?category=shoes&sort=price