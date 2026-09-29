console.log("Before")

process.exit() //node.js stops executing

console.log("After") // this will not be executed


// process.argv → gets command-line arguments
// process.env → gets environment variables
// process.exit() → terminates the Node.js process
// process.cwd() → tells us the current working directory