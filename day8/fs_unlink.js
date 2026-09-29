const fs = require('fs')
fs.unlink('./message.txt', (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("File deleted successfully!")
})