const { fork } = require('child_process')

const forkProcess = fork('fork.js')

forkProcess.on('message', (msg) => {
  console.log(`Получил сообщение ${msg}`)
})

forkProcess.on('close', (code) => {
  console.log(`При выходе получил код ${code}`)
})

forkProcess.send('Ping!')