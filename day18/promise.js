const promise = new Promise((resolve, reject) => {
    reject('Failed')
})

promise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})