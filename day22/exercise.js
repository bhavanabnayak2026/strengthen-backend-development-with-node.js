const name = process.argv[2]
const age = Number(process.argv[3])

if(!name || !age){
    console.log('Please provide a name and age')
    process.exit()
}

console.log(`Name: ${name}`)
console.log(`Age: ${age}`)

//run: node exercise.js Bhavana 26