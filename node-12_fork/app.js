const { fork } = require("child_process");

const forkProcess = fork("fork.js");

forkProcess.on("message", (m) => {
  console.log(`Получено сообщение ... ${m}`);
});

forkProcess.on("close", (code) => {
  console.log(`Exited ... ${code}`);
});

forkProcess.send("Ping");
forkProcess.send("disconnect");
