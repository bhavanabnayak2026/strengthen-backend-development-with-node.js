const createUser = require('./user')

function registerUser(name, age) {
    const user = createUser(name, age) 

    return user
}

module.exports = registerUser