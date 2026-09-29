//async fun always returns a promise 

async function getData() {
    return "Data returned"
}

getData().then((result) => {
    console.log(result)
})