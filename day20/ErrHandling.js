async function getUsers() {
    throw new Error("Database Failed")
}

async function showUsers() {
    try {
        const users = await getUsers()
        console.log(users)
    }catch (error) {
        console.log("Something went wrong:", error.message)
    }
}

showUsers()