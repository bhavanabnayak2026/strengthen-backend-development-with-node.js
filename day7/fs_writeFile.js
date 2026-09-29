const fs = require('fs')

fs.writeFile('notes.txt', 'Node.js is fun!', (err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log('File written successfully')
})