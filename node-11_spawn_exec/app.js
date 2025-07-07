const { spawn } = require("child_process");

// const child_process = exec("dir", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log(`stdout:  ${stdout}`);
//   console.log(`stderr:  ${stderr}`);
// });
const child_process = spawn("cmd.exe", ["/c", "dir"]);
// const child_process = spawn(
//   "dir"
//   // , (err, stdout, stderr) => {
//   // if (err) {
//   //   console.error(err.message);
//   // }
//   // console.log(`stdout:  ${stdout}`);
//   // console.log(`stderr:  ${stderr}`);
//   // }
// );

// child_process.on("exit", (code) => console.log(`code ${code}`));

child_process.stdout.on("data", (code) => console.log(`stdout data ${code}`));
child_process.stderr.on("data", (code) => console.log(`stderr data ${code}`));
child_process.stdout.on("exit", (code) => console.log(`code exit ${code}`));
``;
