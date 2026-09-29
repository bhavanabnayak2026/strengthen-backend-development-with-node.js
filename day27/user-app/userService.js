// userService.js will coordinate user-related operations, while user.js will handle the actual user/business logic.
// A service is a module that handles a particular area of application logic.
const createUser = require('./user')

function registerUser(name, age) {
    const user = createUser(name, age)

    return user
}

module.exports = registerUser