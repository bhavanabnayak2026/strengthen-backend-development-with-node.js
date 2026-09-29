function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Bhavana", 
                age: 26
            })
        }, 1000)
    })
}

async function showUser() {
    const user = await getUser()
    console.log(user.name)
    console.log(user.age)
}

showUser()