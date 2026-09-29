const getUser = require('./user')
const calculateTotal = require('./utils')

const user = getUser()

console.log("User:", user.name)
console.log("Age:", user.age)
console.log("Total:", calculateTotal(100, 5))