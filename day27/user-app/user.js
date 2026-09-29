function createUser(name, age) {
    let status 
    if (age < 18) {
        status = "Minor"
    } else if (age >= 18 && age <= 59) {
        status = "Adult"
    } else if (age >= 60) {
        status = "Senior"
    }

    return {
        name: name, 
        age: age,
        status: status
    }
}

module.exports = createUser