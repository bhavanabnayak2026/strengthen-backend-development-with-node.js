const createUser = require('./user')
const getWelcomeMessage = require('./utils')

const name = process.argv[2]
const age = Number(process.argv[3])

if (!name || !age) {
    console.log("Please provide name and age");
    process.exit()
}

const user = createUser(name, age)

console.log("User:", user.name)
console.log("Age:", user.age)

console.log("Message:", getWelcomeMessage(user.name))

// command to run : node app.js Bhavana 26