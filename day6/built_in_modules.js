const os = require('os')
const path = require('path')

console.log(os.platform())
// console.log(path)
console.log(path.basename('/users/test/demo.txt'))

const filePath = path.join("users", "join", "paths.txt")
console.log(filePath)