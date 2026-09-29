const user = {
    name: "Jon",
    age: 30,
}

const jsonString = JSON.stringify(user)
console.log(jsonString)

console.log(typeof user)
console.log(typeof jsonString)


//json parse 
const jsonData = '{"name":"Bhavana", "age":"26"}'
const user2 = JSON.parse(jsonData)
console.log(user2)

