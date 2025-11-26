const fs = require('fs')

console.log('Init')

setTimeout(() => {
  console.log(performance.now())
},100)

setImmediate(() => {
  console.log('setImmediate')
})

fs.readFile(__filename, () => console.log('file readed'))

setTimeout(() => {
  for(let i=0; i < 10000000000; i++){

  }
  console.log('Done')
  Promise.resolve().then(() => {
  console.log('Promise 111')
})
process.nextTick(() => console.log('Tick 111'))
},0)

Promise.resolve().then(() => {
  console.log('Promise')
})

process.nextTick(() => console.log('Tick'))

console.log('Final')