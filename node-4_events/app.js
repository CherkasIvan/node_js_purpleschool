const { error } = require("console");
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

const logDbConnection = () => {
  console.log("Db connected");
};

myEmitter.addListener("connected", logDbConnection);
myEmitter.emit("connected");

myEmitter.removeListener("connected", logDbConnection);
// myEmitter.off("connected", logDbConnection);
// myEmitter.removeAllListeners("connected", logDbConnection);
myEmitter.emit("connected");

// logDbConnection();

myEmitter.on("msg", (data) => {
  console.log(`Привет, ${data}`);
});
myEmitter.prependListener("msg", (data) => {
  console.log(`Prepend`);
});
myEmitter.emit("msg", "ПОЛУЧИ МОЕ СООБЩЕНИЕ");

myEmitter.once("off", () => {
  console.log("Я вызвался 1 раз и не больше");
});

myEmitter.emit("off");
myEmitter.emit("off");
myEmitter.emit("off");

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());

console.log(myEmitter.listenerCount("msg"));
console.log(myEmitter.listenerCount("off"));
console.log(myEmitter.listeners("msg"));
console.log(myEmitter.eventNames("msg"));

myEmitter.on("error", (error) => {
  console.log(`Произошла ошибка ${error.message}`);
});

myEmitter.emit("error", new Error("Бум"));

const target = new EventTarget();

const logTarget = () => {
  console.log("connected to target");
};

target.addEventListener("connected", logTarget);
target.dispatchEvent(new Event("connected"));
