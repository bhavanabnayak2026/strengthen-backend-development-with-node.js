function validateUser(name, age) {
    if (!name || !age) {
        return false
    }
    return true
}

module.exports = validateUser