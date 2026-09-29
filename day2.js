console.log("A")

setTimeout(()=> {
    console.log("B")
})

// setTimeout(()=> {
//     console.log("B")
// }, 0)

console.log("C")

// Node.js can start asynchronous work and continue executing other JavaScript instead of simply waiting for that work to finish.