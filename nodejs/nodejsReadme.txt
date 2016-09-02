Using call backs to achieve synchronous programming
1) Pass call backs to the function which is making asynchronous call and call these callbacks from the callback function associated with the asynchronous call.
Example:
var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)

The thing is, if an inner function call is asynchronous, then all the functions 'wrapping' this call must also be asynchronous in order to 'return' a response.