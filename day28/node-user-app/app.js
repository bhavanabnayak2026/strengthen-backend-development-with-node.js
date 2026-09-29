// day-28 building a real project
const validateUser = require('./validation')
const registerUser = require('./userService')

const name = process.argv[2]
const age = Number(process.argv[3])

if (!validateUser(name, age)) {
    console.log('Please provide name and age')
    process.exit()
}

const user = registerUser(name, age)

console.log("Name:", user.name)
console.log("Age:", user.age)
console.log("Status:", user.status)

//op
// node app.js Bhavana 16
// node app.js Bhavana 26
// node app.js Ravi 65