const fs = require("fs")

console.log("A")
const data = fs.readFileSync("message.txt", "utf8")
console.log("B")