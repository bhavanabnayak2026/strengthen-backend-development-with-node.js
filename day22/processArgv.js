// argv - argument vector
// vector is basically a collection/list of values

// run this node processArgv.js Bhavana 26

// console.log(process.argv)

// console.log(process.argv[2]) // Bhavana
// console.log(process.argv[3]) // 26

const name = process.argv[2]

if(!name){
    console.log('Please provide a name')
    process.exit()
}

console.log(`Hello ${name}`)