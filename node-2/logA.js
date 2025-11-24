 function logA(a) {
  if(a > 0) {
    const log = require('./log.js')
    log()
  } else {
    console.log('Меньше нуля')
  }
 }


module.exports = { logA }