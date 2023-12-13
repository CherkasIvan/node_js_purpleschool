const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const logDbConnection = () => {
  console.log("db connected");
};

myEmitter.addListener("connected", logDbConnection);
myEmitter.emit("connected");

myEmitter.removeListener("connected", logDbConnection);
// myEmitter.off("connected", logDbConnection);
// myEmitter.removeAllListeners("connected");

myEmitter.emit("connected");

myEmitter.on("msg", (data) => {
  console.log(`Получил ${data}`);
});
myEmitter.prependListener("msg", (data) => {
  console.log("prepand");
});

myEmitter.emit("msg", "Привет. Получи мое сообщение");

myEmitter.once("off", () => {
  console.log(`Один раз вызов`);
});

myEmitter.emit("off");
myEmitter.emit("off");

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount("msg"));

console.log(myEmitter.listenerCount("msg"));

console.log(myEmitter.listeners("msg"));
console.log(myEmitter.listenerCount("off"));
console.log(myEmitter.listeners("off"));
console.log(myEmitter.eventNames());

myEmitter.on("error", (error) => {
  console.log(`Произошла ${error.message}`);
});

myEmitter.emit("error", new Error("Произошла ошибка"));

const target = new EventTarget();

const logTarget = () => {
  console.log("log target");
};

target.addEventListener("connected", logTarget);
target.dispatchEvent(new Event("connected"));
