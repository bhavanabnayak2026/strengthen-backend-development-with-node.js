function createUser(name, age){
    let status
    if(age < 18) {
        status = 'Minor'
    } else if (age <= 59) {
        status = 'Adult'
    } else {
        status = 'Senior'
    }

    return {
        name: name, 
        age: age, 
        status: status
    }
}

module.exports = createUser