const fs = require("fs");
console.log("init");

setTimeout(() => {
  console.log(performance.now(), "timer 0");
}, 20);

setImmediate(() => {
  console.log(performance.now(), "immediate");
});

fs.readFile(__filename, () => {
  console.log("file readed");
});

setTimeout(() => {
  for (let index = 0; index < 10000000000; index++) {}
  console.log(performance.now(), "circle");
  Promise.resolve().then(() => {
    console.log("promise inside timeout");
  });
  process.nextTick(() => console.log("tick inside timeout"));
}, 20);

process.nextTick(() => console.log("tick"));

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("final");
