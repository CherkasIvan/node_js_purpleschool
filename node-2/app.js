const { characters, stealRing } = require('./characters.js')
const log = require('./log.js')
const { logA } = require('./logA.js')

let myChars = characters
let a = -1

myChars = stealRing(myChars, 'Фродо')

for(const c of characters){
  console.log(c)
}

log()
logA(a)

