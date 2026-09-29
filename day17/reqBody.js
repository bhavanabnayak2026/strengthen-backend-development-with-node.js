const http = require('http')

const server = http.createServer((req, res) => {
    let body = ""

    req.on("data", (chunk) => {
        body += chunk
    })

    req.on("end", () => {
        console.log(body)

        res.end("Received!")
    })
})

server.listen(3000)


//how to test this 
/*
    Do this exactly 👇
Terminal 1 — start your server

In your day17 folder:

node reqBody.js

You should see that the terminal is now basically waiting. Don't type the curl command in this same terminal.

Keep it running.

Terminal 2 — send the POST request

Open another terminal window/tab and run:

curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name":"Bhavana","email":"test@example.com"}'

You should get:

Received!

in Terminal 2.

And in Terminal 1, where your Node server is running, you should see:

{"name":"Bhavana","email":"test@example.com"}
*/