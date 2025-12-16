const { exec } = require('child_process')

const childProcess = exec('dir', (err, stdout, stderr) => { // D Unix или Linux вместо dir ls
  if(err) {
    console.error(err.message)
  }

  console.log(`stdout ${stdout}`)
  console.log(`stderr ${stderr}`)
})

childProcess.stdout.on('data', (code) => {
  console.log(`Код выхода ${code}`)
})

childProcess.stderr.on('data', (error) => {
  console.error(`Код выхода ${error}`)
})

childProcess.on('exit', (code) => {
  console.log(`Код выхода ${code}`)
})