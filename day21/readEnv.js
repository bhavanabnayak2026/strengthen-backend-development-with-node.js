// note: when you run this file use this command  node --env-file=.env readEnv.js else the env file will not be read and the values will be undefined

console.log(typeof process.env.PORT)

const port = Number(process.env.PORT)
const environment = process.env.NODE_ENV

console.log(port)
console.log(environment)