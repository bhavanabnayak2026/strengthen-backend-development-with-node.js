function validateUser(name, age) {
    if (!name) {
        return false
    }

    if(Number.isNaN(age) || age < 0) {
        return false
    }

    return true
}

module.exports = validateUser