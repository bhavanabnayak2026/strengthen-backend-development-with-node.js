const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Data returned')
    }, 2000)
})

// instead of this we can use await
// promise.then((result) => {
//     console.log(result)
// })

async function getData() {
    try {
        const result = await promise
        console.log(result)
    } catch(error) {
        console.log(error)
    }
    
}

getData()