const validateUser = require("./validation")
const getUser = require("./user")

const name = process.argv[2]
const age = Number(process.argv[3])

if (!validateUser(name, age)) {
    console.log("Please provide name and age")
    process.exit(1)
}

const user = getUser(name, age)
console.log("Name:", user.name)
console.log("Age:", user.age)
console.log("Adult:", user.isAdult)
console.log("Senior:", user.isSenior)