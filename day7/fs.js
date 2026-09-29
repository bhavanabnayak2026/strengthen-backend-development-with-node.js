const fs = require("fs")

fs.readFile("message.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err)
        return
    }

    // console.log(data.toString())
    console.log(data)
})