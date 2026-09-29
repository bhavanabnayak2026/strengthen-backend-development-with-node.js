function getUser(name, age) {
    const isAdult = age >= 18
    const isSenior = age >= 60

    return {
        name: name,
        age: age,
        isAdult: isAdult,
        isSenior: isSenior
    }
}

module.exports = getUser