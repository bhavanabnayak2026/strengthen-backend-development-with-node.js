const registerUser = require('./userService')
const validateUser = require('./validation')

const name = process.argv[2]
const age = Number(process.argv[3])

if (!validateUser(name, age)) {
    console.log("Please provide valid name and age.")
    process.exit()
}

const user = registerUser(name, age)

console.log("Name:", user.name)
console.log("Age:", user.age)
console.log("Status:", user.status)