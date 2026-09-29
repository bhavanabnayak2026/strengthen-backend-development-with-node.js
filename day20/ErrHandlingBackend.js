const http = require('http')

const server = http.createServer((req, res) => {
    try {
        const user = null;

        if(!user) {
            throw new Error('User not found')
        }

        res.end(JSON.stringify(user))
    } catch (error) {
        console.log(error.message)

        res.writeHead(404, {
            'Content-Type': 'application/json'
        })

        res.end(JSON.stringify({
            error: "User not found"
        }))

    }
})

server.listen(3000)